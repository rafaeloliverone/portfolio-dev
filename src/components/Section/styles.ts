import styled from 'styled-components';

export const Container = styled.div`
  background: var(--green);
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

  img {
    filter: grayscale(100%) !important;

    &:hover {
      filter: grayscale(0%) brightness(100%)!important;
      cursor: pointer;
    }
  }
`