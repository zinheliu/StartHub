import React from 'react';
import Header from '../components/Header';
import DescriptionList from '../components/DescriptionList';
import RegisterForm from '../components/RegisterForm';
import RecentNewsBlock from '../components/RecentNewsBlock';
import "./FundingRegister.css";
function FundingRegister() {
  return (
    <>
      <Header title='Crowd Funding'/>
      <main>
        <DescriptionList registerType="business"/>
        <RegisterForm registerType="business"/>
        <RecentNewsBlock />
      </main>
    </>
  );
}

export default FundingRegister;
