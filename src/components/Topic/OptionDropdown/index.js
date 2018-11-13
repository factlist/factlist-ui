import React, { Component } from 'react'
import { Manager, Reference, Popper } from 'react-popper'
import ClickOutside from 'react-click-outside'
import Button from './Button'
import Menu from './Menu'
import Arrow from './Arrow'
import styled from 'styled-components'

const A = styled.a`
  display: block;
  text-decoration: none;
  font-size: 14px;
  padding: 3px 30px 3px 0;
  color: rgba(0,0,0,.68);

  &:hover {
    text-decoration: underline;
  }
`

class OptionDropdown extends Component {
  state = {
    isOpen: false,
  }

  open = this.open.bind(this)
  close = this.close.bind(this)

  open() {
    this.setState({ isOpen: true })
  }

  close() {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state

    return (
      <Manager>
        <Reference>
          {({ ref }) => <Button innerRef={ref} onClick={this.open} />}
        </Reference>

        {isOpen && (
          <ClickOutside onClickOutside={this.close}>
            <Popper
              placement='bottom'
              modifiers={{ applyStyle: { enabled: true } }}>
              {({ ref, style, placement, arrowProps }) => (
                <Menu innerRef={ref} style={style} data-placement={placement}>
                  <A href="">Edit</A>
                  <A href="">Embed</A>
                  <A href="">Delete</A>
                  <A href="">Report</A>

                  <Arrow
                    innerRef={arrowProps.ref}
                    style={arrowProps.style}
                    data-placement={placement} />
                </Menu>
              )}
            </Popper>
          </ClickOutside>
        )}
      </Manager>
    )
  }
}

export default OptionDropdown
