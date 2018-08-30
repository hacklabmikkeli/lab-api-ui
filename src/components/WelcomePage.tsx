import * as React from "react";
import BasicLayout from "./BasicLayout";
import strings from "../localization/strings";
import * as Keycloak from 'keycloak-js';

import { 
  Header,
  Button,
  Divider,
  Grid
} from "semantic-ui-react";

export interface Props {
  authenticated: boolean,
  onLogin?: (keycloak: Keycloak.KeycloakInstance, authenticated: boolean) => void
}

class WelcomePage extends React.Component<Props, any> {

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: "login-required"}).success((authenticated) => {
      this.props.onLogin && this.props.onLogin(keycloak, authenticated);
    });
  }

  render() {
    return (
      <BasicLayout>
        { !this.props.authenticated ? (
        <div>
          <Header textAlign="center" size='medium'>{strings.welcomeTitle}</Header>
          <p style={{textAlign: "center"}}>{strings.welcomeDescriptionText}</p>
          <Grid centered>
            <Button style={{marginBottom: "15px", marginTop: "15px"}} primary>{strings.welcomeRegisterButtonText}</Button>
          </Grid>
          <Divider />
          <p style={{textAlign: "center"}}>{strings.welcomeIfAlreadyMember}</p>
          <Grid centered>
            <Button style={{marginTop: "15px"}} secondary>{strings.welcomeLoginButtonText}</Button>
          </Grid>
        </div>
        ) : (
          <Header textAlign="center" size="medium">Logged in!!!</Header>
        )}
      </BasicLayout>
    );
  }
}

export default WelcomePage;