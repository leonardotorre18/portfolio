import React from 'react';
import { IntlProvider } from "react-intl";
import useLangHandler from '../hooks/useLangHandler';

export const LangContext = React.createContext<any>(null)

export default function LangProvider(
  { children }:
  { children: React.ReactNode })
{

  const [state, actions] = useLangHandler()

  return (
    <LangContext.Provider value={{state, actions}}>
      <IntlProvider locale={state.locale} messages={state.messages}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}
