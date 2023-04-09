import React from "react"
import { LangContext } from "../Providers/LangProvider"

export default function useValidateLang(config: {
  es: any,
  en: any,
}) {
  const validate = () => {
    const locale:string = context.state.locale

    return locale === 'es' ?
    config.es :
    locale === 'en' ? 
    config.en :
    null
  }
  const context = React.useContext(LangContext)
  const [currentValue, setCurrentValue] = React.useState(validate());


  React.useEffect(() => setCurrentValue(validate()), [context])

  return currentValue
}