import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ visible, setVisible, children }) => {

    const rootStyle = [styles.main]
    if(visible){
        rootStyle.push(styles.active)
    }
    return (
        <div className={rootStyle.join(' ')} onClick={()=>setVisible(false)}>
            <div className={styles.content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};


export default Modal;