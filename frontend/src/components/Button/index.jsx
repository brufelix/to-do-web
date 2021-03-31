import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

export default props => {
  let style = "container-icon "
  style += props.search
    ? 'search'
    : ''
  style +=
    props.done
      ? 'done'
      : ''
  style += props.back
    ? 'back'
    : ''
  style += props.trash
    ? 'trash'
    : ''
  style += props.disabled
    ? ''
    : 'disabled'
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled
        ? false
        : true
      }
      className={style}
    >
      <FontAwesomeIcon
        className="icon"
        icon={props.icon}
      />
    </button>
  )
}