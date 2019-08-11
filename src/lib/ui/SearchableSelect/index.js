import React, {createRef} from 'react'
import pt from 'prop-types'
import {compose, withHandlers, withStateHandlers} from 'recompose'
import nanoid from 'nanoid'
import {noop} from 'lodash'
import cm from './searchableSelect.css'


const SearchableSelectDumb = ({
  name, value, onChange, onCreate, optToLabel, inputProps,
  searchTerm, menuOpts, refreshMenu, setState,
}) => {
  const inputRef = createRef(null)

  return <div className={cm.ss}>
    <ul className={cm.choices}>
      {value.map((item, idx) =>
        <li
          key={nanoid()}
          children={optToLabel(item)}
          onClick={() => {
            const nextValue = value.slice(0, idx).concat(value.slice(idx + 1))
            onChange({target: {name, value: nextValue}})
            inputRef.current.focus()
          }}
        />
      )}
    </ul>

    <input
      ref={inputRef}
      value={searchTerm}
      onChange={e => {
        setState({searchTerm: e.target.value})
        refreshMenu(e.target.value)
      }}
      onKeyDown={e => {
        if (!onCreate || e.key !=='Enter')
          return

        const nextValue = value.concat(onCreate(e.target.value))
        onChange({target: {name, value: nextValue}})
        setState({searchTerm: ''})
      }}
      {...inputProps}
    />

    <ul className={cm.menu}>
      {menuOpts.map(item =>
        <li
          key={nanoid()}
          children={optToLabel(item)}
          onClick={() => {
            const nextValue = value.concat(item)
            onChange({target: {name, value: nextValue}})
            setState({searchTerm: '', menuOpts: []})
            inputRef.current.focus()
          }}
        />
      )}
    </ul>
  </div>
}

const SearchableSelect = compose(
  withStateHandlers({
    searchTerm: '',
    menuOpts: [],
  }, {
    setState: () => state => state,
  }),

  withHandlers({
    refreshMenu: ({getOpts, setState, onError}) => q =>
      !q
        ? setState({menuOpts: []})
        : Promise.resolve(getOpts(q))
          .then(menuOpts =>
            setState({menuOpts})
          )
          .catch(onError),
  }),
)(
  SearchableSelectDumb
)

SearchableSelect.displayName = 'SearchableSelect'

SearchableSelect.propTypes = {
  name: pt.string,
  value: pt.array,
  getOpts: pt.func.isRequired,
  optToLabel: pt.func,
  onChange: pt.func,
  onError: pt.func,
  onCreate: pt.func,
  inputProps: pt.object,
}

SearchableSelect.defaultProps = {
  name: '',
  value: [],
  onChange: noop,
  onError: noop,
  optToLabel: opt => opt.title || opt.label || opt.name,
  inputProps: {},
}

export default SearchableSelect
