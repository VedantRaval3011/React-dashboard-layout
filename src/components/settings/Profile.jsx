import { Github, User } from "lucide-react";
import SettingSection from "./SettingSection";
import { Link } from "react-router-dom";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='/purpleMario.jpg'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Vedant Raval</h3>
					<Link to='https://github.com/VedantRaval3011' className="flex gap-1 items-center sm:justify-center lg:justify-normal"> <Github size={20} /> </Link>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;
