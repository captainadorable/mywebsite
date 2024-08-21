import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Hero/Home";
import Projects from "../components/Projects/Projects";
import { useState } from "react";
export default function Index() {
	const [theme, setTheme] = useState(0);

	return (
		<>
			<Navbar theme={theme} setTheme={setTheme} />
			<Home theme={theme} />
			<Projects />
		</>
	);
}
