import React from 'react'
import i18n from '../../i18next'
import {Link} from 'react-router-dom'
export default function ChangeLanguage() {

    function handleLanguage(event){
        
     try {
         i18n.changeLanguage(event)
     } catch (error) {
         console.log(error)
     }
    }
    return (
        <div className="d-flex">
            <Link to="#" className="mr-2 text-light" onClick={()=>handleLanguage('en')}>EN</Link>
            <Link to="#" className="mr-2 text-light" onClick={()=>handleLanguage('de')}>DE</Link>
            <Link to="#" className="mr-2 text-light" onClick={()=>handleLanguage('fr')}>FR</Link>
        </div>
    )
}
