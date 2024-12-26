import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    // Fetching random user data
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => {
        console.log('data received:', data);
        setInfo(data.results[0]); // Set the fetched user data
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      {info ? (
        <div className="max-w-lg w-full bg-yellow-200 shadow-lg rounded-lg border-black border-[5px] flex">
          {/* Left Section: Profile Image */}
          <div className="p-4 flex-shrink-0">
            <img
              src={info.picture.large}
              alt="User Profile"
              className="rounded-full border-4 border-indigo-500 w-32 h-32 object-cover"
            />
          </div>

          {/* Right Section: User Details */}
          <div className="p-6 flex-grow space-y-3">
            <h2 className="text-2xl font-bold text-indigo-600">
              {info.name.first} {info.name.last}
            </h2>
            <p className="text-lg">
              <span className="font-bold">Gender:</span> {info.gender}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {info.email}
            </p>
            <p className="text-lg">
              <span className="font-bold">Location:</span> {info.location.city}, {info.location.country}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Loading user information...</p>
      )}
    </div>
  );
}

export default App;
