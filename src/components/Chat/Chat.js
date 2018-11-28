import React from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import DropdownButton from '../UI/DropdownButton/DropdownButton';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Chat.module.scss';

const chat = (props) => {
    if (!props.contactKey) return (
        <div className={classes.noChat}>Select a contact on the left to start chatting.</div>
    );

    let body;
    if (props.error) {
        body = <div style={{ flex: '1' }}></div>
    }
    else if (props.loading) {
        body = <Spinner />
    }
    else {
        body = <Messages messages={props.messages} />
    }

    // Styles for background
    const styles = {
        backgroundImage: `url(${props.background})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        overflow: 'hidden'
    };
    return (
        <div className={classes.Chat} style={styles}>
            <Toolbar>
                <div className={classes.Contact}>
                    {props.contactName}
                </div>
                <DropdownButton />
            </Toolbar>
            {body}
            <Input onSubmit={props.onSubmit} />
        </div>
    );
}

export default chat;
