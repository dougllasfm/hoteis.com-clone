import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  height: 56px;

  border-bottom: 1px solid #dbdbdb;  
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  padding: 16px 54px;
  margin: 0 auto;

  a {
    text-decoration: none;
    > h1 {
      color: var(--red);
      font-weight: 500;
      font-size: 18px;
    }
  }

  @media (max-width: 1024px) {
    padding: 16px auto;
  }

  @media (max-width: 950px) {
    padding-left: 45px;
  }

  @media (max-width: 595px) {
    padding: 16px 10px;
  }

  @media (max-width: 400px) {
    margin: 0 80px;
  }

  @media (max-width: 360px) {
    margin: 0 160px;
  }
`

export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  
  > li {
    font-weight: 500;
    font-size: 14px;
    margin-left: 10px;
    color: var(--red);
  }
`
