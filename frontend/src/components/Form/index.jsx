import React, { Component } from 'react'
import { faPlus, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../Button'
import './index.css'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler.bind(this)
  }

  keyHandler = e => {
    const { description, search, add, clear } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { description, search, add, descriptionChange, clear } = this.props
    return (
      <div
        className="todoForm"
      >
        <div
          className="container-input"
        >
          <input
            className="field-input"
            placeholder="Adicione uma Tarefa..."
            value={description}
            onChange={descriptionChange}
            type="text"
            onKeyUp={this.keyHandler}
          />
          <IconButton
            disabled={true}
            search={true}
            icon={faPlus}
            onClick={() => add(description)}
          />
          <IconButton
            disabled={true}
            search={true}
            icon={faSearch}
            onClick={() =>
              search(description)}
          />
          <IconButton
            disabled={true}
            search={true}
            icon={faWindowClose}
            onClick={() => clear()}
          />
        </div>
      </div>
    )
  }
}

export default TodoForm