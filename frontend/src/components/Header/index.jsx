import React from 'react'

import './index.css'

export default props => (
  <header
    className="page-header"
  >
    <h1
      className="text-page-header"
    >
      {props.name}
      <small
        className="small"
      >
        {props.small}
      </small>
    </h1>
  </header>
)