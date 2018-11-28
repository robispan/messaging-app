const initialState = {
   chatBackground: '//unsplash.it/1270/1079',
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
   currentContactId: null,
   currentContactName: null,
   currentChatId: null,
   messages: [],
   loading: false,
   error: false
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SUBMIT': 
         return {

         }
         break;
      default: 
         return state;
      }

   //    submitHandler = (textEntered) => {
   //       const newMessages = [...this.state.messages];
   //       const newMessage = {
   //           content: textEntered,
   //           received: false
   //       };
   //       newMessages.push(newMessage);
   //       this.setState({ messages: newMessages });
   //       axios.post(`chats/${this.state.currentChatId}/messages.json`, newMessage)
   //           .catch(error => console.log(error));
   //   }
 
   //   selectContactHandler = (name, contactId, chatId) => {
   //       if (contactId === this.state.currentContactId) return;
   //       this.setState({
   //           currentContactId: contactId,
   //           currentContactName: name,
   //           currentChatId: chatId,
   //           loading: true
   //       });
   //   }

};

export default reducer;