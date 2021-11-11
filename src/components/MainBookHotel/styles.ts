import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: 24px auto;
`;

export const Slides = styled.div`
  display: flex;
  flex-direction: column;
  width: 760px;

  img {
    border-radius: 4px;
  }

  .others-images {
    margin-top: 6px;
    > img + img {
      margin-left: 6px;
    }
  }
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  margin-left: 15px;

  div + div {
    margin-bottom: 6px;
  }

  .avaliation {
    display: flex;
    align-items: flex-start;
    margin-bottom: 6px;
    > span {
      background: var(--green-2);
      color: #fff;
      font-weight: bold;
      padding: 4px 6px;
      border-top-right-radius: 15px;
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      > span {
        font-weight: bold;
      }
      > p {
        font-size: 13px;
      }
    }
  }

  .comments {
    margin-top: 8px;
    padding-bottom: 12px;
    border-bottom: 1px solid #dbdbdb;
    
    span {
      font-size: 15px;
      font-weight: 500;
    }

    p {
      margin-top: 3px;
      font-size: 11px;
      color: var(--gray);
    }
  }
`