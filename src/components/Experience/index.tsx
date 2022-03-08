import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content, ContainerDateStartEnd, ContainerRoleAndCompany, Triangule, ContainerFlex, ContainerFlexTriangule } from './styles';
import {useTranslation} from "react-i18next";


interface ExperienceProps {
    startDate: string;
    endDate?: string;
    company: string;
    role: string;
    place: string;
    description: string[]
}

export const Experience: React.FC<ExperienceProps> = (experienceProps) => {
    const {t, i18n} = useTranslation('common');

    const formatDate = (date: string | undefined) => {
      if (date) {
        var options = { month: 'long', day: 'numeric' };
        const language = localStorage.getItem("translationValue") == 'pt' ? 'pt-BR' : 'en-US';
        
        var monthYear = new Date(date).toLocaleDateString(language, { month: 'long', year: 'numeric' });
        
        return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);;
      }

      return t("current")
    }

    return (
        <Container>
          <Content>
            <ContainerBootstrap>
              <Row>
                <Col col xs={12} sm={12}  md={12} lg={12} xl={12}>
                  <ContainerRoleAndCompany>
                    <h1>{t(`${experienceProps.company}.role`)}</h1>
                    <h1><a href="https://www.indracompany.com/pt-br/minsait" target="_blank" rel="noreferrer">@ {experienceProps.company}</a> </h1>
                  </ContainerRoleAndCompany>
                  <ContainerDateStartEnd>
                    <h1>{ formatDate(experienceProps.startDate) }</h1>
                    <h1>&nbsp;&nbsp;-&nbsp;&nbsp;</h1>
                    <h1> { formatDate(experienceProps.endDate) }</h1>
                  </ContainerDateStartEnd>

                  {experienceProps.description ? t(`${experienceProps.company}.description`).split('|').map( item => 
                    <ContainerFlexTriangule key={item}>
                      <Triangule />
                      <span>{item}</span>
                    </ContainerFlexTriangule>
                  ) : ''}
                </Col>
                <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
                </Col>
              </Row>
            </ContainerBootstrap>
          </Content>
        </Container>
      );
}