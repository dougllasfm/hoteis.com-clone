import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dbdbdb;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 90px;

  > h1 {
    color: var(--red);
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
