import styled from 'styled-components';

export const Container = styled.header`
  padding: 2rem 1rem;
  background:  ${props => props.theme.colors.secondary} !important;
  border-radius: 0.25rem;
  width: 100%;
`

export const Content = styled.section`
  font-size: 20px;
  display: flex;
  overflow: auto;
  
  h1 {
    font-size: 20px;
    color: #fff;

  }

  span {
    max-width: 100%;
    color: #d4d4d4;

  }
`

export const ContainerDateStartEnd = styled.section`
  display: flex;
  h1 {
    font-size: 0.9rem;
    color: #d4d4d4;
  }
`

export const ContainerFlex = styled.section`
  display: flex;
  align-items: center;

  h1 {
    text-align: center;
    color: #d4d4d4;

  }
`

export const ContainerFlexTriangule = styled.section`
  display: flex;
  align-items: flex-start;
  margin-top: 0.8rem;

  span {
    font-size: 1rem;
    color: #d4d4d4;

  }
  section {
    margin-top: 8px;
    margin-right: 8px;
  }
`

export const ContainerRoleAndCompany = styled.section`
  display: flex;
  h1 {
    font-size: 1.5rem;
    a {
      text-decoration: none;
      color: var(--purple);

    }
  }

  h1:last-child {
    color: var(--purple);
  }
`
export const Triangule = styled.section`
  width: 0; 
  height: 0; 
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid var(--purple);
`