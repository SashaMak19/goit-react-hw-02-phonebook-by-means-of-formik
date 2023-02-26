import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const Button = styled.button`
  &:hover {
    background-color: rgb(179, 179, 219);
  }
`;

export { List, Item, Button };
