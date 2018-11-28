import React, { Component } from 'react';

import classes from './Messages.module.scss';
import Message from './Message/Message';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.scrollElement = React.createRef();
    }
    componentDidMount() {
        const el = this.scrollElement.current;
        el.scrollTop = el.scrollHeight;
    }
    componentDidUpdate() {
        const el = this.scrollElement.current;
        el.scrollTop = el.scrollHeight;
    }

    render() {
        const messages = this.props.messages
            .map((message, index) => {
                return <Message
                    key={index}
                    content={message.content}
                    received={message.received} />;
            });
        return (
            <div
                className={classes.Messages}
                ref={this.scrollElement}>
                {messages}
            </div>
        );
    }
}

export default Messages;
