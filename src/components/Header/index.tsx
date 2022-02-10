import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { Link, NavLink } from 'react-router-dom';

import { Container, Content, Menu } from './styles';


export function Header() {
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
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  )
}