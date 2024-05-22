import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Header from './components/header'
import SectionMe from './components/sectionMe'
import SectionMyProjects from './components/sectionMyProjects'
import SectionAppLimpieza from './components/sectionAppLimpieza'
import SectionConsultorio from './components/consultorio'
import Footer from './components/footer';
import { useTranslation } from 'react-i18next';

function App() {

  
  
  return (
    <div>
      <Header />

      <SectionMe />
      
      <SectionMyProjects />
      <div className='b-example-divider'/>
      <div id='appLimpieza'style={{marginTop: 150}} />
      <SectionAppLimpieza />
      
      <div className='b-example-divider'/>

      <SectionConsultorio />
      <Footer />


    </div>
  )
}

export default App
