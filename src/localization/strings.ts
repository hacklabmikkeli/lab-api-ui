import LocalizedStrings, { 
  LocalizedStringsMethods
} from 'localized-strings';

export interface IStrings extends LocalizedStringsMethods {
  menuBarUserItemText: string,
  menuBarManageAccountText: string,
  menuBarLogoutText: string,
  welcomeTitle: string,
  welcomeDescriptionText: string,
  welcomeRegisterButtonText: string,
  welcomeIfAlreadyMember: string,
  welcomeLoginButtonText: string
}

const strings: IStrings = new LocalizedStrings({
  en: require("./en.json")
});

export default strings;