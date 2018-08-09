/**
 *
 * AppHeaderBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavbarToggler, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class AppHeaderBar extends React.Component {
  render() {
    const { toggleNavbar } = this.props;
    return (
      <div className="app-header navbar">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              {/* <Glyphicon glyph="bell" /> */}
              <FontAwesomeIcon icon={faBell} size="2x" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
        </Nav>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

AppHeaderBar.propTypes = {
  toggleNavbar: PropTypes.func,
};

export default AppHeaderBar;
