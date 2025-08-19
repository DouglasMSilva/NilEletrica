import { Logo } from './Logo';
import styles from './Footer.module.css';
import { FaAddressCard } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.layer}>    
            <img className={styles.logo} src='/assets/NilEletrica.PNG'/>
            
            <div className={styles.footerLayer}>
                <div className={styles.footerInfo}>
                    <span id={styles.address}>Endereço</span>
                    <div className={styles.addressIcon}>
                        <i className={styles.myIcon}><FaAddressCard /></i>
                        <p>Rua Argentina, Nº 146, Fundos Vila <br />- São Cristóvão, Rio de Janeiro - RJ</p>
                    </div>
                </div>

                <div className={styles.footerInfo}>
                    <span>CNPJ</span>
                    <p>57.762.281/0001-37</p>
                </div>
                <div className={styles.footerInfo}>
                    <span>Formas de Pagamento</span>
                    <div className={styles.subInfo}>
                        <p>Crédito</p>
                        <p>Débito</p>
                        <p>Pix</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

