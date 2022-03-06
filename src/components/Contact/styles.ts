import styled from 'styled-components';
import { shade, } from 'polished'


export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  background-position: center;
  overflow-y: hidden;
  display: flex;
  flex: 1;
  height: 87vh;

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
  
  .contact {
    background-color: ${props => props.theme.colors.contact};
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;

    h3 {
      color: ${props => shade(0.50, '#fff')};
    }

    p {
      color: ${props => shade(0.50, '#fff')};
    }

    a {
      text-decoration: none;
    }

  }

  .form {
    background-color: ${props => props.theme.colors.secondary};
    
    h3 {
      color: ${props => shade(0, '#fff')};

    }    
  }

  .iconsSocialMedias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    .singleIcon {
      margin-top: 2rem;
      text-align: center;

      @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
      }

      &:hover {
        cursor: pointer;
      }
    }

    @media (min-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      span {
        visibility: hidden;
      }
    }
   
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1rem;
    color: #c3c3c3;

    h3 {
      margin-bottom: 10px;

    }
    @media (max-width: 768px) {
      h3 {
        margin-bottom: 3.5rem;
      }
    }
    
    
    input, button {
      height: 3rem;
      font-size: 1.1rem;
      background-color: var(--white);
      color: black;
    }

    button {
      width: 100%;
      margin-top: 2rem;
      transition: all 0.25s;
      border: 0;

      color: var(--white);
      background-color: var(--purple);

      &:hover {
        background-color: ${props => shade(0.25, props.theme.colors.purple)};
      }
    }
    
    textarea {
      font-size: 1.1rem;
      min-height: 150px;
      max-height: 200px;
    }

    input, textarea {
      border-radius: 0.rem;
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