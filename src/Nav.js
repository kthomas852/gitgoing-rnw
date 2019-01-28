import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/GitInit">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Login/SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/GitQuestion">Ask A-Clip</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Menu
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/GitInit">GitInit</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitClone">GitClone</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitStatus">GitStatus</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitPull">GitPull</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitAdd">GitAdd</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitStash">GitStash</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitCommit">GitCommit</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitReset">GitReset</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/GitPush">GitPush</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/GitQuestion">Ask Question</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}