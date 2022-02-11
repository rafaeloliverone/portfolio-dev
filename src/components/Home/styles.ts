import styled from 'styled-components';

export const Container = styled.div`
  background: var(--green);
  display: flex;
  justify-content: center;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-bottom: 2rem;

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`
export const ContainerTechnologies = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-bottom: 2rem;
  
  img {
    &:first-child {
        margin-left: 0;
    }

    margin-left: 2rem;
  }
`

export const Content = styled.section`
  max-width: 1120px;
  display: flex;
  align-items: center;
  height: 88vh;

  p {
    font-size: 150%;
  }
`