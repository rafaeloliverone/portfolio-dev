import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useSpring, animated  } from "react-spring";
import { useTranslation } from "react-i18next";


import { Container, Content, InputWithIcon } from './styles';
import profileLogo from '../../assets/profile.png';
import penLogo from '../../assets/pen.png';
import messageLogo from '../../assets/message.png';

import instaLogo from '../../assets/ig-instagram.svg';
import gitLogo from '../../assets/iconmonstr-github-3.svg';
import linkedinLogo from '../../assets/linkedin-app.svg';


export const Contact = () => {
  const [t, i18n] = useTranslation('common');

  const transition = useSpring({ 
    from: { opacity: 0, y: 3000, rotateZ: 0, transform: 'scale(1)' }, 
    to: { opacity: 1, y: 0, rotateZ: 0 , transform: 'scale(1)'}, delay: 200
  });
  

  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <animated.div style={{ ...transition }} >
            <Row style={{justifyContent: 'center', }}>
              <Col className='contact' col xs={12} sm={12} md={4} lg={4} xl={4}>
                <h3 style={{fontSize: '40px'}}>{t("contact")}</h3>
                <p style={{fontSize: '25px'}}>{t("descriptionContact")}</p>

                <Col className='iconsSocialMedias' col xs={12} sm={12} md={12} lg={10} xl={12}>
                  <Col className='singleIcon' col xs={4} sm={4} md={12} lg={12} xl={12}>
                    <a href="https://github.com/rafaeloliverone" target={'_blank'} rel="noreferrer">
                      <img src={instaLogo} alt="Twitter Logo" width={60} height={60}/>
                      <span style={{marginLeft: '10px', color: '#e44675'}}>Instagram</span>
                    </a>
                  </Col>
                  <Col className='singleIcon' col xs={4} sm={4} md={12} lg={12} xl={12}>
                    <a href="https://github.com/rafaeloliverone" target={'_blank'} rel="noreferrer">
                      <img src={gitLogo} alt="Git Logo" width={60} height={60}/>
                      <span style={{marginLeft: '10px', color: '#000'}}>Github&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </a>
                  </Col>
                  <Col className='singleIcon' col xs={4} sm={4} md={12} lg={12} xl={12}>
                    <a href="https://www.linkedin.com/in/rafael-oliveira-13a678181/" target={'_blank'} rel="noreferrer">
                      <img src={linkedinLogo} alt="LinkedIn Logo" width={60} height={60}/>
                      <span style={{marginLeft: '10px', color: '#0a66c2'}}>LinkedIn&nbsp;&nbsp;&nbsp;</span>
                    </a>
                  </Col>
                </Col>
              </Col>

              <Col className='form' col xs={12} sm={12} md={7} lg={7} xl={7}>
                <form>
                  <h3 style={{fontSize: '40px'}}>{t("titleContact")}</h3>
                  
                  <div className='formWithInputs'>
                    <InputWithIcon>
                      <input type="text" name="name" autoComplete="off" placeholder={t("nameForm")}></input>
                      <img src={profileLogo} width={40} height={40}></img>
                    </InputWithIcon>
                    <InputWithIcon>
                      <input type="text" name="assunto" autoComplete="off" placeholder={t("topicForm")}/>
                      <img src={penLogo}></img>
                    </InputWithIcon>
                    <InputWithIcon>
                      <textarea name='message' autoComplete="off" placeholder={t("messageForm")}></textarea>
                      <img src={messageLogo} width={40} height={40}></img>
                    </InputWithIcon>

                    {/* <input type="submit" value={t("textButtonSubmit") ? t("textButtonSubmit") || "!dsa" : "dsad" } /> */}
                    <button type="submit" onClick={() => console.log('submeteu')} >
                      <span>{t("textButtonSubmit")}</span>
                    </button>
                  </div>
                </form>
              </Col>
              
            </Row>
          </animated.div>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
  }
  