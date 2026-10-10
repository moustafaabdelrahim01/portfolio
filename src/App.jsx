import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}