import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

export default function TextArea() {
	return (
		<div className="flex flex-col w-4/12 space-y-4">
			<div className="text-4xl text-white font-righteous">Tahir Yusuf Eser</div>
			<div className="text-zinc-200 font-sans text-lg">
				Tech enjoyer &{" "}
				<Link to="https://ehb.itu.edu.tr/" target="_blank">
					<span className="text-yellow-500 hover:cursor-pointer">
						İTÜ ECE/EHB
					</span>{" "}
				</Link>
				student. Interested with <span className="text-blue-700">AI,</span>{" "}
				<span className="text-blue-600">low-level,</span>{" "}
				<span className="text-blue-500">full stack,</span>{" "}
				<span className="text-green-400">music,</span>{" "}
				<span className="text-blue-400">philosophy</span> and a lot more.
			</div>
			<div className="pt-4">
				<SocialMedia />
			</div>
		</div>
	);
}
