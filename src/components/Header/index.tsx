import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { Link, NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import { Container, Content, Menu } from './styles';
import brazilLogo from '../../assets/brazil.png';
import euaLogo from '../../assets/eua.png';

export function Header() {
  const [t, i18n] = useTranslation('common');

  const changeLanguage = (language: string) => {
    return i18n.changeLanguage(language)
  }

  return (
    <Container >
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col sm={12} md={4} lg={4} xl={4}>
              <span>Rafael Oliveira</span>
            </Col>
            <Col col sm={12} md={8} lg={8} xl={8}>
              <Menu>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>Home</button>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>Sobre</button>
                </NavLink>
                <NavLink to="/experiences" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>Experiências</button>
                </NavLink>
                <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>Contato</button>
                </NavLink>
              </Menu>
            </Col>
              <img src={brazilLogo} width={40} height={40} onClick={() => changeLanguage('pt')} ></img>
              <img src={euaLogo} width={40} height={40} onClick={() => changeLanguage('en')}></img>
            
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  )
}