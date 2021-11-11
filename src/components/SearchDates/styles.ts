import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;

  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;
  
  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1024px;

    .name {
      width: 40%;
    }

    .reserve {
      width: 40%;
    }

    input {
      padding: 4px 10px;
      height: 42px;
      border: 1px solid #dbdbdb;
      border-radius: 3px;
      outline: none;
      width: 20%;

      &:focus {
        outline: 2px solid var(--blue-3);
      }
    }

    input + input {
      margin-left: 10px;
    }

    button {
      margin-left: 10px;
      background: var(--blue-3);
      color: #fff;
      border-radius: 18px;
      padding: 9px 14px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  
  @media (max-width: 990px) {
    width: 100%;
    margin: 10px 20px;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 10px 50px;
  }

  @media (max-width: 800px) {
    width: 88%;
    margin: 10px 50px;
  }
`;
