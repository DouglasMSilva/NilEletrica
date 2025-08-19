import {FaFacebook, FaYouTube} from 'react-icons/fa';
import styles from './Contact.module.css';


export const Contact = () => {
    return(
        <div className={styles.contact}>
            <FaFacebook />
            <FaYouTube />
        </div>   
    )
}