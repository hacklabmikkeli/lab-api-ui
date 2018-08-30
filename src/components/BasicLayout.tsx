import * as React from "react";

import 'semantic-ui-css/semantic.min.css';

import { Container } from "semantic-ui-react";
import AlienLogo from "../gfx/alien_pink.svg";
import MenuContainer from "./MenuContainer";
import FooterContainer from "./FooterContainer";

class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <MenuContainer siteName="Hacklab Mikkeli" siteLogo={AlienLogo}/>
        <Container text style={{ marginTop: "7em" }}>
          {this.props.children}
        </Container>
        <FooterContainer />
      </div>
    );
  }
}

export default BasicLayout;