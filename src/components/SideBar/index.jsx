import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import Navigation from '../Navigation';

import './style.css';

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <aside className="navbar-menu">
          <FaIcons.FaBars onClick={showSidebar} className="icon-navbar" />
        </aside>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <SideBarStyle>
          <Navigation />
        </SideBarStyle>
      </nav>
    </>
  );
}

const SideBarStyle = styled.div`
  background-color: var(--background-dark-color);
  color: var(--background-light-color);
  height: 100vh;
  width: 16.3rem;
  z-index: 2;
`;

export default SideBar;
