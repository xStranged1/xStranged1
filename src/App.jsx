import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/header'
import SectionMe from './components/sectionMe'
import SectionMyProjects from './components/sectionMyProjects'
import SectionAppLimpieza from './components/sectionAppLimpieza'
import SectionConsultorio from './components/consultorio'
import SectionXtremeGym from './components/sectionXtremeGym'
import Footer from './components/footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(prev => !prev)} />

      <SectionMe />

      <SectionMyProjects />

      <div className='b-example-divider' />
      <div id='xtremegym-anchor' style={{ marginTop: 150 }} />
      <SectionXtremeGym />

      <div className='b-example-divider' />
      <div id='appLimpieza' style={{ marginTop: 100 }} />
      <SectionAppLimpieza />


      <div className='b-example-divider' />

      <SectionConsultorio />
      <Footer />
    </div>
  )
}

export default App