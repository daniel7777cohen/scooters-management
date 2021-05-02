import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Tab from './Tab';

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #c1c1c1;
  justify-content: center;
  align-items: center;
`;

const TabsData = [
  { id: '0', title: 'Scooters', path: '/scooters' },
  { id: '1', title: 'Users', path: '/users' },
  { id: '2', title: 'Parking', path: '/parking' },
  { id: '3', title: 'Errors', path: '/errors' },
];

const TabsManager = () => {
  const history = useHistory();

  const [currentTab, setCurrentTab] = useState('0');

  useEffect(() => {
    const currentPath = history.location.pathname.split('/');
    if (currentPath[1]) {
      const currentTabData = TabsData.find(
        (tab) => tab.path === `/${currentPath[1]}`
      );
      setCurrentTab(currentTabData.id);
    }
  }, [history]);
  return (
    <Nav>
      {TabsData.map(({ id, title, path }) => (
        <Tab
          key={id}
          title={title}
          setCurrentTab={setCurrentTab}
          isSelected={currentTab === id}
          id={id}
          path={path}
        />
      ))}
    </Nav>
  );
};

export default TabsManager;
