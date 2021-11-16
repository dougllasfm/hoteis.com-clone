import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;  

  .feed {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 2px;
  }

  @media (max-width: 1070px) {
    margin: 10px 20px;
  }

  @media (max-width: 1024px) {
    margin: 10px 50px;
  }

  @media (max-width: 595px) {
    margin: 10px auto;
  }

  @media (max-width: 520px) {
    margin: 10px auto;
  }

  
  @media (max-width: 400px) {
    .feed {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: 1;
    }
  }
`;

