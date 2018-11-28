import React from 'react';

import classes from './Toolbar.module.scss';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        {props.children}
    </div>
);

export default toolbar;
