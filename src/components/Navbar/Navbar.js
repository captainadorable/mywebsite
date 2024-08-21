import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineApps } from "react-icons/md";
import { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

function Home(props) {
	// Quote
	const [quote, setQuote] = useState(0);
	const quotes = [
		"Rises the moon.",
		"Church is on fire!",
		"Waltz in Aflat major.",
	];

	function HandleClick() {
		if (quote === quotes.length - 1) setQuote(0);
		else setQuote((a) => a + 1);
	}
	//

	// Dark mode
	const modeIcons = [MdOutlineDarkMode, MdLightMode];
	function HandleDarkMode() {
		if (localStorage.getItem("theme") === "dark") {
			localStorage.setItem("theme", "light");
			props.setTheme(1);
		} else if (localStorage.getItem("theme") === "light") {
			localStorage.setItem("theme", "dark");
			props.setTheme(0);
		}
	}
	function SetDarkMode() {
		if (!localStorage.getItem("theme")) {
			localStorage.setItem("theme", "dark");
		}

		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
			props.setTheme(0);
		} else {
			document.documentElement.classList.remove("dark");
			props.setTheme(1);
		}
	}

	useEffect(() => {
		SetDarkMode();
		// eslint-disable-next-line
	}, [props.theme]);
	//

	// Scroll
	const [scrolling, setScrolling] = useState([
		"dark:bg-dark-prime",
		"bg-light-prime",
	]);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleScroll = () => {
		if (window.scrollY > 20) {
			setScrolling(["dark:bg-dark-secondary", "bg-light-secondary"]);
		} else {
			setScrolling(["dark:bg-dark-prime", "bg-light-prime"]);
		}
	};
	//

	return (
		<div
			className={`flex px-6 py-4 mt-4 justify-between items-center rounded-xl fixed top-0 w-11/12 left-1/2 transform -translate-x-1/2  ${scrolling[0]} ${scrolling[1]}`}
		>
			<div className="flex space-x-2">
				<Link to="#home" reloadDocument>
					<NavItems title="Home" icon={FaHome} />
				</Link>
				<Link to="#projects" reloadDocument>
					<NavItems title="Projects" icon={FaProjectDiagram} />
				</Link>
				<Link to="/apps">
					<NavItems title="Mini-apps" icon={MdOutlineApps} />
				</Link>
			</div>
			<div
				onClick={HandleClick}
				className="invisible md:visible text-4xl lg:text-4xl md:text-3xl text-center absolute left-1/2 transform -translate-x-1/2 select-none bg-light-secondary p-2 text-light-prime dark:bg-transparent dark:text-dark-t1 font-righteous rounded-lg transition hover:scale-110 hover:cursor-pointer "
			>
				{quotes[quote]}
			</div>
			<NavItems
				title="Theme"
				icon={modeIcons[props.theme]}
				click={HandleDarkMode}
			/>
		</div>
	);
}

export default Home;
