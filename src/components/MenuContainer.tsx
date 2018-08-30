import * as React from "react";
import {
  Container,
  Image,
  Menu
} from "semantic-ui-react"
import { Link } from 'react-router-dom';

export interface Props {
  siteName: string,
  siteLogo: string
}

class MenuContainer extends React.Component<Props, object> {

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
        </Container>
      </Menu>
    );
  }
}

export default MenuContainer;