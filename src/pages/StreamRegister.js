import React from 'react';
import Header from '../components/Header';
import DescriptionList from '../components/DescriptionList';
import RegisterForm from '../components/RegisterForm';
import RecentNewsBlock from '../components/RecentNewsBlock';
import "./StreamRegister.css";
function StreamRegister() {
  return (
    <>
      <Header title="Investor's Pitch Stream"/>
      <main>
        <DescriptionList registerType="business"/>
        <RegisterForm registerType="business"/>
        <RecentNewsBlock />
      </main>
    </>
  );
}

export default StreamRegister;
