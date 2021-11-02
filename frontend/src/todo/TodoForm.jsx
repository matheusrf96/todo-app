import React from "react"

import Grid from "../template/Grid"
import IconButton from "../template/IconButton"

const TodoForm = (props) => {
    return (
        <div role="form" className="todo-form">
            <Grid cols='12 9 10'>
                <input type="text" id="description" className="form-control"
                    placeholder="Adicione uma tarefa" />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton onClick={ props.handleAdd } style="primary" icon="plus" />
            </Grid>
        </div>
    )
}

export default TodoForm