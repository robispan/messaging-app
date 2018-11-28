import React from 'react';

import classes from './Contact.module.css';

const contact = (props) => {
    const classList = [classes.Contact];
    if (props.highlight) classList.push(classes.active);
    return (
        <div
            className={classList.join(' ')}
            onClick={() => props.select(props.contactKey)}>
            {props.name}
        </div>
    );
}


export default contact;
