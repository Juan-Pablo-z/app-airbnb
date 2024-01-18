import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { CgListTree } from "react-icons/cg";

export default function ModalFilter() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();



  const handleOpen = (size) => {
    setSize(size)
    onOpen();
  }

  const [t, i18n] = useTranslation("global")



  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button className="p-6 rounded-xl border-[1px] justify-between" variant="bordered" onClick={onOpen}>
            <CgListTree className="text-[20px]  " /> filtros 
        </Button>
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
                
              </ModalHeader>
              <ModalBody>
                
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