import styled from 'styled-components';

export const Container = styled.div`
  background:  ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Content = styled.section`
  max-width: 1120px;
  display: flex;
  justify-content: start;
  align-items:flex-start;
  margin-top: 1rem;
  height: 86%;

  @media (max-width: 768px) {
    /* margin-top: rem; */
  }

  div:last-child {
    margin-bottom: 0.5rem;
  }
`
export const LoadingSpinner = styled.div`
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 50vh;
  height: 70vh;
`

export const NameCompanies = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .active {
    transition: all 1s;
    color: ${props => props.theme.colors.ternary};
  }

  div {
    border-bottom: 2px solid ${props => props.theme.colors.progressBar};
  }

  button {
    border: none;
    color: ${props => props.theme.colors.quartenary} ;
    background: none !important;
    margin-right: 30px;
    padding: 10px 5px;
    position: relative;

    .active {
    transition: all 1s;
    color: ${props => props.theme.colors.ternary};
  }

    &:last-child {
      margin-right: 0;
    }
    
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      content: '';
      border-bottom: solid 3px var(--purple);  
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
    }

    &:hover:after { 
      transform: scaleX(1); 
      transform-origin:  0% 50%; 
    } 

  }
`;

export const ExperienceMargin = styled.div`
  margin-top: 1rem;
`
