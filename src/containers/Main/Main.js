import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';
import axios from '../../axios-firebase';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Main.module.scss';

class Main extends Component {
    state = {
        chatBackground: '//unsplash.it/1270/1055?random',
        user: {
            name: 'Robi',
            email: 'robi.span@gmail.com',
            id: 'kjfhvgb34uir2x3m9cr029',
            contacts: {
                c1: {
                    name: 'Irena',
                    email: 'irena.span@gmail.com',
                    id: '-LOOicVJ4gB9n-X-DVGd',
                    chatId: '509t7c9023tmxc'
                },
                c2: {
                    name: 'Nina',
                    email: 'nina.span@gmail.com',
                    id: '-LOOicVE-jCOJvm4aK13',
                    chatId: 'fg4w5vct42xc32'
                }
            }
        },
        currentContactKey: null,
        currentContactName: null,
        currentChatId: null,
        messages: [],
        loading: false,
        error: false
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.currentContactKey === prevState.currentContactKey) return;
        axios.get(`chats/${this.state.currentChatId}/messages.json`)
            .then(response => {
                const messages = [];
                for (let key in response.data) {
                    messages.push(response.data[key]);
                }
                this.setState({
                    messages: messages,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false, error: true });
            });
    }

    submitHandler = (textEntered) => {
        const newMessages = [...this.state.messages];
        const newMessage = {
            content: textEntered,
            received: false
        };
        newMessages.push(newMessage);
        this.setState({ messages: newMessages });
        axios.post(`chats/${this.state.currentChatId}/messages.json`, newMessage)
            .catch(error => console.log(error));
    }

    selectContactHandler = (contactKey) => {
        if (contactKey === this.state.currentContactKey) return;
        this.setState({
            currentContactKey: contactKey,
            currentContactId: this.state.user.contacts[contactKey].id,
            currentContactName: this.state.user.contacts[contactKey].name,
            currentChatId: this.state.user.contacts[contactKey].chatId,
            loading: true
        });
    }

    render() {
        return (
            <div className={classes.Main}>
                <Sidebar
                    user={this.state.user.name}
                    contacts={this.state.user.contacts}
                    currentContactId={this.state.currentContactId}
                    select={this.selectContactHandler} />
                <Chat
                    contactName={this.state.currentContactName}
                    contactKey={this.state.currentContactKey}
                    messages={this.state.messages}
                    loading={this.state.loading}
                    onSubmit={this.submitHandler}
                    error={this.state.error}
                    background={this.state.chatBackground} />
            </div>
        );
    }

    // String method for generating unique IDs
    makeHashCode(str) {
        var hash = 0, i, chr;
        if (str.length === 0) return hash;
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
}

const mapStateToProps = state => {
    return {
        chatBgrnd: state.chatBackground,
        user: state.user,
        contId: state.currentContactKey,
        contNm: state.currentContactName,
        currentChatId: state.currentChatId,
        msgs: state.messages,
        ldng: state.loading,
        err: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onContactSelect: (contactKey) => dispatch({ type: 'CONTACT_SELECT', ctId: contactKey })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Main, axios));
