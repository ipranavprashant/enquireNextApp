// import Head from 'next/head';
// import { Avatar, Button, Dropdown, Navbar, Text } from "@nextui-org/react";

import { NextUIProvider } from "@nextui-org/react";
import SiteHeader from './components/header.jsx';
import Hero from './components/Hero';
import About from "./components/About";
import Footer from "./components/Footer";
import Events from "./components/Events.jsx";
import EventPage from "./components/EventPage.jsx";
import Members from "./components/Members.jsx";

export default function Home() {
  return (
    // Use at the root of our app
    <NextUIProvider>
      {/* <SiteHeader /> */}
      <Members />
      <Hero />
      <hr />
      <About />
      <hr />
      <Events />
      <br /><br />
      <EventPage />
      <br /><br />
      <Footer />
    </NextUIProvider>
  );
}
