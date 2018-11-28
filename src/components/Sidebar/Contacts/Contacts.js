import React from 'react';

import classes from './Contacts.module.css';
import Contact from './Contact/Contact';

const contacts = (props) => {
    return (
        <div className={classes.Contacts}>
            {props.contacts.map((contact, index) => (
                < Contact
                    highlight={contact.id === props.currentContactId}
                    name={contact.name}
                    contactKey={contact.key}
                    select={props.select}
                    key={index} />
            ))}
        </div>
    );
};

export default contacts;
