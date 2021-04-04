import React from 'react';

function TextPanel ({ placeholder }) {
  return <div>
    <textarea placeholder={ placeholder } className="TextPanel" rows="3" cols="80"></textarea>
  </div>
}

export default TextPanel
