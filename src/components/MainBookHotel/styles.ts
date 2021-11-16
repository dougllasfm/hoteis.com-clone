import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1140px;
  padding: 16px 54px;
  margin: 5px auto;

  @media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 400px) {
    margin: 0 40px;
  }

  @media (max-width: 360px) {
    margin: 0 100px;
  }

`;

export const Slides = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  img {
    width: 55vw;
    height: 420px;
    border-radius: 4px;
  }

  .others-images {
    margin-top: 6px;
    > img {
      width: 18vw;
      height: 180px;
    }

    > img + img {
      margin-left: 6px;
    }
  }

  @media (max-width: 1010px) {
    img {
      width: 89vw;
    }

    .others-images {
      margin: 6px 0;
      > img {
        width: 29.3vw;
      }
    }
  }

  @media (max-width: 768px) {
    img {
      width: 85vw;
    }

    .others-images {
      margin: 6px 0;
      > img {
        width: 27.3vw;
      }
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