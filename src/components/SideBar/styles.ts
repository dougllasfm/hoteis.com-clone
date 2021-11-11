import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  section + section {
    margin-top: 15px;
    border-top: 1px solid #dbdbdb;

    h2 {
      margin-top: 15px;
    }
  }

  .search {
    margin-top: 8px;
    width: 280px;
    max-width: 280px;
    padding: 14px 10px;
    border: 1px solid #808080;
    border-radius: 5px;
    outline: none;

    &:focus {
      outline: 1px solid var(--blue-3);
    }
  }

  .input-checkbox {
    display: flex;
    flex-direction: column;
    > h2 {
      margin-bottom: 15px;
    }

    > label {
      font-size: 14px;
      margin: 8px 0;
      font-weight: 400;
      > input {
        margin-right: 12px;
      }
      
    }
  }

  .stars {
    > ul {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      list-style: none;
      > li {
        margin: 0 3px;
        > button {
          padding: 7px 18px;
          border: 1px solid #e6e6e6;
          color: var(--blue-3);
          font-weight: bold;
          border-radius: 15px;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
