import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  padding: 16px 54px;
  margin: 0 auto;

  @media (max-width: 535px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 400px) {
    margin: 0 40px;
  }

  @media (max-width: 360px) {
    margin: 0 100px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 28px;
    }
    
    > span {
      margin: 12px 0 0 10px ;
      font-size: 14px;
      font-weight: 500;
      color: var(--black);
    }
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
  }
`

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    font-size: 28px;
  }

  span {
    font-size: 12px;
    color: var(--gray);
  }

  strong {
    font-size: 11px;
    font-weight: 700;
  }

  button {
    margin-top: 8px;
    background: var(--blue-3);
    color: #fff;
    padding: 12px 22px;
    border-radius: 25px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 535px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
