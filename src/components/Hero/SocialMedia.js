import { FaSpotify, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa6";
import SocialMediaCard from "./SocialMediaCard";
const socialmedia = [
	{
		title: "Spotify",
		url: "https://open.spotify.com/user/ozeqo5w6gg3rfjjt1ibuwmrv6",
		icon: (
			<FaSpotify
				className="text-light-spotify dark:text-dark-spotify"
				size="30"
			/>
		),
	},
	{
		title: "Instagram",
		url: "https://www.instagram.com/captadorable_/",
		icon: (
			<FaInstagram
				className="text-light-instagram dark:text-dark-instagram"
				size="30"
			/>
		),
	},
	{
		title: "Discord captadorable",
		url: "https://discord.com/users/529982737298358289",
		icon: (
			<FaDiscord
				className="text-light-discord dark:text-dark-discord"
				size="30"
			/>
		),
	},
	{
		title: "Github",
		url: "https://github.com/captainadorable",
		icon: (
			<FaGithub className="text-light-github dark:text-dark-github" size="30" />
		),
	},
];

export default function SocialMedia() {
	return (
		<div className="flex space-x-4 bg-light-secondary dark:bg-dark-secondary w-max p-2 rounded-xl">
			{socialmedia.map((item, id) => {
				return (
					<SocialMediaCard
						key={id}
						title={item.title}
						icon={item.icon}
						url={item.url}
					/>
				);
			})}
		</div>
	);
}
