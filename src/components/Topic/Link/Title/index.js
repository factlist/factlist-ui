import React, {useState} from 'react'
import H3 from './H3'
import Input from './Input'

const Title = ({ title: linkTitle, isEdit, updateTitle }) => {
  let [title, setTitle] = useState(linkTitle);
  return isEdit ? <Input
                    placeholder="Enter your topic title."
                    value={title}
                    onInput={(e)=>setTitle(e.target.value)}
                    onBlur={() => updateTitle(title)} />
                : <H3>{title}</H3>
}

export default Title
