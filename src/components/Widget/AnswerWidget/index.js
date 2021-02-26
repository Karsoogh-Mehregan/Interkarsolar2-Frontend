import { Button, makeStyles, Paper, Typography, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TinyPreview from '../../tiny_editor/react_tiny/Preview';
import TinyEditorComponent from '../../tiny_editor/react_tiny/TinyEditorComponent';
import {
  getPreviousAnswer,
  sendAnswer,
} from '../../../redux/actions/exam'

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const AnswerWidget = ({
  getPreviousAnswer,
  sendAnswer,
  qc_id,
  text,
  previousFileAnswer,
  previousTextAnswer = 'پاسخت به این سوال رو یا به صورت متن این‌جا تایپ کن، یا در قالب یک فایل بارگزاریش کن.',
}) => {
  const classes = useStyles();
  const [fileAnswer, setFileAnswer] = useState('ddd');
  const [textAnswer, setTextAnswer] = useState(previousTextAnswer);

  const doSendAnswer = () => {
    sendAnswer(fileAnswer, textAnswer, qc_id)
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
      if (qc_id) {
        getPreviousAnswer(qc_id)
      }
    }
    , [qc_id])

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
            content={previousTextAnswer}
            onChange={setTextAnswer}
          />
        </Grid>
        <Grid item container xs={12} sm={6} justify='center' alignItems='center'>
          <input
            accept="application/pdf,image/*"
            type="file"
            onChange={onChangeFile}
          />
        </Grid>
        <Grid item container xs={12} sm={6} justify='center' alignItems='center'>
          <Button
            fullWidth
            variant="contained"
            color="primary"
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
})

export default connect(
  mapStateToProps,
  {
    getPreviousAnswer,
    sendAnswer,
  }
)(AnswerWidget);
