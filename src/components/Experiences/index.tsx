import { Container as ContainerBootstrap, Row, Col } from 'styled-bootstrap-grid';
import {useTranslation} from "react-i18next";
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { AxiosResponse } from 'axios';

import { Container, Content, NameCompanies, LoadingSpinner } from './styles';
import { api } from '../../services/api';
import { Experience } from '../Experience';


interface Experience {
  id: string;
  company: string;
  role: string;
  roleEnglish: string;
  place: string;
  description: string[];
  descriptionEnglish: string[];
  startDate: string;
  endDate?: string;
}

interface Props {
  changeIdioma(ptJson: any, enJson: any): void
}

export const Experiences: React.FC<Props> = ({changeIdioma}) => {
  const [companySelectedButton, setCompanySelectedButton] = useState<string>('Indra');
  const [loadingData, setLoadingData] = useState(true);
  const [company, setCompany] = useState<Experience>({} as Experience);
  const [experiences, setExperiences] = useState<Experience[]>();
  const {t, i18n} = useTranslation('common');


  const nameCompanyOnClick = (event: any) => {
    document.getElementById(companySelectedButton)?.classList.remove('active');

    if (experiences) {
      experiences.find(experience => experience.company === event.target.value ? setCompany(experience) : '')
    }

    setCompanySelectedButton(event.target.value)
  }

  useEffect(() => {
    setLoadingData(true);
    const fetchExperiencesData = async () => {
      await api.get<Experience[]>('/experiences/list').then((res: AxiosResponse<Experience[]>) => {
        setExperiences(res.data)
        tranformJsonEnglishAndPortuguese(res.data)

        const indraCompany = res.data.find(ex => ex.company == 'Indra')

        setCompany(indraCompany ? indraCompany : res.data[0]);
        setLoadingData(false);
      });
    }
    fetchExperiencesData();

  }, [])

  const tranformJsonEnglishAndPortuguese = async(response: any) => {
    let jsonEnglish = {}
    let jsonPortuguese = {}

    response.forEach( (item: any) => {
      var portugueseTranslationJSON = {} as any
      var englishTranslationJSON = {} as any

      var allKeysExperienceObj = Object.keys(item)

      Object.keys(item).map(chave => {
        chave.includes('English') ? 
          (englishTranslationJSON[chave.replace('English', '')] = item[chave]) :  
          (portugueseTranslationJSON[chave] = item[chave]) 
      }) 
      
      var wordsUnuseful = allKeysExperienceObj.map(item => item.includes('English') ? item.replace('English', '') : '').filter(exists => exists)

      var keysToCompleteEnglish = allKeysExperienceObj.map(item => wordsUnuseful.includes(item) || item.includes('English') ? '' : item).filter(exists => exists)
      
      keysToCompleteEnglish.forEach(item => englishTranslationJSON[item] = portugueseTranslationJSON[item])

      const pt = { [item.company]: portugueseTranslationJSON }
      const en = { [item.company]: englishTranslationJSON }

      Object.assign(jsonEnglish, en)
      Object.assign(jsonPortuguese, pt)
    } )

    // console.log('PORTHUESE',jsonPortuguese)
    // console.log('ENGLISHH', jsonEnglish)
    changeIdioma(jsonPortuguese, jsonEnglish);
  }

  useEffect(() => {
    document.getElementById(companySelectedButton)?.classList.add('active');
  })

  return (
    <Container>
      <Content>
        <ContainerBootstrap>
          <Row>
            <Col col xs={12} sm={12}  md={12} lg={12} xl={12}>
              { loadingData ? 
                <LoadingSpinner>
                  <ReactLoading type={"spinningBubbles"} color={"#8D8EEB"} height={100} width={100} /> 
                </LoadingSpinner> : 
                null
              }
              { !loadingData ? 
                  <>
                    <NameCompanies>
                      <div>
                        <button id="Indra" onClick={nameCompanyOnClick} value="Indra">Indra</button>
                        <button id="DWS" onClick={nameCompanyOnClick} value="DWS">DWS Corretora</button>
                        <button id="IFPB" onClick={nameCompanyOnClick} value="IFPB">Reitoria IFPB</button>
                        <button id="Unisigma"onClick={nameCompanyOnClick} value="Unisigma">Unisigma</button>
                      </div>
                    </NameCompanies>
                    <Experience startDate={company.startDate} endDate={company.endDate} company={company.company} role={company.role} place={company.place} description={company.description} />
                  </> :
                  null
              }
            </Col>
          </Row>
        </ContainerBootstrap>
      </Content>
    </Container>
  );
}
