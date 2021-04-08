import React, { useState } from 'react';
import Logo from './Logo'
import TextPanel from './TextPanel'
import Button from './Button'
import { textPathsAryToObj, toJSONString} from 'ary2json'

const compose = (...fns) =>
  (arg) => (fns.reduce((composed, f) => f(composed) ,arg))

function Frame () {
  const [csvText, setCSVText] = useState('Wrong password, 잘못된 패스워드, errorMsg, invalidPassword');
  const [jsonString, setJsonString] = useState('');
  const [numberOfLanguageColumn, setNumberOfLanguageColumn] = useState(2);

  const convert = compose(
    (csv) => textPathsAryToObj([csv.split(',')], {numberOfLanguageColumn}),
    toJSONString,
    setJsonString
  )

  return <div className="Frame">
    <Logo />
    <TextPanel value={csvText} onChange={(e) => setCSVText(e.target.value)} placeholder="CSV Text" />
    <span>
      a number of language column:
    </span>
    <select name="a number of language column" value={numberOfLanguageColumn} onChange={(e) => setNumberOfLanguageColumn(+e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <Button onClick={() => convert(csvText)} />
    <TextPanel value={jsonString} onChange={e => e} placeholder="JSON Object" />
  </div>
}

export default Frame
