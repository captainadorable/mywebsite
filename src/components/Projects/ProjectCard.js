import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
	return (
		<div className="flex flex-col space-y-4 p-8 w-11/12 h-64 rounded-xl bg-[#0F0F0F]">
			<div className="text-white font-poppins text-xl font-bold">
				{props.title}
			</div>
			<div className="font-poppins text-zinc-400 h-2/3">
				{props.desc ? props.desc : "No description."}
			</div>
			<div className="flex space-x-4 justify-between items-center pt-10">
				<div className="text-blue-400">{props.lang}</div>
				<div className="flex space-x-4 justify-center items-center">
					<Link to={props.url} target="_blank">
						<FaExternalLinkAlt
							color="#EDEAE9"
							className="transition hover:scale-110 hover:cursor-pointer"
						/>
					</Link>

					<div className="flex space-x-1 justify-center items-center transition hover:scale-110 hover:cursor-pointer">
						<div className="text-[#AEC841]">{props.stars}</div>
						<FaStar color="#AEC841" />
					</div>
				</div>
			</div>
		</div>
	);
}
