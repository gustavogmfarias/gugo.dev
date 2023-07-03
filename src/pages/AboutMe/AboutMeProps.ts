export interface LanguageProps {
  en: string;
  es: string;
  pt: string;
}

interface NestedLanguageProps {
  label: LanguageProps;
  data: LanguageProps | string;
}

interface PhoneProps {
  label: LanguageProps;
  data: {
    country: string;
    countryCode: string;
    stateCode: string;
    phoneNumber: string;
  };
}

interface StateProps {
  label: LanguageProps;
  data: {
    name: NestedLanguageProps;
    acronym: NestedLanguageProps;
  };
}

interface AddressProps {
  label: LanguageProps;
  data: {
    street: NestedLanguageProps;
    houseNumber: NestedLanguageProps;
    city: NestedLanguageProps;
    state: StateProps;
    country: NestedLanguageProps;
  };
}

interface ChildrenProps {
  label: LanguageProps;
  data: {
    name: string;
    dateOfBirth: string;
  }[];
}

export interface AboutMeContent {
  nameOfSection: LanguageProps;
  intro: LanguageProps;
  name: NestedLanguageProps;
  birthDate: NestedLanguageProps;
  phone: PhoneProps;
  nationality: NestedLanguageProps;
  address: AddressProps;
  birthPlace: NestedLanguageProps;
  maritalStatus: NestedLanguageProps;
  children: ChildrenProps;
  interests: {
    label: LanguageProps;
    data: {
      en: string[];
      es: string[];
      pt: string[];
    };
  };
}
