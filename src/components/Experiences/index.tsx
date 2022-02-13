import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content } from './styles';
import { Experience } from '../Experience';
import {useTranslation} from "react-i18next";


export function Experiences() {
  const {t, i18n} = useTranslation('common');
  const arrayString = ['Teste', 'develop']
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
              <h1>{t('welcome.title')}</h1>
            </Col>
            <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
              <Experience startDate='14/04/2000' endDate='04/04/2015' company='Indra' role='Developer' place='João pessoa' description={arrayString} />
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}