import React from 'react'
import { useTranslation } from "react-i18next"


export const Buttom = ({title, region}) => {
    const [t, i18n] = useTranslation("global")

    return (
        <div>
            <button onClick={() => i18n.changeLanguage("es")} className="m-6 rounded-[18px] p-3 pr-10 hover:bg-gray-100">
                <div>
                    {title }
                </div>
                <div>
                    {region }
                </div>


            </button>
        </div>
    )
}
