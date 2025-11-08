import React, { useContext} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { AuthanticationContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

const EditProfile = () => {
    const navigate = useNavigate();
    const { user,profileUpdate,loading} = useContext(AuthanticationContext);

    const handleSubmit = (e) => {
        e.preventDefault();
const name=e.target.name.value;
const photo=e.target.photoURL.value;
console.log(name,photo)  ;
profileUpdate(name,photo)  
.then(() => {
    navigate('/profile'); 
  })
  .catch((err) => {
    console.log(err);
  });
    };

    const defaultPhoto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
if(loading)
    return <div className='flex justify-center my-80'><div className="loading loading-infinity loading-xl"></div></div>
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <title>Edit Profile - GameVerse</title>
            <Navbar />

            <div className=" flex justify-center items-start mt-12 px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Edit Profile</h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                     
                        <div className="flex justify-center mb-4">
                            <img 
                                src={user?.photoURL ? user.photoURL : defaultPhoto} 
                                alt={user?.displayName ? user.displayName : "User"} 
                                className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow-md"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Name</label>
                            <input
                            required
                                type="text"
                                defaultValue={user?.displayName ? user.displayName : ""}
                              name="name"
                                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                placeholder="Enter your name"
                                
                            />
                        </div>


                        <div>
                            <label className="block text-gray-600 font-medium mb-1">Profile Picture URL</label>
                            <input
                            required
                                type="text"
                                defaultValue={user?.photoURL}
                              name="photoURL"
                                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                                placeholder="Enter photo URL"
                            />
                        </div>

                        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">Save Changes
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EditProfile;
