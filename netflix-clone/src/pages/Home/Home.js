
import React from "react";
import Header from "../../components/Header/Header"; // Fixed the Header import path
import Footer from "../../components/Footer/Footer"; // Footer import path is already correct

const Home = () => {
  return (
    <>
      <Header />
      {/* You can add main content for the Home page here */}
      <Footer />
    </>
  );
};

export default Home;
