import React from 'react';
import Logo from './Logo'
import TextPanel from './TextPanel'
import Button from './Button'

function Frame () {
  return <div className="Frame">
    <Logo />
    <TextPanel placeholder="CSV Text" />
    <Button onClick={ () => alert('Sorry! under construction') } />
    <TextPanel placeholder="JSON Object" />
  </div>
}

export default Frame
