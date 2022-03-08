import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Container, Content, ContainerProfile, ContainerTechnologies } from './styles';


export function Home() {
  const {t, i18n} = useTranslation('common');

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
            <Col col xs={12} sm={12}  md={5} lg={4} xl={4}>
              <ContainerProfile>
                <animated.div style={{ ...springPhoto }}>
                  <img  src='https://avatars.githubusercontent.com/u/48067346?v=4' alt="Profile photo"></img>
                </animated.div>
              </ContainerProfile>
            </Col>
            <Col className='apresentation' col xs={12} sm={12} md={7} lg={8} xl={8}>
              <animated.div style={{ ...springTitle }}>
                <h1>{t("titleApresentation")}</h1>
              </animated.div>
              
              <animated.div style={{ ...springParagraph }}>
                <p>{t("descriptionApresentation")}</p>
              </animated.div>

              <animated.div style={{ ...springTechnologies }}>
                <ContainerTechnologies>
                  <hr/>
                  <a href="https://www.linkedin.com/in/rafael-oliveira-13a678181/" target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ fontSize: 50, marginLeft: 10 }}
                    />
                  </a>
                  <a href="https://www.instagram.com/rafael.code/" target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: 50, marginLeft: 10 }}
                    />
                  </a>
                  <a href="https://github.com/rafaeloliverone" target={'_blank'} rel="noreferrer" style={{ color: 'inherit' }}>
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      style={{ fontSize: 50, marginLeft: 10 }}
                    />
                  </a>
                </ContainerTechnologies>
              </animated.div>
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>  
    </Container>
  )
}