import { Navbar } from './components/layout/Navbar';
import { Services } from './components/pages/Services';

import { Footer } from './components/layout/Footer';

import { useState } from 'react';
import styles from './App.module.css';
import { WhatsAppLogo } from './components/layout/WhatsAppLogo';

function App() {

    const [showServices, setShowServices] = useState(false);
  
    function toggleServices() {
      setShowServices(!showServices);
    }

  return (
    <div className={styles.app}>
      <Navbar toggleServices={toggleServices} showServices={showServices}/>
      <Services showServices={showServices}/>
      <Footer />
      <WhatsAppLogo />
    </div>
  )
}

export default App
