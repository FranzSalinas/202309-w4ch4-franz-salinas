import { createContext } from 'react';

export type PhoneContext = {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
};

const initialContext = {} as PhoneContext;

export const ThePhoneContext = createContext<PhoneContext>(initialContext);
