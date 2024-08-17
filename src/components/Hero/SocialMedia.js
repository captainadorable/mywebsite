import { FaSpotify, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa6";
import SocialMediaCard from "./SocialMediaCard";
const socialmedia = [
	{
		title: "Spotify",
		url: "https://open.spotify.com/user/ozeqo5w6gg3rfjjt1ibuwmrv6",
		icon: <FaSpotify color="#66CC99" size="30" />,
	},
	{
		title: "Instagram",
		url: "https://www.instagram.com/captadorable_/",
		icon: <FaInstagram color="#EE00E2" size="30" />,
	},
	{
		title: "Discord captadorable",
		url: "https://discord.com/users/529982737298358289",
		icon: <FaDiscord color="#407cff" size="30" />,
	},
	{
		title: "Github",
		url: "https://github.com/captainadorable",
		icon: <FaGithub color="#FFFFFF" size="30" />,
	},
];

export default function SocialMedia() {
	return (
		<div className="flex space-x-4 bg-[#161616] w-max p-2 rounded-xl">
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
