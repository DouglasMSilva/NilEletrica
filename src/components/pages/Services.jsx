import { Helmet } from 'react-helmet';
import styles from './Services.module.css';
import { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { Cards } from './Cards';

export const Services = ({ showServices }) => {

    const [services] = useState([
        { name: 'Ventilador de Teto', image: '/assets/ceiling-fan.png' },
        { name: 'Ar Condicionado', image: '/assets/air-conditioner.png' },
        { name: 'Tomadas', image: '/assets/outlet.png' },
        { name: 'Quadro de Disjuntores', image: '/assets/circuit-breaker.png' },
        { name: 'Reparo e Instalação de Interfones', image: '/assets/intercom.png' },
        { name: 'Troca de Fiação', image: '/assets/wire.png' },
        { name: 'Instalação de Padrão Light', image: '/assets/electric-meter.png' }
    ]);

    return (
        <div className={styles.service_container}>

            {/* SEO Dinâmico */}
            <Helmet>
                <title>Serviços de Eletricista | Nil Elétrica</title>
                <meta
                    name="description"
                    content="Confira nossos serviços de eletricista: ventiladores de teto, ar condicionado, tomadas, quadro de disjuntores, fiação e mais no Rio e Grande Rio."
                />
            </Helmet>

            {/* Cabeçalhos Semânticos */}
            <h2>Fornecemos o <span>Material</span></h2>
            <h3>Atendemos no <span>Rio</span> e <span>Grande Rio</span></h3>

            <br/>
            <h3>Clique no botão serviços acima<br/> para conhecer nossos serviços</h3>

            {/* Cards de Serviços */}
            {showServices && (
                <div className={styles.gallery}>
                    {services.map((item, index) => (
                        <div key={index} className={styles.services}>
                            <h4>{item.name}</h4>
                            <img
                                className={styles.serviceImage}
                                src={item.image}
                                alt={`Serviço: ${item.name} fornecido pela Nil Elétrica`}
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Seção de Contato */}
            <div className={styles.service_link}>
                <h3>Fazemos seu orçamento</h3>
                <button className={styles.btn_link}>
                    <a href='https://wa.me/5521971397303'><FaComment /> Fale conosco</a>
                </button>
                <p>*Clique neste Botão acima para ser direcionado ao canal de<br /> atendimento ou no ícone do WhatsApp no canto direito da tela.</p>
            </div>

            {/* Outros Cards */}
            <Cards />

        </div>
    );
};
