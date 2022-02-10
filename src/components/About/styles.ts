import styled from 'styled-components';

export const Container = styled.div`
  background: var(--green);
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 1120px;
  display: flex;
  margin-top: 2rem;
  flex: 1;
`;

export const Card = styled.div`
  border: 1px solid #c8c8c8;
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  flex: 1;

  @media (max-width: 767.20px) {
    margin-top: 4rem;
  }
`;

export const ImagesTechnologies = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  padding: 0 1rem;

  img {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const ContainerImageProfile = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    margin: 0 1rem;
    border-radius: 0.5rem;
  }
`;

