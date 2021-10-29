import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import avatar from '../../img/avatar.jpg';
// import PropTypes from 'prop-types';

export class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <NavigatorStyled>
        <div className="avatar">
          <img src={avatar} alt="Profile" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active-class">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active-class">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portifolios" activeClassName="active-class">Portifolios</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 My Portifolio</p>
        </footer>
      </NavigatorStyled>
    );
  }
}

const NavigatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  align-items: center;
  border-right: 1px solid var(--border-color);

  .avatar {
    margin-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 2px solid var(--border-color);
    
    img {
      width: 80%;
      margin: 0 10%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    };
    @media screen and (max-height: 700px) {
      width: 60%;
    }
  };
  
  .nav-items {
    display: flex;
    flex-direction: column;
    width: 100%;

    .active-class {
      background-color: var(--primary-color-dark);
      color: var(--light-primary)
    }

    li {
      text-align: center;
      padding: .1rem 0;

      a {
        padding: .2rem 0;
        display: block;
        font-family: inherit;
        color: var(--primary-color);
        
        &:hover {
          cursor: pointer;
          background-color: var(--primary-color-dark);
        }
        &:active {
          background-color: var(--primary-color-dark);
        }
      };
    };
  };

  footer {
   margin-bottom: 0.5rem;
    p {
      font-size: 1rem;
      color: rgba(255, 255, 255,0.5);
    };
  };
`;

export default index;
