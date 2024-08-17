import { Tooltip } from "react-tippy";

export default function NavItems(props) {
	return (
		<div className="p-2 bg-[#0f0f0f] rounded-full transition hover:scale-110 hover:cursor-pointer">
			<Tooltip
				title={props.title}
				position="bottom"
				trigger="mouseenter"
				distance="15"
			>
				<props.icon color="#ffff" size="30px" />
			</Tooltip>
		</div>
	);
}
