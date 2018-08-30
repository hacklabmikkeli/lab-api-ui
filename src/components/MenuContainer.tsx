import * as React from "react";
import { Link } from "react-router-dom";
import strings from "../localization/strings";
import { KeycloakInstance } from "keycloak-js";
import {
  Container,
  Image,
  Menu,
  Dropdown
} from "semantic-ui-react"

export interface Props {
  siteName: string,
  siteLogo: string,
  authenticated: boolean,
  keycloak?: KeycloakInstance | null,
  onLogout?: () => void
}

class MenuContainer extends React.Component<Props, object> {

  onAccountItemClick = () =>  {
    if (this.props.keycloak) {
      window.location.href = this.props.keycloak.createAccountUrl();
    }
  }

  onLogoutItemClick = () => {
    if (this.props.keycloak) {
      this.props.keycloak.logout();
    }
    this.props.onLogout && this.props.onLogout();
  }

  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="div" header>
            <Link to="/">
              <Image inline size="mini" src={this.props.siteLogo} style={{ marginRight: "1.5em" }} />
              <span>{this.props.siteName}</span>
            </Link>
          </Menu.Item>
          { this.props.authenticated &&
            <Menu.Menu position="right">
              <Dropdown  item simple text={strings.menuBarUserItemText}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.onAccountItemClick}>{strings.menuBarManageAccountText}</Dropdown.Item>
                  <Dropdown.Item onClick={this.onLogoutItemClick}>{strings.menuBarLogoutText}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          }
        </Container>
      </Menu>
    );
  }
}

export default MenuContainer;