import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@nextui-org/react";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next"
import { Buttom } from "./Buttom";



export default function ModalWord() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();



  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  const [t, i18n] = useTranslation("global")

  const sorting = [
		{ title: "translation.language2", region: "translation.country2" },
		{ title: "translation.language2", region: "translation.country3" },
		{ title: "translation.language2", region: "translation.country1" },
		{ title: "translation.language2", region: "translation.country4" },
		{ title: "translation.language2", region: "translation.country5" },
		{ title: "translation.language2", region: "translation.country6" },
		{ title: "translation.language2", region: "translation.country7" },
		{ title: "translation.language2", region: "translation.country8" },
		{ title: "translation.language2", region: "translation.country9" },
		{ title: "translation.language2", region: "translation.country10" },
		{ title: "translation.language2", region: "translation.country11" },
		{ title: "translation.language2", region: "translation.country12" },
		{ title: "translation.language2", region: "translation.country13" },
		{ title: "translation.language2", region: "translation.country14" },
		{ title: "translation.language2", region: "translation.country15" },
		{ title: "translation.language2", region: "translation.country16" },
		{ title: "translation.language2", region: "translation.country17" },
		{ title: "translation.language2", region: "translation.country18" },
		{ title: "translation.language2", region: "translation.country19" },

	]

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full p-3 hover:bg-gray-100" onClick={onOpen}>
          <TbWorld className="text-[20px]  " />
        </button>
      </div>
      <Modal 
        size="5xl"
        scrollBehavior="outside"
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="border-b ">
                  <Button className="rounded-full p-3 hover:bg-gray-100">
                    {t("translation.modalElemt1")}
                  </Button>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="ml-3">
                  <h1 className="text-[20px]  font-semibold pt-4">{t("translation.modalElemt3")}</h1>

                  <button className="m-6 rounded-[18px] p-3 pr-10 hover:bg-gray-100">
                    {t("translation.language")}
                  </button>
                </div>
                <div className="ml-3">
                  <h1 className="text-[20px]  font-semibold pt-4">{t("translation.modalElemt4")}</h1>
                  <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sorting.map((object, index) => (
                      <Buttom title={t(object.title)} key={index} region={t(object.region)} />
                    ))}
                    <button onClick={() => i18n.changeLanguage("en")} className="m-6 rounded-[18px] p-3 pr-10 hover:bg-gray-100">
                      <div>
                        {t("translation.language1")}
                      </div>
                      <div>
                        {t("translation.country10")}
                      </div>
                    </button>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
