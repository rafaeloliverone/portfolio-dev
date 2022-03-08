import styled from 'styled-components';

export const Container = styled.div`
  background:  ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 1120px;
  display: flex;
  margin-top: 2rem;
  flex: 1;
  height: 100vh;
`;

export const Card = styled.div`
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;

  flex: 1;

  svg {
    transition: all 0.25s;

    &:hover {
      color: ${props => props.theme.colors.purple};
      transform: translateY(-8px);
    }
  }

  h3 {
    color: ${props => props.theme.colors.purple};
  }
  p {
    color: ${props => props.theme.colors.ternary};
  }

  hr {
    border: 1px solid ${props => props.theme.colors.purple};
  }

  @media (max-width: 767.20px) {
    margin-top: 4rem;
    margin-left: 0;
  }
`;

export const ImagesTechnologies = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 0 1rem;

  svg {
    transition: all 0.25s;
    margin-top: 1.2rem;

    &:hover {
      transform:  translateY(-8px);
      color: ${props => props.theme.colors.purple};
      cursor: pointer;
    }
  }
`;

export const ContainerImageProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }
`;
