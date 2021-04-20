import 'tinymce/tinymce';
// import '../../../assets/styles/tiny.css';

import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

import config from '../config';

const TinyEditor = ({ value, initialValue, onChange, ...rest }) => {
  return (
    <Editor init={{ ...config }} initialValue={initialValue} value={value} {...rest} onEditorChange={onChange} />
  );
};

export default TinyEditor;
