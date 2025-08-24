import styles from './Navbar.module.css';
import { Logo } from './Logo';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaChevronDown } from 'react-icons/fa';

export const Navbar = ({showServices, toggleServices}) => {



  return (
    <div className={styles.navbar}>
      <div className={styles.mainLogo}><Logo /></div>

      <div className={styles.dropdownWrapper}>
        <button className={styles.btn} onClick={toggleServices}>
          Serviços
          <FaChevronDown
            className={`${styles.arrow} ${showServices ? styles.arrowUp : ''}`}
          />
        </button>

      </div>
    </div>
  );
};
