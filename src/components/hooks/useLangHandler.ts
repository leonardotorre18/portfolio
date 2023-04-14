import React from 'react'
import useStorage from './useStorage';
import messageEs from '../lang/es.json'
import messageEn from '../lang/en.json'


export default function useLangHandler() {
  
  const [langLocale, setLangLocale] = useStorage('lang', 'es');
  
  const returnMessages = () => {
    if (langLocale == 'es') return messageEs
    else if(langLocale == 'en') return messageEn
  }
  
  const changeLangEs = (): void => {
    setLangLocale('es')
  }
  const changeLangEn = (): void => {
    setLangLocale('en')
  }
  
  return [
    {
      locale: langLocale,
      messages: returnMessages()
    }, {
      changeLangEs,
      changeLangEn
    }
  ]
}