import { Tooltip } from "react-tippy";
import { Link } from "react-router-dom";
export default function SocialMediaCard(props) {
	return (
		<Tooltip
			title={props.title}
			position="bottom"
			trigger="mouseenter"
			distance="15"
		>
			<Link to={props.url} target="_blank">
				<div className="transition hover:scale-110 hover:cursor-pointer">
					{props.icon}
				</div>
			</Link>
		</Tooltip>
	);
}
