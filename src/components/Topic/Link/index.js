import React from 'react';
import { Flex } from '@rebass/grid';
import urlMask from 'utils/urlMask';
import Tags from './Tags';
import cm from './link.module.css'


const Link = ({ isEdit, title, url, onDelete, tags, onTagDelete, onTagAdd }) =>
  <Flex
    justifyContent="space-between"
    alignItems="center"
  >
    {isEdit && <LinkIcon />}

    <div className={cm.container}>
      <h3>{title}</h3>

      <span className={cm.url}>
        {urlMask(url)}
      </span>

      <Tags
        tags={tags}
        isEdit={isEdit}
        onDelete={onTagDelete}
        onAdd={onTagAdd}
      />
    </div>

    {isEdit &&
      <span
        className={cm.delete}
        onClick={() => onDelete(url)}
      />}
  </Flex>

export default Link;

const LinkIcon = () =>
  <div className={cm.icon}>
    <svg width="9px" height="13px" viewBox="0 0 9 13">
      <g
        id="Perspectives"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Create-Topic"
          transform="translate(-435.000000, -206.000000)"
          fill="#ACACAC"
          fillRule="nonzero"
        >
          <g id="Topic-(Default)" transform="translate(415.000000, 111.000000)">
            <g id="Content" transform="translate(20.000000, 72.000000)">
              <g id="Link-2">
                <g id="Group" transform="translate(0.000000, 23.000000)">
                  <circle id="Oval" cx="1.5" cy="1.5" r="1.5" />
                  <circle id="Oval" cx="7.5" cy="1.5" r="1.5" />
                  <circle id="Oval" cx="1.5" cy="6.5" r="1.5" />
                  <circle id="Oval" cx="7.5" cy="6.5" r="1.5" />
                  <circle id="Oval" cx="1.5" cy="11.5" r="1.5" />
                  <circle id="Oval" cx="7.5" cy="11.5" r="1.5" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
