import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

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
                    <p>Me chamo Rafael Oliveira, tenho 21 anos, nascido e crescido em Campina Grande cidade do Maior São João do Mundo, me mudando aos 18 anos para João Pessoa com o objetivo de cursar Sistemas para Internet no Instituto Federal da Paraíba (IFPB).</p>
                    <p>Trabalho com Desenvolvimento de Sofware desde 2019 onde inicialmente passei por 2 estágios e em seguida ingressei na área como Desenvolvedor Júnior na Indra, onde atualmente estou como Pleno.</p>
                    <p>Sempre fui muito curioso em relação a computação como as coisas se comunicavam e o seu funcionamento no geral, com isso fui aprimorando minhas skills de Front-End com Back-End e Banco de Dados.</p>
                    <hr/>
                    <h3>Histórico profissional</h3>
                    <p>Meu primeiro estágio foi na Reitoria do IFPB onde atuava com um sistema open-source de gerenciamento de eventos desenvolvido em Laravel, ficando responsável pelo Back-end, inclusão de novas regras negociais e integrações com outros sistemas internos.</p>
                    <p>O Segundo estágio foi na DWS uma corretora de seguros na qual modelei todo o banco de dados para comportar a regra negocial e a criação da API com a stack Python (Django, Django REST Framework).</p>
                    <p>Ingressei na Indra onde inicialmente atuei com Java (Spring) e Angular em um sistema interno de métricas, em seguida atuei em um cliente financeiro adquirindo um vasto conhecimento sobre processos e desenvolvimento de um Chatbot que integra com o Camunda Modeler para os colaboradores desenharem seus processos e executarem. Atualmente trabalhando com Java e PL/SQL </p>
                    <hr/>
                    <h3>Sobre esse portfólio</h3>
                    <p>Esse é um projeto que estava guardado a um certo tempo, desenvolvi com o intuito de reciclar os conhecimentos em React e Django. De acordo com os estudos, posteriormente estarei adicionando novas funcionalidades.</p>
                    <hr/>
                    <h3>Quer saber mais ?</h3>
                    <p>Você pode me seguir nas redes sociais para ficar por dentro.</p>
                    <p></p>
                    <a href="https://www.linkedin.com/in/rafael-oliveira-13a678181/" target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: 50 }}
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/rafael-oliveira-13a678181/" target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: 50, marginLeft: 10 }}
                      />
                    </a>
                  </Card>
                </animated.div>
              </Col>
            </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}