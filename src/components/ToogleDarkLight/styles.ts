import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 1;
  bottom: 0;
  right: 0;
  left: 1;
  background: none;
  margin: 3rem;
  z-index: 100;
  width: 40px;
  height: 40px;

  button {
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    padding: 10px;
    background-color: ${props => props.theme.colors.primary};

    &:hover {
      transition: all 0.25s;
      background-color: ${props => props.theme.colors.secondary};
    }
  }

  svg {
    color: red;
  }
`;
