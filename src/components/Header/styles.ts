import styled from 'styled-components';


export const Container = styled.header`
  background: ${props => props.theme.colors.secondary};
  position: relative;

  .active {
    button {
      background-color: var(--purple);
      color: #fff;
    }
  }
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
  height: 12vh;
  display: flex;
  align-items: center;

  span {
    height: 100%;
    color: var(--white);
    display: flex;
    align-items: center;
  }
`;

export const Languages = styled.div`
  text-align: center;

  img {
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }

    &:last-child {
      margin-left: 0px;
    }
  }
  @media (max-width: 700px) {
    margin-top: 1rem;
  }


`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: start;

  @media (max-width: 700px) {
    justify-content: space-around;
  }

  button {
    font-size: 1rem;
    margin-left: 1rem;
    color: var(--white);
    background: var(--secondary);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2.5rem;
    transition: filter 0.2s;

    @media (max-width: 768px) {
      &:first-child {
        margin-left: 0rem;
      }
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
