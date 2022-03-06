import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";

import { Container, Content, Card, ImagesTechnologies, ContainerImageProfile } from './styles';
import javascriptLogo from '../../assets/js.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';


export function About() {
  const props = useSpring({ 
    from: { opacity: 0, y: 0, rotateZ: 0, transform: 'scale(1)' }, 
    enter: { opacity: 1, height: 'auto' ,  transform: 'scale(1)' },
    to: { opacity: 1, y: 0, rotateZ: 0 , transform: 'scale(1)'},
  });

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
                    <animated.div style={{ ...props }}>
                      <img  src='https://avatars.githubusercontent.com/u/48067346?v=4'></img>
                    </animated.div>
                  </ContainerImageProfile>
                </Row>
                <Row>
                  <animated.div style={{ ...props }}>
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
                  </animated.div>
                </Row>
              </Col>
              <Col col xs={12} sm={12} md={8} lg={8} xl={8}>
                <animated.div style={{ ...props }}>
                  <Card>
                    <h3>Sobre mim</h3>
                    <p>Meu nome completo é Rafael Oliveira Batista, tenho 21 anos, nasci em Campina Grande mas atualmente resido em João Pessoa ambas cidades na Paraíba.</p>
                    <p>💻 Sou programador não por formação mas por vocação, 🥑 vegetariano,🎻 violinista,🤔 piadista ❤️e fã de beterraba.</p>
                    <hr/>
                    <h3>Histórico profissional</h3>
                    <p>Eu comecei a "brincar" com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
                    <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no Colégio Estadual do Paraná (CEP).</p>
                    <p>Desde então venho trabalhando com desenvolvimento web, design , Front-end e UX Design.</p>
                    <p>Já passei por algumas tantas empresas, dentre elas MalaPronta , Pipefy e LojasKD se destacam por ter trabalhado em um único produto, onde acumulei skylls de Front-end e UX Design.</p>
                    <hr/>
                    <h3>Com o que trabalho hoje ?</h3>
                    <p>Eu comecei a "brincar" com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
                    <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no Colégio Estadual do Paraná (CEP).</p>
                    <hr/>
                    <h3>Sobre esse portfólio</h3>
                    <p>Eu comecei a "brincar" com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
                    <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no Colégio Estadual do Paraná (CEP).</p>
                    <p>Desde então venho trabalhando com desenvolvimento web, design , Front-end e UX Design.</p>
                    <hr/>
                    <h3>Quer saber mais ?</h3>
                    <p>Eu comecei a "brincar" com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2011.</p>
                    <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no Colégio Estadual do Paraná (CEP).</p>
                    <p>Desde então venho trabalhando com desenvolvimento web, design , Front-end e UX Design.</p>
                  </Card>
                </animated.div>
              </Col>
            </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}