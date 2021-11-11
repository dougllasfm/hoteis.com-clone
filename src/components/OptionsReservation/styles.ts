import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 14px auto;

  padding-bottom: 80px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-right: 15px;

  img {
    border-radius: 4px;
  }

  span {
    margin-top: 8px;
    color: var(--black);
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  section:nth-child(1) {
    color: var(--black);
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    border-top: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
  }

  section:nth-child(2) {
    border: 1px solid #dbdbdb;
  }
  section {
    display: flex;;
    justify-content: space-between;
    padding: 12px 8px;

    div {
      display: flex;
      flex-direction: column;
      ul, li {
        margin: 5px 0 0 10px;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
      }
    }

    .informations {
      span {
        color: var(--black);
        font-size: 12px;
        line-height: 14px;
        font-weight: 400;
      }
      ul, li {
        color: var(--green-2);
        font-weight: 400;
      }  
    }

    .confirmation {
      display: flex;
      align-items: flex-end;

      span {
        color: var(--black);
        font-weight: 400;
        font-size: 11px;
        line-height: 14px;
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
    }
  }

`