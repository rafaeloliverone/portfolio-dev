import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import { useState } from 'react';

import { Container, Content, InputWithIcon, ImageContact } from './styles';
import contactLogo from '../../assets/contact.svg';
import profileLogo from '../../assets/profile.png';
import penLogo from '../../assets/pen.png';
import messageLogo from '../../assets/message.png';


export const Contact = () => {
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12} md={6} lg={6} xl={6}>
              
              <ImageContact src={contactLogo} width={400} height={400}></ImageContact>
            </Col>
            <Col col xs={12} sm={12} md={6} lg={6} xl={6}>
              {/* <form style={{ backgroundImage: `url(${require('../../assets/teste.svg')})` }}> */}
              <form>
                <div>
                  <h3>Formulário de Contato</h3>
                </div>

                <div>
                  <InputWithIcon>
                    <input type="text" name="name" autoComplete="off" placeholder='Nome'></input>
                    <img src={profileLogo} width={40} height={40}></img>
                  </InputWithIcon>
                  <InputWithIcon>
                    <input type="text" name="assunto" autoComplete="off" placeholder='Assunto'/>
                    <img src={penLogo}></img>
                  </InputWithIcon>
                  <InputWithIcon>
                    <textarea name='message' autoComplete="off" placeholder='Mensagem'></textarea>
                    <img src={messageLogo} width={40} height={40}></img>
                  </InputWithIcon>

                  <input type="submit" value="Enviar" />
                </div>
              </form>
            </Col>
            <Col>
            </Col>
          </Row>

        </ContainerBootstrap>
      </Content>
    </Container>
  );
  }
  