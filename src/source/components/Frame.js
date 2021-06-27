import React, { useState } from 'react';
import Logo from './Logo'
import TextPanel from './TextPanel'
import Button from './Button'
import Description from './Description'
import { textPathsAryToObj, toJSONString} from 'ary2json'

const compose = (...fns) =>
  (arg) => (fns.reduce((composed, f) => f(composed) ,arg))

const splitWithCR = csvText => {
  // window.console.log(csvText)
  return csvText ? csvText.split(/\n/).map(text => text.split(',')) : []
}

function Frame () {
  const [csvText, setCSVText] = useState('Hello, 안녕, key1, key2\nWorld, 세상, key1, key3');
  const [jsonString, setJsonString] = useState('');
  const [numberOfLanguageColumn, setNumberOfLanguageColumn] = useState(2);

  const convert = compose(
    splitWithCR,
    (textPathsAry) => textPathsAryToObj(textPathsAry, {numberOfLanguageColumn}),
    toJSONString,
    setJsonString
  )

  return <div className="Frame">
    <Logo className="Logo" />
    <Description text="CSV" />
    <TextPanel value={csvText} onChange={(e) => setCSVText(e.target.value)} placeholder="CSV Text" />
    <div className="Info">
      <select name="language column" value={numberOfLanguageColumn} onChange={(e) => setNumberOfLanguageColumn(+e.target.value)}>
        <option value="1">language column 1</option>
        <option value="2">language column 2</option>
        <option value="3">language column 3</option>
        <option value="4">language column 4</option>
        <option value="5">language column 5</option>
      </select>
      <Button onClick={() => convert(csvText)} />
    </div>
    <Description text="Logo" />
    <TextPanel value={jsonString} onChange={e => e} placeholder="JSON Object" />
  </div>
}

export default Frame
