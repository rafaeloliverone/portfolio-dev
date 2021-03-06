import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  width: 100%;
  height: 20vh;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  span {
    color: ${props => props.theme.colors.ternary};
  }

  h3 {
    color: var(--purple);
  }

  img {
    filter: grayscale(100%) !important;

    &:hover {
      filter: grayscale(0%) brightness(100%)!important;
      cursor: pointer;
    }
  }
`