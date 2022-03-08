import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  overflow-y: hidden;
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
  align-items: center;

  hr {
    height: 4px;
    width: 70%;
    color: ${props => props.theme.colors.quartenary};
  }

  svg {
    transition: all 0.25s;

    &:hover {
      transform:  translateY(-10px);

      color: ${props => props.theme.colors.purple};
      cursor: pointer;
    }
  }

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

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding-bottom: 9rem;

  }

  h1 {
    color: ${props => props.theme.colors.purple};
  }

  p {
    font-size: 150%;
    color: ${props => props.theme.colors.ternary};
  }

  .apresentation {
    /* background-color:blue ; */
  }
`