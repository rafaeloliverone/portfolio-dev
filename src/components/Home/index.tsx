import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content, ContainerProfile, ContainerTechnologies } from './styles';
import javascriptLogo from '../../assets/js.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';


export function Home() {
  useEffect(() => {
    document.title = "Olá, eu sou o - Rafael Oliveira"
  }, [])

  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12}  md={4} lg={4} xl={4}>
              <ContainerProfile>
                <img src='https://avatars.githubusercontent.com/u/48067346?v=4'></img>
              </ContainerProfile>
            </Col>
            <Col col xs={12} sm={12} md={8} lg={8} xl={8}>
              <div>
                <h1>OLÁ, EU SOU O RAFAEL OLIVEIRA</h1>
                <p>Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias criativas.</p>
                
                <ContainerTechnologies>
                  <img src={javascriptLogo} width={40} height={40}></img>
                  <img src={nodeLogo} width={40} height={40}></img> 
                  <img src={reactLogo} width={40} height={40}></img>
                </ContainerTechnologies>
              </div>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>  
    </Container>
  )
}