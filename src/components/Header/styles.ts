import styled from 'styled-components';


export const Container = styled.header`
  background: var(--grey);

  .active {
    button {
      background-color: blue;
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
  justify-content: space-between;

  span {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1100px) {
    justify-content: flex-end;
  }

  button {
    font-size: 1rem;
    margin-left: 1rem;
    color: #FFF;
    background: var(--background);
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
