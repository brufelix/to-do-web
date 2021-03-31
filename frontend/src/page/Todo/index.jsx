import React from 'react'
import Header from '../../components/Header'
import TodoList from '../../components/TodoList'
import TodoForm from '../../components/Form'

export default () => (
    <>
        <Header
            name="Tarefas"
            small="Cadastro"
        />
        <TodoForm />
        <TodoList />
    </>
)