import React from 'react';

import styles from './Layout.module.scss';

const layout = (props) => (
    <main className={styles.Layout}>
        {props.children}
    </main>
);

export default layout;
