import React from 'react';
import Content from './Content';
import LeftSideSection from './LeftSideSection';

const MainSection = () => (
  <section className="main">
    <LeftSideSection />
    <Content />
  </section>
);

export default MainSection;
