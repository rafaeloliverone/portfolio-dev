import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useState } from 'react'; 

import { Container } from './styles';
import lightMode from '../../assets/lamp.png';
import darkMode from '../../assets/moon.png';
                  

interface PropsToogle {
  toogleTheme(): void
}

export const ToogleDarkLight: React.FC<PropsToogle> = ({ toogleTheme }) => {
  const [icon, setIcon] = useState(lightMode)

  const toogle = () => {
    icon === lightMode ? setIcon(darkMode) : setIcon(lightMode) 
    toogleTheme()
  }

  return (
    <Container>
      <button onClick={toogle}><img src={icon} width={37} height={37}></img> </button>
    </Container>
  ) 
}