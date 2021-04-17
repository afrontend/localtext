import React from 'react';

function TextPanel ({ value, placeholder, onChange }) {
  return <textarea className="TextPanel" value={value} onChange={onChange} placeholder={placeholder} className="TextPanel"></textarea>
}

export default TextPanel
