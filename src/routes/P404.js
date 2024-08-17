import { Link } from "react-router-dom";

export default function P404() {
	return (
		<div className="w-screen h-screen flex flex-col space-y-4 justify-center items-center">
			<div className="text-9xl text-white font-amsterdam">404!</div>
			<div className="text-4xl font-righteous text-white">
				Ups... You've <span className="text-teal-900">lost.</span> Go back to{" "}
				<Link to="/">
					<span className="text-blue-500 hover:cursor-pointer underline">
						home.
					</span>
				</Link>
			</div>
		</div>
	);
}
