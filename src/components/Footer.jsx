import React from 'react'
import { FaAirbnb } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { PiHeartDuotone } from "react-icons/pi";
import { useTranslation } from "react-i18next"
import ModalWord from './Modal';


export const Footer = () => {

  const [t, i18n] = useTranslation("global")

  return (
    <footer className='bg-white border-t-2 shadow-md shadow-gray-300 sticky bottom-0 h-12 w-full flex items-center  justify-between'>
      <div className='hidden lg:flex  text-gray-600'>
        {/* left */}
        <p className='pl-10'><a href="#">© 2024 Airbnb, Inc.</a></p>
        <ul className='flex list-disc ml-5'>
          <li className='ml-5 mr-1'><a href="#">{t("translation.footerElemt1")}</a></li>
          <li className='ml-5 mr-1'><a href="#">{t("translation.footerElemt2")}</a></li>
          <li className='ml-5 mr-1'><a href="#">{t("translation.footerElemt3")}</a></li>
          <li className='ml-5 mr-1'><a href="#">{t("translation.footerElemt4")}</a></li>
        </ul>
      </div>
      <div className='hidden lg:flex items-center space-x-1    '>
        {/* right */}

        <div className='flex justify-center'>
          <ModalWord  />
        <button>
          <p>
            {t("translation.language")}
          </p>
        </button>
        </div>

        <button className='p-4'>
          $ USD
        </button>

          <a href="#">
        <p className='p-4 pr-10'>
          {t("translation.footerElemt5")}
        </p>
          </a>
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


