import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content } from './styles';

import {useTranslation} from "react-i18next";


export function Experiences() {
  const {t, i18n} = useTranslation('common');

  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
              <h1>{t('welcome.title')}</h1>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}