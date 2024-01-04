"use client";
import React from 'react';

import Navbar from '@/components/navigation/navbar';
import About from '@/pages/about';
import Home from '@/pages/home';
import PageDivider from '@/components/pageComponents/pageDivider';
import Portfolio from '@/pages/portfolio';
import Contact from '@/pages/contact';
import Background from '@/components/pageComponents/background';
import Page from '@/components/page';

// here we are attempting to use page transitions
// maybe nest everything here or in layout
// or do logic through layout file

export const Index = async () => {
  return (
  <>
    {/* <Page> */}
    {/* <main className="flex items-center p-0 m-0 w-[100vw]" >
      <div>
        <Background/>
        <div className=" overflow-hidden">
      <Navbar/> */}
      <div>
      <Background/>
      <div className=" overflow-hidden">
          <Navbar/>
          <Page><Home/></Page>
          <Page><About/></Page>
          <PageDivider/>
          <Page><Portfolio/></Page>
          <Page><Contact /></Page>
          </div>
          </div>
        {/* </div>
      </div>
    </main> */}
    {/* </Page> */}
    </>
  );

};

export default Index;