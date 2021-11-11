import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 2px;

  @media (max-width: 1070px) {
    margin: 10px 20px;
  }

  @media (max-width: 1024px) {
    margin: 10px 50px;
  }
`;

