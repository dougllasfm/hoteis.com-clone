import styled from 'styled-components';
import Span from '../Span'

export const Container = styled.div`
  display: flex;
  margin-top: 8px;
  padding-bottom: 8px;

  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 280px;
    height: 180px;
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      width: 100%;
      margin-bottom: 4px;
      height: 200px;
    }
  }

  

  
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;

  @media (max-width: 991px) {
    gap: 160px;
  }

  @media (max-width: 750px) {
    gap: 60px;
  }

  @media (max-width: 648px) {
    gap: 5px;
  }

  @media (max-width: 530px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 400px) {
    display: block;
  }

`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  > section + section {
    margin: 10px 0;
  }

  .title-hotel {
    span {
      font-size: 12px;
      color: var(--gray);
      font-weight: 400;
    }
  }

  .details-address {
    p {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: bold;
    }
    ul {
      > li {
        margin-left: 18px;
        font-size: 12px;
        color: var(--gray);
        font-weight: 400;
      }
    }
  }

  .avaliation {
    span {
      font-size: 14px;
      font-weight: bold;
    }
    p {
      margin-top: 5px;
      font-size: 12px;
      color: var(--gray);
    }

  }
`

export const Confirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 3px;
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

    > a {
      text-decoration: none;
      color: #fff;
    }
  }  
  
  @media (max-width: 400px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

`

export const EditSpan = styled(Span)`
  color: #fff;
  margin-right: 3px;
  padding: 2px 3px;
  border-top-right-radius: 10px;
`