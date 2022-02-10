import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';

import { Container, Content, Card, ImagesTechnologies, ContainerImageProfile } from './styles';
import javascriptLogo from '../../assets/js.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';


export function About() {
  useEffect(() => {
    document.title = "Sobre mim"
  }, [])

  return (
    <Container>
      <Content>
        <ContainerBootstrap>
            <Row>
              <Col col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Row>
                  <ContainerImageProfile>
                    <img  src='https://avatars.githubusercontent.com/u/48067346?v=4'></img>
                  </ContainerImageProfile>
                </Row>
                <Row>
                  <ImagesTechnologies>
                    <img src={javascriptLogo} width={40} height={40}></img>
                    <img src={nodeLogo} width={40} height={40}></img> 
                    <img src={reactLogo} width={40} height={40}></img>
                    <img src={javascriptLogo} width={40} height={40}></img>
                    <img src={nodeLogo} width={40} height={40}></img> 
                    <img src={reactLogo} width={40} height={40}></img>
                    <img src={javascriptLogo} width={40} height={40}></img>
                    <img src={nodeLogo} width={40} height={40}></img> 
                    <img src={reactLogo} width={40} height={40}></img>
                  </ImagesTechnologies>
                </Row>
              </Col>
              <Col col xs={12} sm={12} md={8} lg={8} xl={8}>
                <Card>
                  <h3>Eu sou o Fernando, prazer em conhece-lo</h3>
                  <p>Meu nome completo é Fernando Moreira Costa, tenho 33 anos, nasci e cresci em uma cidadezinha do interior de Rondônia chamada Ariquemes , sai de lá com 18 anos para me aventurar em Curitiba/PR onde moro atualmente.</p>
                  <p>💻 Sou programador não por formação mas por vocação, 🥑 vegetariano,🎻 violinista,🤔 piadista ❤️e fã de beterraba.</p>
                  <hr></hr>
                  <h3>Histórico profissional</h3>
                  <p>Eu comecei a "brincar" com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
                  <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no Colégio Estadual do Paraná (CEP).</p>
                  <p>Desde então venho trabalhando com desenvolvimento web, design , Front-end e UX Design.</p>
                  <p>Já passei por algumas tantas empresas, dentre elas MalaPronta , Pipefy e LojasKD se destacam por ter trabalhado em um único produto, onde acumulei skylls de Front-end e UX Design.</p>

                </Card>
              </Col>
            </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}