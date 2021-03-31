import React, { useEffect, useState } from 'react'
import { faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faSearch, faWindowClose } from '@fortawesome/free-solid-svg-icons'

import api from "../../service"
import Header from '../../components/Header'
import IconButton from '../../components/Button'

function Todo() {

  const [list, setList] = useState([]);
  const [description, setDescription] = useState("");

  function addTask() {
    if (description.trim() !== "") {
      api
        .post("/task", {
          description
        })
        .then((res) => {
          setList(res.data);
        })
        .then(() => setDescription(""))
    } else {
      alert("Descrição da tarefa vazio... :(")
    }
  }

  function keyHandler(e) {
    if (e.key === 'Enter') {
      if (description.trim() !== "") {
        addTask()
      }
    } else if (e.key === 'Escape') {
      console.log("Limpar")
    }
  }

  function remove(_id) {
    api
      .delete(`/task/${_id}`)
      .then(res => setList(res.data))
  }

  function markDoneAt(_id) {
    api
      .put("/task", { _id })
      .then((res) => {
        setList(res.data)
      })
  }

  function markAsPending(_id) {
    api
      .put("/task/pending", { _id })
      .then((res) => {
        setList(res.data)
      })
  }

  useEffect(() => {
    api
      .get("/tasks")
      .then(res => {
        if (list.length === res.data.length) {
          return
        } else if (!(list.length === res.data.length)) {
          setList(res.data)
        }
      })
  }, [list])

  return (
    <>
      <Header
        name="Tarefas"
        small="Cadastro"
      />
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
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            onKeyUp={keyHandler}
          />
          <IconButton
            disabled={true}
            search={true}
            icon={faPlus}
            onClick={() => addTask()}
          />
          <IconButton
            disabled={true}
            search={true}
            icon={faWindowClose}
            onClick={() => setDescription("")}
          />
        </div>
      </div>
      <table
        className="table"
      >
        <thead>
          <tr
            className="table-header"
          >
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {list.map(todo => {
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
                    onClick={() => remove(todo._id)}
                    trash={true}
                  />
                  <IconButton
                    icon={faCheck}
                    disabled={
                      todo.done
                        ? false
                        : true
                    }
                    onClick={() => markDoneAt(todo._id)}
                    done={true}
                  />
                  <IconButton
                    icon={faUndo}
                    disabled={
                      todo.done
                        ? true
                        : false
                    }
                    onClick={() => markAsPending(todo._id)}
                    back={true}
                  />
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </>

  )
}

export default Todo
