import React from 'react';

import classes from './Spinner.module.scss';

const spinner = () => (
    // (http://tobiasahlin.com/spinkit/)
    <div className={classes.Spinner}>
        <div className={classes.bounce1}></div>
        <div className={classes.bounce2}></div>
        <div className={classes.bounce3}></div>
    </div>
);

export default spinner;


