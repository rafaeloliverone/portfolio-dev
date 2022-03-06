import { Routes as RoutesDom, Route } from "react-router-dom";

import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Experiences } from '../components/Experiences';
import { Section } from '../components/Section';
import { Contact } from '../components/Contact';


interface Props {
  changeIdioma(ptJson: any, enJson: any): void
}

const Routes: React.FC<Props> = ({ changeIdioma }) => {
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
          <Experiences changeIdioma={changeIdioma}/>
        </>   
      } />
      <Route path="/contato" element={
        <>
          <Header /> 
          <Contact />
        </>   
      } />
    </RoutesDom>
  )
 }
 
 export default Routes;