import React, { useState, useRef, useEffect  } from 'react';
import cm from './tags.module.css'


const Tags = ({ tags, isEdit, onAdd, onDelete }) => {
  const inputEl = useRef(null);
  const [value, setValue] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen && inputEl.current.focus();
  }, [isOpen]);

  const handleNewTag = () => {
    setOpen(true);
  }

  const submitTag = () => {
    if (value === '') { return setOpen(false); }
    if (tags.find((tag) => tag === value)) { return; }
    onAdd(value);
    setValue('');
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitTag()
    }
  }

  const handleOnEdit = ({title, id}) => {
    onDelete(id);
    setValue(title);
    handleNewTag();
  }

  const handleOnDelete = (id) => {
    onDelete(id);
  }

  const handleOnChange = (e) => {
    setValue(e.target.value);
  }

  return <div className={cm.container}>
    {tags && tags.map(({title, id}, index) =>
      <div
        className={cm.item}
        key={`tag-${id}-${index}`}
        onDoubleClick={() => handleOnEdit({id, title})}
      >
        {title}

        {isEdit &&
          <div
            className={cm.remove}
            onClick={() => handleOnDelete(id)}
            children='x'
          />}
      </div>
    )}

    {isEdit && isOpen &&
      <input
        className={cm.input}
        value={value}
        onChange={handleOnChange}
        onBlur={submitTag}
        ref={inputEl}
        onKeyPress={handleOnKeyPress}
      />}

    {isEdit && !isOpen && (
      <div
        className={cm.addTag}
        onClick={() => setOpen(true)}
      >
        {tags.length === 0 ? <div className={cm.badge}>Add new Tag</div> : null}
        <div>+</div>
      </div>
    )}
  </div>
}

export default Tags;
