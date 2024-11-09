import axios from "axios";


export const sendMessage = async (userName, message) =>{
    const TOKEN = '7915138513:AAHDZey_02QOymQNcJv21TGPKgz9fQ_mg8M'
    const CHAT_ID = '678885516';

    const TEXT = `${userName} пишет: ${message}`

    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${TEXT}`)

}