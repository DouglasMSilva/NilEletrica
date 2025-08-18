import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppLogo.module.css';


export const WhatsAppLogo = () => {
  return (
    <a href="https://wa.me/5521971397303" target="blank" rel="noopener noreferrer" className={styles.logo}><i className={styles.icon}><FaWhatsapp/></i></a>
  )
}

