import React from 'react';
import Header from '../components/Header';
import DescriptionList from '../components/DescriptionList';
import RegisterForm from '../components/RegisterForm';
import RecentNewsBlock from '../components/RecentNewsBlock';
import "./ResidencyRegister.css";
function ResidencyRegister() {
  return (
    <>
      <Header title='Residency Visa Packages'/>
      <main>
        <DescriptionList registerType="business"/>
        <RegisterForm registerType="business"/>
        <RecentNewsBlock />
      </main>
    </>
  );
}

export default ResidencyRegister;
