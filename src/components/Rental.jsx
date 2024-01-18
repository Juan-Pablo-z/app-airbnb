import React from "react";
import { FaStar } from "react-icons/fa";
import { HeartIcon } from "./HeartIcon";
import { HotelModal } from "./HotelModal";
import { useTranslation } from "react-i18next"
import {Image} from "@nextui-org/react";


export const Rental = (rental) => {

	const { title, images, price, description, id } = rental;
	const [t, i18n] = useTranslation("global")

	return (
		<div className="max-w-sm  rounded overflow-hidden relative">
			<div className="">
				<button className="absolute top-0 right-0 m-4 ">
					<HeartIcon />
				</button>
			</div>
			<Image
			 isZoomed
				className="w-[385px] h-[300PX] object-cover rounded-md sm:max-h-[11.5rem] md:max-h-full cursor-pointer"
				src={images}

			/>
			<div className="py-4 flex justify-between cursor-pointer">
				<div>
					{/* left */}
					<div className="font-bold text-lg mb-2">{title}</div>
					<div className="font-bold text-base mb-2 text-gray-500">
						{description}
					</div>
					<br /><br />
					<p className="text-base text-end absolute bottom-8 left-0">${price} night</p>
				</div>
				<div className="flex  space-x-1 mb-2 top-10 right-6">
					{/* right */}
					<FaStar className="mt-1" />
					<p>5.0</p>
				</div>
			</div>
			<div className="cursor-pointer">
				<HotelModal {...rental} />
			</div>
		</div>
	);
};
