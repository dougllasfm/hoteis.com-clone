import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px 0;

  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 115px;

    .name {
      width: 420px;
    }

    .reserve {
      width: 240px;
    }

    input {
      padding: 4px 10px;
      height: 42px;
      border: 1px solid #dbdbdb;
      border-radius: 3px;
      outline: none;

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
  
  
`;
