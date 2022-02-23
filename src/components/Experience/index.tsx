import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content, ContainerDateStartEnd, ContainerRoleAndCompany, Triangule, ContainerFlex, ContainerFlexTriangule } from './styles';


interface ExperienceProps {
    startDate: string;
    endDate?: string;
    company: string;
    role: string;
    place: string;
    description: string[]
}

export const Experience: React.FC<ExperienceProps> = (experienceProps) => {
    return (
        <Container>
          <Content>
            <ContainerBootstrap>
              <Row>
                <Col col xs={12} sm={12}  md={12} lg={12} xl={12}>
                  <ContainerRoleAndCompany>
                    <h1>{experienceProps.role}</h1>
                    <h1><a href="https://www.indracompany.com/pt-br/minsait" target="_blank" rel="noreferrer">@ {experienceProps.company}</a> </h1>
                  </ContainerRoleAndCompany>
                  <ContainerDateStartEnd>
                    <h1>{experienceProps.startDate}-</h1>
                    <h1> {experienceProps.endDate}</h1>
                  </ContainerDateStartEnd>

                  {experienceProps.description.map( item => 
                    <ContainerFlexTriangule>
                      <Triangule />
                      <span>{item}</span>
                    </ContainerFlexTriangule>
                  )}
                </Col>
                <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
                </Col>
              </Row>
            </ContainerBootstrap>
          </Content>
        </Container>
      );
}