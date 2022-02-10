import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content } from './styles';
import contactLogo from '../../assets/contact.svg';


export function Contact() {
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={contactLogo} width={400} height={400}></img>
            </Col>
            <Col col xs={12} sm={12} md={6} lg={6} xl={6}>
              <form>
                <label>
                  Assunto:
                  <input type="text" name="name" autoComplete="off"/>
                </label>
                <label>
                  Remetente:
                  <input type="text" name="name" autoComplete="off"/>
                </label>
                <label>
                  Mensagem:
                  <textarea name='message' autoComplete="off"></textarea>
                </label>
                <input type="submit" value="Enviar" />
              </form>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}