import { Tooltip } from "react-tippy";

export default function NavItems(props) {
	return (
		<div
			className="p-2 bg-light-secondary dark:bg-dark-secondary rounded-full transition hover:scale-110 hover:cursor-pointer"
			onClick={props.click}
		>
			<Tooltip
				title={props.title}
				position="bottom"
				trigger="mouseenter"
				distance="15"
			>
				<props.icon
					size="30px"
					className="text-light-prime dark:text-dark-t1"
				/>
			</Tooltip>
		</div>
	);
}
