import React from 'react';

import classes from './Message.module.css';

const message = (props) => {
    let classList = [classes.Message];
    if (props.received) {
        classList.push(classes.Received);
    }
    else {
        classList.push(classes.Sent);
    }
    
    return (
        <div className={classList.join(' ')}>
            {props.content}
        </div>
    );
}

export default message;
