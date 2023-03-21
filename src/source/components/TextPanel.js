import React from 'react';

function TextPanel ({ value, placeholder, onChange }) {
  return <textarea className="textPanel" value={value} onChange={onChange} placeholder={placeholder}></textarea>
}

export default TextPanel
