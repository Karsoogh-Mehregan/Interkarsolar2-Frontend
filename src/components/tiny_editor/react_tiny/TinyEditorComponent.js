import 'tinymce/tinymce';
// import '../../../assets/styles/tiny.css';

import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

import config from '../config';

const TinyEditor = ({ content, onChange, ...rest }) => {
  return (
    <Editor init={{ ...config }} value={content} {...rest} onEditorChange={onChange} />
  );
};

export default TinyEditor;
