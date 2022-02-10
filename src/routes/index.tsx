import { Routes as RoutesDom, Route } from "react-router-dom";

import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Experiences } from '../components/Experiences';
import { Section } from '../components/Section';
import { Contact } from '../components/Contact';


const Routes = () => {
  return(
    <RoutesDom>
      <Route path="/" element={
        <>
          <Header /> 
          <Home />
        </>
      } />
      <Route path="/about" element={
        <>
          <Header /> 
          <About />
        </>   
      } />
      <Route path="/experiences" element={
        <>
          <Header />
          <Experiences />
        </>   
      } />
      <Route path="/contato" element={
        <>
          <Header /> 
          <Section /> 
          <Contact />
        </>   
      } />
    </RoutesDom>
  )
 }
 
 export default Routes;