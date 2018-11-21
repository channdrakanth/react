import React from 'react';
import {Link, NavLink } from 'react-router-dom';
export const Header = () => {
    return (
      <div>
       <h1> Notes </h1>
      </div>
    );
  };

export const MenuItems = () => {
    return (
      <div>
        <NavLink to="/" activeClassName="is-active" exact> DashBoard </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Note </NavLink>
        <NavLink to="/reports" activeClassName="is-active"> Reports </NavLink>
      </div>
    );
  }

export const NotFoundPage = () => {
    return (
      <div>
        404!
        <Link to="/"> Go To Home </Link>
      </div>
    );
  };