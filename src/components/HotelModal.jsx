import React from 'react';
import { FaStar } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@nextui-org/react";
import { useTranslation } from "react-i18next"
import {Image} from "@nextui-org/react";


export const HotelModal = (rentals) => {

  const { title, images, price, description, id } = rentals
	const [t, i18n] = useTranslation("global")


  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div>
				<a onClick={onOpen} className="cursor-pointer border-b-2 border-[#ff5a60]  text-[#ff5a60] text-end absolute bottom-0 left-0">Ver Detalles</a>
			</div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="font-bold text-lg text-[2rem]">{title}</h1>
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center mb-6 mt-7 justify-center">
                  <Image  isZoomed src={images} className="w-[35rem] h-[20rem] rounded-md sm:max-h-[11.5rem] md:max-h-full cursor-pointer" />
                </div>
                <div className='cursor-default'>
                <h2 className="font-bold text-base text-[1.2rem]">{description}</h2>
                <p>	{t("translation.rentalEl1")} {price}</p>
                <div className="flex items-center space-x-1 text-[#ff5a60]">
                  {/* right */}
                  <FaStar />
                  <p>5.0</p>
                </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" variant="light" onPress={onClose}>
                  Renter
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
