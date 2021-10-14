import React from 'react';
import Header from '../components/Header';
import DescriptionList from '../components/DescriptionList';
import RegisterForm from '../components/RegisterForm';
import RecentNewsBlock from '../components/RecentNewsBlock';
import "./BusinessRegister.css";
function BusinessRegister() {
  return (
    <>
      <Header title='Register your business'/>
      <main>
        <DescriptionList registerType="business"/>
        <RegisterForm registerType="business"/>
        <RecentNewsBlock />
      </main>
    </>
  );
}

export default BusinessRegister;
