import React from 'react';

import classes from './DropdownButton.module.css';

const dropdownButton = (props) => (
        <div className={classes.DropdownButton}>
            {props.children}
        </div>
);

export default dropdownButton;
