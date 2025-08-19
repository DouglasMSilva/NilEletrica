import {useState} from 'react';
import styles from './Cards.module.css';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Cards = () => {

    const [cards] = useState([
        {media: 'youtube', icon: <FaYoutube />, text: 'Inscreva-se no canal', name: 'NilEletrica3804', link: 'https://www.youtube.com/@nileletrica3804'},
        {media: 'instagram', icon: <FaInstagram />, text: 'Nos siga no Instagram', name: '@nileletrica', link: 'https://www.instagram.com/eletrica.nil?igsh=dGpheTRnbm9zeHc5'},
        {media: 'facebook', icon: <FaFacebook />, text: 'Curta no Facebook', name: 'Nil eletrica', link: 'https://web.facebook.com/profile.php?id=61577069672899'}
    ]);
  return (

    <div className={styles.container}>
        <h4>Nosso trabalho nas <span style={{color: 'yellow', fontSize: '.98rem'}}>Redes Sociais</span></h4>
        <div className={styles.cardContainer}>
            {cards.map((item, index) => {
                let bgColor = item.media === 'youtube' ? 'red': item.media === 'instagram' ? 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)' : item.media === 'facebook' ? 'royalBlue' : '';

            return (
                <div className={styles.mediaContainer} key={index}>
                    <div className={styles.medias}>
                        <h4 style={{color: '#000'}}>{item.text}</h4>
                        <i className={styles.icon} style={{background: bgColor}}>{item.icon}</i>
                        <p>{item.name}</p>
                        <button className={styles.btn}><a href={item.link}>Acessar</a></button>
                    </div> 
               </div>
            );
            
            })}
        </div>
    </div>
  )
}

