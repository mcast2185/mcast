"use client";
import React from 'react';

import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import PageDivider from '@/components/pageComponents/pageDivider';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';
import Background from '@/components/pageComponents/background';


export const Index = () => {
  
  return (
  <>
    <Background/>
    <div className=" overflow-hidden">
      <Navbar/> 
      <div>
        <Background/>
        <div className=" overflow-hidden">
          <Navbar/>
          <Home/>
          <About/>
          <PageDivider/>
          <Portfolio/>
          <Contact />
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;