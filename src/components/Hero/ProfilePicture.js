import { FaSpotify } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tippy";
import axios from "axios";

const discordID = "529982737298358289";
export default function ProfilePicture() {
	const [status, setStatus] = useState(["", ""]);
	const [spotify, setSpotify] = useState(false);

	useEffect(() => {
		const handleRequest = async () => {
			try {
				await axios({
					url: `https://api.lanyard.rest/v1/users/${discordID}`,
					method: "get",
				}).then((response) => {
					let data = response.data.data;
					console.log(data);
					if (data.listening_to_spotify) {
						setSpotify(`${data.spotify.artist} - ${data.spotify.song}`);
					} else {
						setSpotify(false);
					}

					switch (data.discord_status) {
						case "dnd":
							setStatus(["DND", "#DD3C3E"]);
							break;

						case "online":
							setStatus(["Online", "#239754"]);
							break;
						case "idle":
							setStatus(["Idle", "#F0B232"]);
							break;
						default:
							setStatus(["Offline", "#80848E"]);
							break;
					}
				});
			} catch (error) {
				console.error(error);
			}
		};

		handleRequest();
	}, []);

	function Activity() {
		return spotify ? (
			<>
				<FaSpotify size="20" color="#66CC99" />
				<div className="text-[#66CC99] font-poppins">{spotify}</div>
			</>
		) : (
			<>
				<GoDotFill size="20" color={status[1]} />
				<div className={`text-zinc-400 font-poppins`}>{status[0]}</div>
			</>
		);
	}

	return (
		<div className="flex flex-col space-y-4 justify-center items-center ">
			<img
				className="rounded-full transition hover:scale-105 hover:cursor-pointer"
				src="https://avatars.githubusercontent.com/u/66172845"
				width="200"
				height="200"
				alt="Profile Picture."
			/>

			<Tooltip
				title="Discord captadorable"
				position="bottom"
				trigger="mouseenter"
			>
				<div className="flex items-center space-x-1 bg-[#161616] p-2 rounded-lg transition hover:scale-105 hover:cursor-pointer">
					<Activity />
				</div>
			</Tooltip>
		</div>
	);
}
