import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import {useTranslation} from "react-i18next";
import { useEffect, useState } from 'react';

import { Container, Content, ExperienceMargin, NameCompanies } from './styles';
import { Experience } from '../Experience';


export function Experiences() {
  const [company, setCompany] = useState('Indra')
  const {t, i18n} = useTranslation('common');

  const nameCompanyOnClick = (event: any) => {
    document.getElementById(company)?.classList.remove('active');
    setCompany(event.target.value)
  }

  useEffect(() => {
    document.getElementById(company)?.classList.add('active');
  }, [company])

  let indra1 = "Minha principal atuação foi exercida em projetos nos quais possuem certificações de qualidade de software, como por exemplo CMMI e TMMI, assim, adquirindo um vasto conhecimento sobre os processos, regras de negócio e realização de code review para evitar retorno de futuros bugs e aumentar o nível de qualidade da entrega, sempre seguindo as metodologias do Scrum."
  let indra2 = "Contribuição no desenvolvimento de um sistema para cálculos de métricas, pontos de função, estimativas e carteira de clientes no qual fiquei responsável por desenvolvimento de novas funcionalidades no back-end com Java e Spring, integrações e consumo da api no front-end com Angular. "
  let indra3 = "Desenvolvimento de um Chatbot utilizando a plataforma do Botpress baseado no JavaScript onde integrava com o Camunda Modeler solução BPMN para execuções e agendamento de automações. Bem como um dashboard de métricas onde era possível aplicar diversos filtros e verificar as automações mais executadas, quais ocorreram erros, verificar quais os horários de pico do sistema, quais usuários estavam conectados nas últimas 24 horas."
  let indra4 = "Atualmente alocado em um projeto onde temos reuniões frequentes em Espanhol onde se utilizam as seguintes tecnologias: JAVA1.3, PLSQL e Webmethods."
  const arrayString = [indra1, indra2, indra3, indra4 ]

  let dws1 = "Responsável por todo o backend desenvolvido em Django e Django REST Framework, criação de modelos, novos endpoints, views, serialização dos dados, documentação da api, formatação do código de acordo com a PEP8 e criação de tarefas periódicas com o celery. "
  let dws2 = "Desenvolvimento de novas funcionalidades que surgem no frontend com React e TypeScript. Experiência adquirida com docker e docker-compose, github colaborativo, e metodologias ágeis onde implantamos em reuniões semanais, daily scrum, backlog e criação de sprint."

  const arrayDWS = [dws1, dws2]
  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            {/* <Col col xs={12} sm={12}  md={4} lg={4} xl={6}>
              <h1>{t('welcome.title')}</h1>
            </Col> */}
            <Col col xs={12} sm={12}  md={12} lg={12} xl={12}>
              
              <NameCompanies>
                <div>
                  <button id="Indra" onClick={nameCompanyOnClick} value="Indra">Indra</button>
                  <button id="DWS" onClick={nameCompanyOnClick} value="DWS">DWS Corretora</button>
                  <button id="IFPB" onClick={nameCompanyOnClick} value="IFPB">Reitoria IFPB</button>
                  <button id="Unisigma"onClick={nameCompanyOnClick} value="Unisigma">Unisigma</button>
                </div>
              </NameCompanies>
              <Experience startDate='14/04/2000' endDate='04/04/2015' company='Indra' role='Developer' place='João pessoa' description={arrayString} />
              {/* <ExperienceMargin>
                <Experience startDate='14/04/2000' endDate='04/04/2015' company='DWS Corretora' role='Desenvolvedor' place='João pessoa' description={arrayDWS} />
              </ExperienceMargin>
               */}
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}