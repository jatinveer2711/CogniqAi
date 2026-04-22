import React from 'react';
import HomePage  from './HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RobotHandSection from './RobotHandSection';
import OurServices from './components/OurServices';
import WhyChoose from './components/WhyChoose';
import  ProcessSecction from './components/ProcessSecction';
import LastBanner from './components/LastBanner';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <RobotHandSection></RobotHandSection>
      <OurServices></OurServices>
      <WhyChoose></WhyChoose>
      <ProcessSecction></ProcessSecction>
      <LastBanner></LastBanner>
      <Footer></Footer>
    </div>
  )
}
