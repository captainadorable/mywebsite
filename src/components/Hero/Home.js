import Navbar from "../Navbar/Navbar";
import HeroCard from "./HomeCard";
export default function Home() {
	return (
		<div className="h-screen" id="home" name="home">
			<Navbar />
			<div className="text-center text-6xl text-white pt-64 font-amsterdam">
				Welcome to <span className="text-sky-600">the sky</span>
			</div>
			<div className="min-w-screen mt-20 mx-[100px] ">
				<HeroCard />
			</div>
		</div>
	);
}
