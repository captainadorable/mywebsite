import ProfilePicture from "./ProfilePicture";
import TextArea from "./TextArea";

export default function HeroCard() {
	return (
		<div className="flex justify-center items-center space-x-12">
			<div className="flex flex-col space-y-2">
				<ProfilePicture />
			</div>
			<TextArea />
		</div>
	);
}
