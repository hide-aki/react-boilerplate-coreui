import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import messages from './messages';

// inverse
const HeaderNavbar = (color, active, isOpen) => {
  const result = (
    <Navbar color={color} light expand="md">
      <NavbarBrand>reactstrap</NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              <FormattedMessage {...messages.home} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/rsdemo">
              <FormattedMessage {...messages.rsdemo} />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/features">
              <FormattedMessage {...messages.features} />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
  return result;
};

export default HeaderNavbar;
