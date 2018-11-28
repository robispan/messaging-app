import React, { Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    state = {
        closed: false
    }

    modalClosedHandler = () => {
        this.setState({ closed: true });
    }

    render() {
        return (
            <>
                <Backdrop 
                    clicked={this.modalClosedHandler} 
                    show={!this.state.closed} />
                <div
                    className={classes.Modal}
                    style={{ opacity: this.state.closed ? '0' : '1' }} >
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;