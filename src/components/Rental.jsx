import React from "react";
import { FaStar } from "react-icons/fa";
import { HeartIcon } from "./HeartIcon";

export const Rental = ({ title, images, price, description }) => {
	return (
		<div className="max-w-sm  rounded overflow-hidden relative">
			<div className="">
				<button className="absolute top-0 right-0 m-4 ">
					<HeartIcon />
				</button>
			</div>
			<img
				className="w-[385px] h-[300PX] object-cover rounded-md sm:max-h-[11.5rem] md:max-h-full"
				src={images}
				alt="Sunset in the mountains"
			/>
			<div className="py-4 flex justify-between">
				<div>
					{/* left */}
					<div className="font-bold text-lg mb-2">{title}</div>
					<div className="font-bold text-base mb-2 text-gray-500">
						{description}
					</div>
					<p className="text-base">${price} night</p>
				</div>
				<div className="flex items-center space-x-1">
					{/* right */}
					<FaStar />
					<p>5.0</p>
				</div>
			</div>
		</div>
	);
};
