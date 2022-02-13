import styled from 'styled-components';

export const Container = styled.header`
  background: azure !important;
  border-radius: 0.25rem;
  width: 100%;
`

export const Content = styled.section`
  font-size: 20px;
  display: flex;
  
  h1 {
    font-size: 20px;
  }
`

export const ContainerDateStartEnd = styled.section`
  display: flex;
  h1 {
    font-size: 0.9rem;
  }
`

export const ContainerFlex = styled.section`
  display: flex;
  align-items: center;

  h1 {
    text-align: center;
  }
`

export const ContainerRoleAndCompany = styled.section`
  display: flex;
  h1 {
    font-size: 1.5rem;
  }

  h1:last-child {
    color: var(--grey);
  }
`



export const Triangule = styled.section`
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid #4C4B63;
`