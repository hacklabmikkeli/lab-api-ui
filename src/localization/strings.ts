import LocalizedStrings, { 
  LocalizedStringsMethods
} from 'localized-strings';

export interface IStrings extends LocalizedStringsMethods {
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