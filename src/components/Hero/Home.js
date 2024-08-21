import HeroCard from "./HomeCard";
export default function Home(props) {
	return (
		<div className="h-screen" id="home" name="home">
			<div className="text-center text-5xl lg:text-6xl text-light-t1 dark:text-dark-t1 pt-32 md:pt-40 lg:pt-64 font-amsterdam">
				Welcome to{" "}
				<span className="text-light-tc1 dark:text-dark-tc1">
					{props.theme === 0 ? "the sky" : "the party"}
				</span>
			</div>
			<div className="min-w-screen mt-10 md:mt-20 lg:mx-[100px] ">
				<HeroCard />
			</div>
		</div>
	);
}
