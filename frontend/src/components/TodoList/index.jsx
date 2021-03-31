import React, { Component } from 'react'
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../../components/Button'
import './index.css'

class todoList extends Component {
  renderRows = () => {
    const list = this.props.list || []
    return list.map(todo => {
      return (
        <tr
          className="table-row"
          key={todo._id}>
          <td
            className={
              todo.done
                ? 'markedAsDone'
                : ''
            }
          >
            {todo.description}
          </td>
          <td
            className="td-icons"
          >
            <IconButton
              icon={faTrash}
              disabled={
                todo.done
                  ? true
                  : false
              }
              onClick={() => console.log("remove")}
              trash={true}
            />
            <IconButton
              icon={faCheck}
              disabled={
                todo.done
                  ? false
                  : true
              }
              onClick={() => console.log("markAsDoneAt(todo)")}
              done={true}
            />
            <IconButton
              icon={faUndo}
              disabled={
                todo.done
                  ? true
                  : false
              }
              onClick={() => console.log("markAsPending(todo)")}
              back={true}
            />
          </td>
        </tr>
      )
    })
  }

  componentDidMount = () => {
    console.log("search")
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr className="table-header">
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default todoList