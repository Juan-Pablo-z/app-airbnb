import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import PositionedMenu from "./Menu";
import ModalWord from "./Modal";


export const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [t, i18n] = useTranslation("global")

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="border-b sticky z-50 top-0 bg-white">
			<div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-10">
				{/* Left */}
				<a href="">
				<div className="h-20 flex ">
					<img src={logo} className="object-cover -my-10 " />
				</div>
				</a>
				{/* Middle */}
				<div className="hidden md:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
					<input
						type="search"
						placeholder=""
						className="p-2.5 w-[20rem] rounded-full outline-0 "
					/>
					<div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
						<button className="w-full">{t("translation.input1")}</button>
						<button className="border-l border-x px-6">{t("translation.input2")}</button>
						<button className="w-full text-gray-600/60 pl-2">
							{t("translation.input3")}
						</button>
					</div>
					<div>
					<button className="bg-[#ff5a60] p-2 rounded-full mr-2 hover:bg-[#9e406c]">
						<FaSearch className="text-white w-full" />
					</button>
					</div>
				</div>
				{/* Right */}
				<div className="flex items-center pr-3 font-semibold text-gray-600">
					<button className="text-[17px] rounded-full p-2 hover:bg-gray-100">
						{t("translation.elementNav")}
					</button>

					<ModalWord/>
					
					<PositionedMenu/>
				</div>
			</div>
		</div>
		
	);
};
