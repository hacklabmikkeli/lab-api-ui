import WelcomePage from "../components/WelcomePage";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { KeycloakInstance } from "keycloak-js";

export function mapStateToProps(state: StoreState) {
  return {
    authenticated: state.authenticated,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.LoginAction>) {
  return {
    onLogin: (keycloak: KeycloakInstance, authenticated: boolean) => dispatch(actions.userLogin(keycloak, authenticated))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);