import image from "../../images/estate.jpg";
import { GiBed, GiBathtub, GiFlatPlatform, GiTrashCan } from "react-icons/gi";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function PropertyItem(props) {
	const { street, number, city, province, country, price, num_bedrooms, num_bathrooms, size } = props;

	return (
		<article className="grid grid-cols-8 gap-6">
			<div>
				<img className="w-full aspect-[4/3] rounded-md" src={image} alt="estate" />
			</div>
			<div className="flex flex-col justify-center col-span-2 ">
				<h5 className="font-medium">
					{street}, {number}
				</h5>
				<h6 className="font-extralight">
					{city}, {province}
				</h6>
				<h6 className="font-extralight">{country}</h6>
			</div>
			<div className="flex flex-col justify-center">
				<span className="font-light text-orange-400">${price}</span>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 col-span-2">
				<div className="flex items-center gap-1">
					<GiBed />
					<span>{num_bedrooms}</span>
				</div>
				<div className="flex items-center gap-1">
					<GiBathtub />
					<span>{num_bathrooms}</span>
				</div>
				<div className="flex items-center gap-1">
					<GiFlatPlatform />
					<span>
						{size}m<sup>2</sup>
					</span>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<button>
					<AiOutlineDollarCircle />
				</button>
			</div>
			<div className="flex flex-col justify-center items-center">
				<button>
					<GiTrashCan />
				</button>
			</div>
		</article>
	);
}
