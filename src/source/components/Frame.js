import React, { useState } from 'react';
import Logo from './Logo'
import TextPanel from './TextPanel'
import Button from './Button'
import { textPathsAryToObj, toJSONString} from 'ary2json'

function Frame () {
  const [csvText, setCSVText] = useState('Wrong password, 잘못된 패스워드, errorMsg, invalidPassword');
  const [jsonString, setJsonString] = useState('');

  function convert() {
    setJsonString(toJSONString(textPathsAryToObj([csvText.split(',')], {numberOfLanguageColumn: 2})))
  }

  return <div className="Frame">
    <Logo />
    <TextPanel value={csvText} onChange={(e) => setCSVText(e.target.value)} placeholder="CSV Text" />
    <Button onClick={convert} />
    <TextPanel value={jsonString} placeholder="JSON Object" />
  </div>
}

export default Frame
