import React, { useState, useRef, useEffect  } from 'react';
import Container from './Container';
import TagsFlex from './TagsFlex';
import Item from './Item';
import AddTag from './AddTag';
import Remove from './Remove';
import Badge from './Badge';
import Input from './Input';

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

  return (
    <Container>
      <TagsFlex>
        { tags && tags.map(({title, id}, index) => (
          <Item key={`tag-${id}-${index}`} onDoubleClick={() => handleOnEdit({id, title})}>
            {title}
            {isEdit && <Remove onClick={() => handleOnDelete(id)}>x</Remove>}
          </Item>
        ))}

        { isEdit && isOpen &&
          <Input value={value}
                  onChange={handleOnChange}
                  onBlur={submitTag}
                  newTag={handleNewTag}
                  innerRef={inputEl}
                  onKeyPress={handleOnKeyPress}  /> }

        { isEdit && !isOpen && (
          <AddTag onClick={() => setOpen(true)}>
            {tags.length === 0 ? <Badge>Add new Tag</Badge> : null}
            <div>+</div>
          </AddTag>
        )}
    </TagsFlex>
  </Container>
  )
}
export default Tags;
