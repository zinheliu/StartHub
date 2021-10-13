import React from 'react';
import './Home.css';
import HeaderWithBackground from '../components/HeaderWithBackground';
import ServicesBlock from '../components/ServicesBlock';
import ArchivedBlock from '../components/ArchivedBlock';
import RecentNewsBlock from '../components/RecentNewsBlock';
function Home() {
  return (
    <>
      <HeaderWithBackground />
      <main>
        <ServicesBlock />
        <ArchivedBlock />
        <RecentNewsBlock />
      </main>
    </>    
  )
}

export default Home

