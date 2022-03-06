import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";

import { Container, Content, ContainerProfile, ContainerTechnologies } from './styles';
import javascriptLogo from '../../assets/js.svg';
import reactLogo from '../../assets/react.svg';
import nodeLogo from '../../assets/node.svg';
import profile from '../../assets/profile.png';


export function Home() {
  const springTechnologies = useSpring({ 
    from: { opacity: 0, y: 1000, rotateZ: 0, transform: 'scale(1)' }, 
    to: { opacity: 1, y: 0, rotateZ: 0 , transform: 'scale(1)'}, delay: 1300
  });

  const springTitle = useSpring({ 
    from: { opacity: 0, y: 1000, rotateZ: 0, transform: 'scale(1)' }, 
    to: { opacity: 1, y: 0, rotateZ: 0 , transform: 'scale(1)'}, delay: 300
  });

  const springParagraph = useSpring({ 
    from: { opacity: 0, y: 1000, rotateZ: 0, transform: 'scale(1)' }, 
    to: { opacity: 1, y: 0, rotateZ: 0 , transform: 'scale(1)'}, delay: 800
  });

  const springPhoto = useSpring({ 
    from: { opacity: 0, x: -1000, rotateZ: 0, transform: 'scale(1)' }, 
    to: { opacity: 1, x: 0, rotateZ: 0 , transform: 'scale(1)'}, delay: 300
  });


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
                <animated.div style={{ ...springPhoto }}>
                  <img  src='https://avatars.githubusercontent.com/u/48067346?v=4' alt="Profile photo"></img>
                </animated.div>
              </ContainerProfile>
            </Col>
            <Col col xs={12} sm={12} md={8} lg={8} xl={8}>
              <animated.div style={{ ...springTitle }}>
                <h1>OLÁ, ME CHAMO RAFAEL OLIVEIRA</h1>
              </animated.div>
              
              <animated.div style={{ ...springParagraph }}>
                <p>Ajudo empresas a criar projetos web personalizados, de alta qualidade e com tecnologias criativas.</p>
              </animated.div>

              <animated.div style={{ ...springTechnologies }}>
                <ContainerTechnologies>
                  <img src={javascriptLogo} width={40} height={40} alt="JavaScript"></img>
                  <img src={nodeLogo} width={40} height={40} alt="Node"></img> 
                  <img src={reactLogo} width={40} height={40} alt="React"></img>
                </ContainerTechnologies>
              </animated.div>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>  
    </Container>
  )
}