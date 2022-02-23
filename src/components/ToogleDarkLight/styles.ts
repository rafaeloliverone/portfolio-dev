import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 1;
  right: 0;
  bottom: 0;
  left: 10;
  height: 80px;
  width: 80px;
  margin: 1rem;
  margin-bottom: 2rem;
  z-index: 100;

  button {
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    padding: 10px;
    background-color: ${props => props.theme.colors.mode};

    &:hover {
      transition: all 0.25s;
      background-color: ${props => props.theme.colors.ternary};
    }
  }
`;
