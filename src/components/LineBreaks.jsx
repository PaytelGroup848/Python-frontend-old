import React from 'react';
export default function LineBreaks({ text }) {
  return text.split('<br>').map((line, index) => <React.Fragment key={index}>{index > 0 && <br />}{line}</React.Fragment>);
}
