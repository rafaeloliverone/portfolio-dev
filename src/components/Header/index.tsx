import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { Link, NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import { Container, Content, Menu, Languages } from './styles';
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
            <Col col xs={12} sm={12} md={9} lg={10} xl={10}>
              <Menu>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>{t("home")}</button>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>{t("about")}</button>
                </NavLink>
                <NavLink to="/experiences" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>{t("experiences")}</button>
                </NavLink>
                <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                  <button>{t("contact")}</button>
                </NavLink>
              </Menu>
            </Col>
            <Col col xs={12} sm={12} md={3} lg={2} xl={2}>
              <Languages >
                <img src={brazilLogo} width={40} height={40} onClick={() => changeLanguage('pt')} ></img>
                <img src={euaLogo} width={40} height={40} onClick={() => changeLanguage('en')}></img>
              </Languages>
            </Col>
              
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  )
}