import styles from './Navbar.module.css';
import { Logo } from './Logo';
import { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaChevronDown } from 'react-icons/fa';

export const Navbar = () => {
  const [services] = useState([
    { name: 'Ventilador de Teto' },
    { name: 'Ar Condicionado' },
    { name: 'Tomadas' },
    { name: 'Quadro de Disjuntores' },
    { name: 'Reparo e Instalação de Interfones' },
    { name: 'Troca de Fiação' },
    { name: 'Instalação de Padrão Light' }
  ]);
  const [showServices, setShowServices] = useState(false);

  function toggleServices() {
    setShowServices(!showServices);
  }

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
        {showServices && (
          <div className={styles.menuBar}>
            {services.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
