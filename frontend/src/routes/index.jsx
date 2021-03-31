import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Todos from '../page/Todo'
import About from '../page/about'

export default () => {
    return (
        <Switch>
            <Route path='/todos' component={Todos} />
            <Route path='/about' component={About} />
            <Redirect from='/' to='/todos' />
        </Switch>
    )
}