import React from 'react';
import TopMenu from '../components/TopMenu';
import CenterText from '../components/CenterText';
import BottomMenu from '../components/BottomMenu';
import SecondMenu from '../components/SecondMenu';
import { FeaturedAndRecommended } from '../components/FetAndRec';
import { SpecialOffers } from '../components/SpecOff';

const Steam = () => (
  <>
    <TopMenu />
    <SecondMenu/>
    <FeaturedAndRecommended/>
    <SpecialOffers/>
    <CenterText/>
    <BottomMenu/>
  </>
);

export default Steam;
