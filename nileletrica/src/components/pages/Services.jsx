import styles from './Services.module.css';

import { useState, useEffect } from 'react';

import { FaComment } from 'react-icons/fa';

import { Cards } from './Cards';

export const Services = () => {

    const [services, setServices] = useState([]);

   useEffect(() => {
        fetch("http://localhost:5000/service").then((res) => res.json()).then((data) => setServices(data)).catch((err) => console.log(err));
   }, []);

    return(
        <div className={styles.service_container}>
            <h2>Fornecemos o <span>Material</span></h2>
            <h3>Atendemos no <span>Rio</span> e <span>Grande Rio</span></h3>
            <div className={styles.gallery}>
                {services.map((item, index) => (
                    <div key={index} className={styles.services}>
                        <img src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>

            <div className={styles.service_link}>
                <h3>Fazemos seu orçamento</h3>
                <button className={styles.btn_link}><a href='https://wa.me/5521971397303'><FaComment />Fale conosco</a></button>
                <p>*Clique neste Botão acima para ser direcionado ao canal de<br/> atendimento ou no ícone do WhatsApp no canto direito da tela.</p>
            </div>

            <Cards />
           
        </div>

    )
}