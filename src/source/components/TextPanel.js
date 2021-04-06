import React from 'react';

function TextPanel ({ value, placeholder, onChange }) {
  return <div>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className="TextPanel" rows="30" cols="80"></textarea>
  </div>
}

export default TextPanel
