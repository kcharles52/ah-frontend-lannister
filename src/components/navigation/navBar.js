import React from "react";
import "../../assets/css/navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
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
        <Navbar light expand="md" id="mynav">
          <NavbarBrand href="/view-articles" id="navbar-brand">AUTHORS HAVEN</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Finance
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Lifestyle
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Travel
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Biology
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Health
                  </a>
                </li>
                <li className="nav-item active ">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Sports
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Movies
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Music
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Science
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Tech
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    Education
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles" id="navv-link">
                    More
                  </a>
                </li>
                <li className="">
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="navbar">
                      <img
                        id="profile"
                        src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                        alt="user"
                      />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="/profile/admin">Profile</DropdownItem>
                      <DropdownItem href="/create-article">
                        Create Article
                      </DropdownItem>
                      <DropdownItem href="/view-articles">
                        View Articles
                      </DropdownItem>
                      <DropdownItem href="/me/stories">My stories</DropdownItem>
                      <DropdownItem href="/">BookMarks</DropdownItem>
                      <DropdownItem href="/">Stats</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Log out</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/view-articles">
                  </a>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
