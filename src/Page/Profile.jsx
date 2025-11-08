import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthanticationContext } from '../Context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const { user,loading } = useContext(AuthanticationContext);
const defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
if(loading)
    return <div className='flex justify-center my-80'><div className="loading loading-infinity loading-xl"></div></div>
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <title>Profile - GameVerse</title>
            <Navbar />

            <div className="flex justify-center items-start mt-12 px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center">
                    <img 
                        src={user?.photoURL ? user.photoURL : defaultPhoto } 
                        alt=""
                        className="w-40 h-40 object-cover rounded-full border-2 border-gray-200 shadow-md"
                    />

                    <h2 className="mt-6 text-2xl font-bold text-gray-800">{user?.displayName ? user.displayName : "user" }</h2>
                    <p className="text-gray-500 mt-1">{user?.email ? user.email : ""}</p>

                    <div className="mt-8 w-full space-y-4">
                        <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Name:</span>
                            <span className="text-gray-800 font-semibold">{user?.displayName ? user.displayName :"User"}</span>
                        </div>
                        <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Email:</span>
                            <span className="text-gray-800 font-semibold">{user?.email ? user.email : ""}</span>
                        </div>
                    </div>

                    <Link to="/editprofile" className="mt-8 w-full bg-indigo-600 text-center text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                        Edit Profile
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Profile;
