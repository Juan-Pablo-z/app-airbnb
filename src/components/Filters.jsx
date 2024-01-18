import React from 'react'
import { Filter } from "./Filter"
import { IoKeyOutline, IoBoatOutline } from "react-icons/io5";
import { LiaMountainSolid } from "react-icons/lia";
import { GoFlame } from "react-icons/go";
import { LuTreePine } from "react-icons/lu";
import { useTranslation } from "react-i18next"
import ModalFilter from './ModalFilter';
import SwitchFilter from './Switch';


export const Filters = () => {
  const [t, i18n] = useTranslation("global")

  const sorting = [
    { title: "translation.filter1", icon: <IoBoatOutline /> },
    { title: "translation.filter2", icon: <IoKeyOutline /> },
    { title: "translation.filter3", icon: <LiaMountainSolid /> },
    { title: "translation.filter4", icon: <GoFlame /> },
    { title: "translation.filter5", icon: <LuTreePine /> }

  ]


  return (
    <div className='sticky bg-white flex items-center justify-between'>
      {/* justify-star */}
      <div className='flex gap-3 sm:gap-4 mt-4 px-3'>
        {sorting.map((object,index) => (
          <Filter key={index} title={t(object.title)} icon={object.icon} />
        ))}
      </div>
      <div>
        <ModalFilter/>
      </div>
      <div>
          <SwitchFilter/>
      </div>
    </div>
  )
}

