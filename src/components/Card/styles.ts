import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  img {
    border-radius: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-left: 8px;
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
    .note {
      background: var(--green-2);
      color: #fff;
      margin-right: 3px;
      padding: 2px 3px;
    }
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
  
`
