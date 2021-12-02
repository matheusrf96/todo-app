import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Grid from "../template/Grid"
import IconButton from "../template/IconButton"
import { changeDescription, search, add } from "./todoActions"


class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        }
        else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props

        return (
            <div role="form" className="todo-form">
                <Grid cols='12 9 10'>
                    <input
                        type="text"
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={ this.props.changeDescription }
                        onKeyUp={ this.keyHandler }
                        value={ this.props.description }
                    />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton onClick={ () => add(description) } style="primary" icon="plus" />
                    <IconButton onClick={ () => search() } style="info" icon="search" />
                    <IconButton onClick={ this.props.handleClear } style="default" icon="close" />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ description: state.todo.description })
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)