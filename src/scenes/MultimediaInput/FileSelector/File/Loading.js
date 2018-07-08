import React from 'react'
import styled from 'styled-components'

const LoadingSVG = ({ className }) => (
  <svg
    width="228px"
    height="261px"
    viewBox="0 0 228 261"
    version={1.1}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className}
  >
    <defs />
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect id="b1" fill="#F9F9F9" x={0} y={196} width={76} height={65} />
      <rect id="b2" fill="#F9F9F9" x={0} y={98} width={152} height={65} />
      <rect id="b3" fill="#F9F9F9" x={0} y={0} width={228} height={65} />
      <rect id="c1" fill="#000000" x={0} y={196} width={0} height={65} />
      <rect id="c2" fill="#000000" x={0} y={98} width={0} height={65} />
      <rect id="c3" fill="#000000" x={0} y={0} width={0} height={65} />
    </g>
    <animate
      xlinkHref="#c1"
      attributeType="CSS"
      attributeName="width"
      from={0}
      to={76}
      dur=".5s"
      fill="freeze"
    />
    <animate
      xlinkHref="#c2"
      attributeType="CSS"
      attributeName="width"
      from={0}
      to={152}
      dur="1s"
      begin={0.5}
      fill="freeze"
    />
    <animate
      xlinkHref="#c3"
      attributeType="CSS"
      attributeName="width"
      from={0}
      to={228}
      dur="1.5s"
      begin={1.5}
      fill="freeze"
    />
  </svg>
)

const Loading = styled(LoadingSVG)`
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export default Loading
