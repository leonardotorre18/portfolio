import React from 'react';
import { LangContext } from '../Providers/LangProvider';
import FlagUSA from '../../assets/flag_usa.svg';
import FlagSPA from '../../assets/flag_spain.svg';

export default function ButtonLang() {
  const {actions} = React.useContext(LangContext)
  return (
    <div className="gap-2 flex">
      <button 
        className=" h-4"
        onClick={actions.changeLangEs}
      >
        <img className="h-full" src={FlagSPA} />
      </button>
      <button 
        className=" h-4"
        onClick={actions.changeLangEn}
      >
        <img className="h-full" src={FlagUSA} />
      </button>
    </div>
  )
}
