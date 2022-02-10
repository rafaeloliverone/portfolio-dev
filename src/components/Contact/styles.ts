import styled from 'styled-components';

export const Container = styled.div`
  background: var(--green);
  display: flex;
  flex: 1;
  height: 68vh;

  @media (max-width: 767px) {
    height: 100%;
  }
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 1120px;
  display: flex;
  align-items: center;
  flex: 1;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    img {
      height: 250px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    
    input {
      height: 2rem;
    }
    
    textarea {
      min-height: 150px;
      max-height: 200px;
    }

    input, textarea {
      border-radius: 0.25rem;
      border: 1px solid #c3c3c3;
      width: 100%;
    }

  }
`