import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

export default function TextArea() {
	return (
		<div className="flex flex-col w-2/3 space-y-4 justify-center items-center text-center md:text-left md:w-4/12 md:justify-start md:items-start">
			<div className="text-4xl text-light-t1 dark:text-dark-t1 font-righteous">
				Tahir Yusuf Eser
			</div>
			<div className="text-light-t2 dark:text-dark-t2 font-sans text-lg">
				Tech enjoyer &{" "}
				<Link to="https://ehb.itu.edu.tr/" target="_blank">
					<span className="text-light-tc2 dark:text-dark-tc2 hover:cursor-pointer">
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
