import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content } from './styles';

export function Experiences() {
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
              <h1>POrtfolio</h1>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}