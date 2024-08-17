import { MdOutlineDarkMode } from "react-icons/md";
import { FaHome, FaMicroblog, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineApps } from "react-icons/md";
import { useState, useEffect } from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

function Home() {
	// Quote
	const [quote, setQuote] = useState(0);
	const quotes = [
		"Rises the moon.",
		"Church is on fire!",
		"Come on, it's a silly dream.",
	];

	function HandleClick() {
		if (quote === quotes.length - 1) setQuote(0);
		else setQuote((a) => a + 1);
	}
	//

	// Scroll
	const [scrolling, setScrolling] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const handleScroll = () => {
		if (window.scrollY > 20) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};
	//

	return (
		<div
			className={`flex px-6 py-4 mt-4 justify-between items-center rounded-xl fixed top-0 w-11/12 left-1/2 transform -translate-x-1/2 bg-[${
				scrolling ? "#0f0f0f" : "#09090B"
			}]`}
		>
			<div className="flex space-x-2">
				<Link to="#home" reloadDocument>
					<NavItems title="Home" icon={FaHome} />
				</Link>
				<Link to="#projects" reloadDocument>
					<NavItems title="Projects" icon={FaProjectDiagram} />
				</Link>
				<Link to="/blog">
					<NavItems title="Blog" icon={FaMicroblog} />
				</Link>
				<Link to="/apps">
					<NavItems title="Mini-apps" icon={MdOutlineApps} />
				</Link>
			</div>
			<div
				onClick={HandleClick}
				className="absolute left-1/2 transform -translate-x-1/2 select-none text-4xl text-slate-200 font-righteous rounded-lg transition hover:scale-110 hover:cursor-pointer "
			>
				{quotes[quote]}
			</div>
			<NavItems title="Theme" icon={MdOutlineDarkMode} />
		</div>
	);
}

export default Home;
