import { Button, makeStyles, Paper, Typography, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TinyPreview from '../../tiny_editor/react_tiny/Preview';
import TinyEditorComponent from '../../tiny_editor/react_tiny/TinyEditorComponent';
import {
  DescriptionOutlined as DescriptionOutlinedIcon,
} from '@material-ui/icons';
import {
  getPreviousAnswer,
  sendAnswer,
} from '../../../redux/actions/exam'

const BASE_URL_OF_FILES_ON_DATABASE = 'https://backend.interkarsolar.ir/media/'
const INSTEAD_OF_BLANK = 'پاسخت به این سوال رو یا به صورت متن این‌جا تایپ کن، یا در قالب یک فایل بارگذاریش کن.';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
  },
  lastUploadButton: {
    fontSize: 10,
    color: '#334499',
    '& .MuiButton-endIcon': {
      marginLeft: 2,
      '& > *:first-child': {
        fontSize: 11,
      },
    },
  },
}));

const AnswerWidget = ({
  isFetching,
  getPreviousAnswer,
  sendAnswer,
  qc_id,
  text,
}) => {
  const classes = useStyles();
  const [previousFileAnswer, setPreviousFileAnswer] = useState();
  const [fileAnswer, setFileAnswer] = useState();
  const [textAnswer, setTextAnswer] = useState();

  const doSendAnswer = () => {
    sendAnswer(fileAnswer, textAnswer ? textAnswer : INSTEAD_OF_BLANK, qc_id)
  }

  const onChangeFile = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 8e6) {
        setFileAnswer(e.target.files[0]);
      } else {
        e.target.value = '';
        e.target.setCustomValidity('حداکثر حجم فایلی که می‌تونی بفرستی ۸ مگابایته');
        e.target.reportValidity();
      }
    }
  };

  useEffect(
    () => {
      const fetchPreviousAnswers = async () => {
        const action = await getPreviousAnswer(qc_id)
        console.log(action);
        if (!action.response) return;
        if (action.response.res_code === 602) {
          setPreviousFileAnswer('');
          setTextAnswer(INSTEAD_OF_BLANK)
          return;
        }
        setPreviousFileAnswer(action.response.data.file ? BASE_URL_OF_FILES_ON_DATABASE + action.response.data.file : '');
        setTextAnswer(action.response.data.answer)
      }
      if (qc_id) {
        fetchPreviousAnswers();
      }
    }
    , [qc_id, getPreviousAnswer])

  return (
    <Paper className={classes.paper}>
      <Grid container justify='center' spacing={1}>
        <Grid item xs={12}>
          <TinyPreview
            frameProps={{
              frameBorder: '0',
              scrolling: 'no',
              width: '100%',
            }}
            content={text}
          />
        </Grid>
        <Grid item xs={12}>
          <TinyEditorComponent
            id={`text-answer-${Math.floor(Math.random() * 1000)}`}
            content={textAnswer}
            onChange={setTextAnswer}
          />
        </Grid>
        <Grid item container xs={12} sm={6} justify='center' alignItems='center'>
          <Grid item container justify='center' alignItems='center'>
            <input
              id={`file-answer-${Math.random()}`}
              accept="application/pdf,image/*"
              type="file"
              value=''
              onChange={onChangeFile}
            />
          </Grid>
          {previousFileAnswer &&
            <Grid item container justify='center' alignItems='center'>
              <Button
                size="small"
                endIcon={<DescriptionOutlinedIcon />}
                className={classes.lastUploadButton}
                href={previousFileAnswer}
                component="a"
                download
                target="_blank">
                آخرین فایل ارسالی
              </Button>
            </Grid>
          }
        </Grid>
        <Grid item container xs={12} sm={6} justify='center' alignItems='center'>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={isFetching}
            onClick={doSendAnswer}>
            ذخیره جواب
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qc_id: ownProps.qc_id,
  isFetching: state.exam.isFetching,
})

export default connect(
  mapStateToProps,
  {
    getPreviousAnswer,
    sendAnswer,
  }
)(AnswerWidget);
