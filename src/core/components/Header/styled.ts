import styled from 'styled-components';

export const HeaderNav = styled.nav`
  height: 50px;
  background-color: gray;
`;

export const HeaderUl = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

export const HeaderLi = styled.li`
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LinkStyle = {
  color: 'white',
  textDecoration: 'none',
};
