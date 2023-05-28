import React, { useState } from "react";
import { HomeContainer } from "./home.styles";
import TopMenu from "../../components/top-menu/top-menu.component";
import Hero from "../../components/hero/hero.component";
import Products from "../../components/products/products.component";
import SectionInterest from "../../components/section-interest/section-interest.component";

const Home = () => {
  
  return (
    <HomeContainer>
        <TopMenu />
        <Hero />
        <Products />
        <SectionInterest />
    </HomeContainer>
  );
};

export default Home;
