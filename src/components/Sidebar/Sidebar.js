import React from 'react';

import classes from './Sidebar.module.css';
import Toolbar from '../UI/Toolbar/Toolbar';
import Contacts from './Contacts/Contacts';
import DropdownButton from '../UI/DropdownButton/DropdownButton';

const sidebar = (props) => (
    <div className={classes.Sidebar}>
        <Toolbar>
            <div className={classes.User}>
                User: {props.user}
            </div>
            <DropdownButton />
        </Toolbar>
        <Contacts
            contacts={Object.keys(props.contacts).map(key => {
                return {
                    ...props.contacts[key],
                    key: key
                };
            })}
            select={props.select}
            currentContactId={props.currentContactId} />
    </div>
);

export default sidebar;
