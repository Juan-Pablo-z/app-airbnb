import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiHeartDuotone } from "react-icons/pi";
import { useTranslation } from "react-i18next"
import { TbWorld } from "react-icons/tb";


export const Footer = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <footer className='bg-white border-t-2 shadow-md shadow-gray-300 sticky bottom-0 h-12 w-full flex items-center  justify-between'>
      <div className='hidden lg:flex  text-gray-600'>
        {/* left */}
        <p className='pl-10'>© 2023 Airbnb, Inc.</p>
        <ul className='flex list-disc ml-5'>
          <li className='ml-5 mr-1'>{t("translation.footerElemt1")}</li>
          <li className='ml-5 mr-1'>{t("translation.footerElemt2")}</li>
          <li className='ml-5 mr-1'>{t("translation.footerElemt3")}</li>
          <li className='ml-5 mr-1'>{t("translation.footerElemt4")}</li>
        </ul>
      </div>
      <div className='hidden lg:flex items-center space-x-1    '>
        {/* right */}
        <button className='flex p-4'>
          <TbWorld className='my-auto text-[20px]' />  {t("translation.language")}
        </button>
        <button className='p-4'>
          $ USD
        </button>
        <p className='p-4 pr-10'>
          {t("translation.footerElemt5")}
        </p>
      </div>
      <div className='lg:hidden flex mx-auto gap-10 text-[25px] text-[#ff5a60]'>
        <button>
          <FaAirbnb className=' ' />

        </button>
        <button>
          <FaSearch className='' />

        </button>
        <button>
          <PiHeartDuotone className='' />

        </button>
      </div>
    </footer>
  )
}


