import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1140px;
  padding: 16px 54px;
  margin: 5px auto;
  
  border-top: 1px solid #dbdbdb;
  padding-bottom: 20px;
  h1 {
    margin-top: 20px;
    font-size: 22px;
  }

  @media (max-width: 400px) {
    margin: 0 40px;
  }

  @media (max-width: 360px) {
    margin: 0 100px;
  }
`;

export const Description = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  div {
    margin-top: 10px;
    ul, li {
      font-size: 14px;
      font-weight: 400;
      margin-top: 5px;
      margin-left: 10px;
      color: var(--black);
    }
  }
`