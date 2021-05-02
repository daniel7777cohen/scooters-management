import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(Link)`
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
  height: 30px;
  color: ${({ $isSelected }) => ($isSelected ? 'blue' : 'black')};
  text-decoration: none;
  border-bottom: ${({ $isSelected }) =>
    $isSelected ? '1px solid blue' : 'none'};
`;


const Tab = ({ id, title, path, setCurrentTab, isSelected }) => {

  return (
    <NavItem
      to={path}
      $isSelected={isSelected}
      onClick={() => setCurrentTab(id)}
    >
      {title}
    </NavItem>
  );
};

export default Tab;
