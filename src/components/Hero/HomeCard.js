import ProfilePicture from "./ProfilePicture";
import TextArea from "./TextArea";

export default function HeroCard() {
	return (
		<div className="flex flex-col space-y-12 space-x-0 md:space-y-0 md:space-x-12 md:flex-row justify-center items-center ">
			<div className="flex flex-col space-y-2">
				<ProfilePicture />
			</div>
			<TextArea />
		</div>
	);
}
