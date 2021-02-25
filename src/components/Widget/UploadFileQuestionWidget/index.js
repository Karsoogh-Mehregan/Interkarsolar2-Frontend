import { Button, Divider, makeStyles, Typography } from '@material-ui/core';
import {
  CloudUpload as CloudUploadIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
} from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';

import { sendAnswer } from '../../../redux/actions/exam';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  uploadButton: {
    marginLeft: 'auto',
    whiteSpace: 'nowrap',
  },
  small: {
    fontSize: 10,
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
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

const UploadFileQuestionWidget = ({
  id,
  text = 'محل آپلود فایل',
  last_submit,
  disabled = true,
  sendAnswer,
}) => {
  const classes = useStyles({ haveFile: !!last_submit });
  const onChangeFile = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      if (e.target.files[0].size <= 8e6) {
        sendAnswer();
      } else {
        e.target.value = '';
        e.target.setCustomValidity('Maximum upload file size is 8 MB.');
        e.target.reportValidity();
      }
    }
  };

  return (
    <>
      <div className={classes.flex}>
        <Typography>{text}</Typography>
        <input
          accept="application/pdf,image/*"
          style={{ display: 'none' }}
          id={'raised-button-file' + id}
          type="file"
          onChange={onChangeFile}
        />
        <Button
          component="label"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<CloudUploadIcon />}
          className={classes.uploadButton}>
          بارگذاری فایل
        </Button>
      </div>
      {last_submit && (
        <>
          <Divider className={classes.divider} />
          <div className={classes.flex}>
            <Typography
              component="small"
              variant="body2"
              className={classes.small}>
              آخرین ارسال:
            </Typography>
            <Button
              size="small"
              endIcon={<DescriptionOutlinedIcon />}
              className={classes.lastUploadButton}
              // href={'http://a-lympiad.rastaiha.ir' + last_submit.answer_file} // TODO: fix in back
              component="a"
              download
              target="_blank">
              {last_submit.file_name}
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, { sendAnswer })(
  UploadFileQuestionWidget
);
