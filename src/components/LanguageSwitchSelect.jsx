import {useState, useEffect} from 'react';
const LanguageSwitchSelect = ({selectedLanguage, languageSelection}) => {
  return (
    <select value={selectedLanguage} onChange={(e) => {languageSelection(e.target.value)}} className="bg-[#000000] border-none text-white text-[16px] rounded-lg hover:bg-[#00ce1174] px-2 py-1 mr-10">
        <option value="en">🇬🇧ENG</option>
        <option value="fr">🇫🇷FRA</option>
        <option value="es">🇲🇽ESP</option>
    </select>
  )
}

export default LanguageSwitchSelect