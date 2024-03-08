import React from 'react';
import TopMenu from '../components/TopMenu';
import BottomMenu from '../components/BottomMenu';
import SecondMenu from '../components/SecondMenu';
import { FeaturedAndRecommended } from '../components/FetAndRec';
import { SpecialOffers } from '../components/SpecOff';

const Steam = () => (
  <div className="wrapper">
    <>
     <TopMenu />
     <SecondMenu/>
      <FeaturedAndRecommended/>
      <SpecialOffers/>
      <BottomMenu/>
    </>
  </div>
);

export default Steam;
