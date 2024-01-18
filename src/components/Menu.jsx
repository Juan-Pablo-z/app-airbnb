import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { FiMenu } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

export default function FadeMenu() {
	const [t, i18n] = useTranslation("global")
    
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                    variant="bordered"
                    className="border px-4 py-2 rounded-full gap-3 hover:shadow-md ml-1 "
                >
                    <div className=''>
                        <FiMenu className="text-[19px] " />
                    </div>
                    <div className=''>
                        <FaRegUserCircle className="text-[30px]" />
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">{t("translation.menuEle1")}</DropdownItem>
                <DropdownItem key="copy">{t("translation.menuEle2")}</DropdownItem>
                <DropdownItem key="edit">{t("translation.menuEle3")}</DropdownItem>
                <DropdownItem key="edit">{t("translation.menuEle4")}</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                {t("translation.menuEle5")}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
