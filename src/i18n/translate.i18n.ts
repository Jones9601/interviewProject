import EN from './en.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

class Translate {
  public init(resources: any) {
    i18n.use(initReactI18next).init({
      resources: resources,
      lng: 'en',
      debug: false,
      fallbackLng: 'en',
      compatibilityJSON: 'v3',
    });
  }
}
const translate = new Translate();
export {EN, translate};
export default i18n;
