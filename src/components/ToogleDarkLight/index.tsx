import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useState } from 'react'; 
import { Container } from './styles';

// import linkedinLogo from '../../assets/linkedinColorful.svg';
import lightMode from '../../assets/lamp.png';
import darkMode from '../../assets/moon.png';
                  
interface Props {
  toogleTheme(): void
}


export const ToogleDarkLight: React.FC<Props> = ({ toogleTheme }) => {
  const [icon, setIcon] = useState(darkMode)

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