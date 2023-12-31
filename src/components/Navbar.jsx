import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { TbWorld } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Modal } from "./Modal";
import { useTranslation } from "react-i18next"
import { Buttom } from "./Buttom";

export const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [t, i18n] = useTranslation("global")

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

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
		<div className="border-b sticky z-50 top-0 bg-white">
			<div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-10">
				{/* Left */}
				<div className="h-20 flex ">
					<img src={logo} className="object-cover -my-10 " />
				</div>
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
					<div className="bg-[#ff5a60] p-2 rounded-full mr-2">
						<FaSearch className="text-white w-full" />
					</div>
				</div>
				{/* Right */}
				<div className="flex items-center pr-3 font-semibold text-gray-600">
					<button className="text-[17px] rounded-full p-2 hover:bg-gray-100">
						{t("translation.elementNav")}
					</button>
					<button
						onClick={openModal}
						className="rounded-full p-3 hover:bg-gray-100"
					>
						<TbWorld className="text-[20px]  " />
					</button>
					<div className="flex items-center border px-4 py-2 rounded-full gap-3 hover:shadow-md ml-1">
						<button>
							<FiMenu className="text-[19px]" />
						</button>
						<button>
							<FaRegUserCircle className="text-[30px]" />
						</button>
					</div>
				</div>
			</div>
			<div>
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					{/* Contenido del modal */}
					<div >
						<div className="border-b ">
							<button className="rounded-full p-3 hover:bg-gray-100">
								{t("translation.modalElemt1")}
							</button>
					
						</div>
						<div className="ml-3">
							<h1 className="text-[20px]  font-semibold pt-4">{t("translation.modalElemt3")}</h1>

							<button className="m-6 rounded-[18px] p-3 pr-10 hover:bg-gray-100">
								{t("translation.language")}
							</button>
						</div>
						<div className="ml-3">
							<h1 className="text-[20px]  font-semibold pt-4">{t("translation.modalElemt4")}</h1>
							<div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">	
							{sorting.map((object) => (
								<Buttom title={t(object.title)} region={t(object.region)} />
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
					</div>
				</Modal>
			</div>
		</div>
	);
};
