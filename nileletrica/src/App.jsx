import { Navbar } from './components/layout/Navbar';
import { Services } from './components/pages/Services';
import { Cover } from './components/layout/Cover';
import { Footer } from './components/layout/Footer';


import styles from './App.module.css';
import { WhatsAppLogo } from './components/layout/WhatsAppLogo';

function App() {


  return (
    <div className={styles.app}>
      <Navbar />
      <Services />
      <Footer />
      <WhatsAppLogo />
    </div>
  )
}

export default App
