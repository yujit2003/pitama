"use client";
import { useState } from "react";
import VideoIntro from "../components/VideoIntro";
import NavBar from "../components/NavBar";
import HomeScroll from "../components/Home/HomeScroll";
import HomeContent from "../components/Home/HomeContent";
import Dots from "../components/Home/Dots";
import Footer from "../components/Home/Footer";
import Dev from "../components/Home/Dev";

export default function Home() {



  return (
    <>
          <NavBar page="home" />
          <HomeScroll />
          <HomeContent />
          <br />
          <br />
          <Dots />
          <Footer />
          <Dev />
          {/* <SiteDown /> */}
    </>
  );
}
