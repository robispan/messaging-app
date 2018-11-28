import React, { Component } from 'react';

import classes from './Input.module.scss';

class Input extends Component {
    state = {
        textEntered: ''
    }

    inputHandler = (e) => {
        this.setState({ textEntered: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.state.textEntered === '') return;
        this.props.onSubmit(this.state.textEntered);
        this.setState({ textEntered: '' });
    }

    render() {
        return (
            <form className={classes.Input} onSubmit={this.submitHandler}>
                <input
                    type="text"
                    value={this.state.textEntered}
                    onChange={this.inputHandler}
                    placeholder="Enter message" />
            </form>
        );
    }
}

export default Input;
