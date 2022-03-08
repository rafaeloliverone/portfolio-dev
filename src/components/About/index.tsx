import { useEffect } from 'react';
import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from 'react-tooltip';
import { useTranslation } from "react-i18next";
import {
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faJava,
  faPython,
  faJsSquare,
  faNodeJs,
  faAngular,
  faReact,
  faBootstrap,
  faCss3,
  faPhp,
  faLaravel,
  faDocker,
  faHtml5,
  faSass
} from "@fortawesome/free-brands-svg-icons";

import { Container, Content, Card, ImagesTechnologies, ContainerImageProfile } from './styles';


export function About() {
  const {t, i18n} = useTranslation('common');

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
                      <img src='https://avatars.githubusercontent.com/u/48067346?v=4'></img>
                    </animated.div>
                  </ContainerImageProfile>
                </Row>
                <Row>
                  <animated.div style={{ ...props }}>
                    <ImagesTechnologies>
                      <FontAwesomeIcon
                        data-tip="Github"
                        data-for="Github"
                        icon={faGithubSquare}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Java"
                        data-for="Java"
                        icon={faJava}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Python"
                        data-for="Python"
                        icon={faPython}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="JsSquare"
                        data-for="JsSquare"
                        icon={faJsSquare}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="NodeJs"
                        data-for="NodeJs"
                        icon={faNodeJs}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="React"
                        data-for="React"
                        icon={faReact}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Angular"
                        data-for="Angular"
                        icon={faAngular}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Bootstrap"
                        data-for="Bootstrap"
                        icon={faBootstrap}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Css3"
                        data-for="Css3"
                        icon={faCss3}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Php"
                        data-for="Php"
                        icon={faPhp}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Laravel"
                        data-for="Laravel"
                        icon={faLaravel}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Docker"
                        data-for="Docker"
                        icon={faDocker}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Html5"
                        data-for="Html5"
                        icon={faHtml5}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <FontAwesomeIcon
                        data-tip="Sass"
                        data-for="Sass"
                        icon={faSass}
                        style={{ fontSize: 50, marginLeft: 15 }}
                      />
                      <ReactTooltip id='Github' type='dark' place='top' effect='solid'>
                        <span>Github</span>
                      </ReactTooltip>
                      <ReactTooltip id='Java' type='dark' place='top' effect='solid'>
                        <span>Java</span>
                      </ReactTooltip>
                      <ReactTooltip id='Python' type='dark' place='top' effect='solid'>
                        <span>Python</span>
                      </ReactTooltip>
                      <ReactTooltip id='JsSquare' type='dark' place='top' effect='solid'>
                        <span>JavaScript</span>
                      </ReactTooltip>
                      <ReactTooltip id='NodeJs' type='dark' place='top' effect='solid'>
                        <span>NodeJs</span>
                      </ReactTooltip>
                      <ReactTooltip id='React' type='dark' place='top' effect='solid'>
                        <span>React</span>
                      </ReactTooltip>
                      <ReactTooltip id='Angular' type='dark' place='top' effect='solid'>
                        <span>Angular</span>
                      </ReactTooltip>
                      <ReactTooltip id='Bootstrap' type='dark' place='top' effect='solid'>
                        <span>Bootstrap</span>
                      </ReactTooltip>
                      <ReactTooltip id='Css3' type='dark' place='top' effect='solid'>
                        <span>CSS3</span>
                      </ReactTooltip>
                      <ReactTooltip id='Php' type='dark' place='top' effect='solid'>
                        <span>Php</span>
                      </ReactTooltip>
                      <ReactTooltip id='Laravel' type='dark' place='top' effect='solid'>
                        <span>Laravel</span>
                      </ReactTooltip>
                      <ReactTooltip id='Docker' type='dark' place='top' effect='solid'>
                        <span>Docker</span>
                      </ReactTooltip>
                      <ReactTooltip id='Html5' type='dark' place='top' effect='solid'>
                        <span>Html5</span>
                      </ReactTooltip>
                      <ReactTooltip id='Sass' type='dark' place='top' effect='solid'>
                        <span>Sass</span>
                      </ReactTooltip>
                    </ImagesTechnologies>
                  </animated.div>
                </Row>
              </Col>
              <Col col xs={12} sm={12} md={8} lg={8} xl={8}>
                <animated.div style={{ ...props }}>
                  <Card>
                    <h3>{t("aboutMe")}</h3>
                    <p>{t("aboutMePart1")}</p>
                    <p>{t("aboutMePart2")}</p>
                    <p>{t("aboutMePart3")}</p>
                    <hr/>
                    <h3>{t("professionalBackground")}</h3>
                    <p>{t("professionalPart1")}</p>
                    <p>{t("professionalPart2")}</p>
                    <p>{t("professionalPart3")}</p>
                    <hr/>
                    <h3>{t("aboutPortfolio")}</h3>
                    <p>{t("aboutPortfolioPart1")}</p>
                    <hr/>
                    <h3>{t("knowMore")}</h3>
                    <p>{t("knowMorePart1")}</p>
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