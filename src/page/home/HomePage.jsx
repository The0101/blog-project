import React from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "../container/Articales";
import Hero from "../container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};
export default HomePage;