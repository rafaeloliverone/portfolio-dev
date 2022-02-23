import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content } from './styles';
import linkedinLogo from '../../assets/linkedinColorful.svg';
import instagramLogo from '../../assets/instagramColorful.svg';
                  

export function Section() {
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12} md={12} lg={12} xl={12}>
              <span>CONTATO</span>
              <h3>E aí, vamos conversar ? 
                <a href="https://www.linkedin.com/in/rafael-oliveira-13a678181/" target={"_blank"} rel="noreferrer">
                 <img src={linkedinLogo} width={40} height={40}></img>
                </a>
                <a href="https://www.instagram.com/rafaeloliveiraaa_/" target={"_blank"} rel="noreferrer">
                 <img src={instagramLogo} width={40} height={40}></img>
                </a>
              </h3>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  )
};