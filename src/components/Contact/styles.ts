import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  background-position: center;
  display: flex;
  flex: 1;
  height: 50vh;

  @media (max-width: 767px) {
    height: 100%;
  }
  justify-content: center;
`;


export const ImageContact = styled.img`
  @media (max-width: 768px) {
    height: 250px;
    display: none;
  }

`;

export const Content = styled.section`
  max-width: 1120px;
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;


  /* @media (max-width: 768px) {
    img {
      height: 250px;
      display: none;
    }
  } */
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 1rem;

    border: 1px solid var(--secondary);
    border-radius: 0.25rem;
    height: 50vh;

    color: #c3c3c3;
    
    input {
      height: 3rem;
      font-size: 1.1rem;
      background-color: var(--white);
      color: black;

      &:last-child {
        margin-top: 2rem;
        transition: all 0.25s;
        border: 0;

        color: var(--white);
        background-color: var(--purple);

        &:hover {
          filter: blur(10);
        }
      }
    }
    
    textarea {
      font-size: 1.1rem;
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

export const InputWithIcon = styled.div`
  display: flex;
  position: relative;
  margin-top: 1rem;

  input, textarea {
    padding-left: 4rem;
    position: relative;

    outline: none;
  }

  textarea {
    padding-top: 10px
  }

  img {
    position: absolute;
    top: 12%;
    bottom: 0;
    right: 10px;
    left: 12px;
    width: 30px;
    height: 30px;
  }
`