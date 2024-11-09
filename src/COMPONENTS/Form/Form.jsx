import React, { useState } from 'react';
import styles from './Form.module.scss';
import axios from 'axios';
import { sendMessage } from './service';
import Modal from '../../UI/Modal/Modal';


const Form = () => {

    const [value, setValue] = useState({userName: '', text: ''});
    const [visible, setVisible] = useState(false)



    const sendAMessage = async () => {
        if(value.userName && value.text){
            await sendMessage(value.userName, value.text)
            setValue({userName: '', text: ''})
            setVisible(true)
            setTimeout(()=>{
                setVisible(false)
            }, 4000)
        }

    }


    return (

            <div className={styles.formFrapper}>
                <div className={styles.form}>
                    <h2>You can write to me</h2>
                    <input 
                        value={value.userName}
                        type="text" 
                        placeholder="Your name"
                        onChange={e => setValue({...value, userName: e.target.value})}
                    />
                    <input 
                        value={value.text}
                        onChange={e => setValue({...value, text: e.target.value})}
                        type="text" 
                        placeholder="Message"
                    />
                    <button className={styles.submit} onClick={sendAMessage}>SEND</button>
                </div>
                <Modal visible={visible} setVisible={setVisible}>успешно отправлено!</Modal>
            </div>
      
    );
};


export default Form;