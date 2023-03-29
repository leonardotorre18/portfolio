import React from 'react';
import { IntlProvider } from "react-intl";
import useLangHandler from '../hooks/useLangHandler';
import messageEs from "../lang/en.json";

export const LangContext = React.createContext({})

export default function LangProvider(
  { children }:
  { children: React.ReactNode })
{

  const [state, actions] = useLangHandler()

  return (
    <LangContext.Provider value={state}>
      <IntlProvider locale={state.locale} messages={state.messages}>
        <button onClick={actions.changeLangEs}>Español</button>
        <button onClick={actions.changeLangEn}>Ingles</button>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  )
}
