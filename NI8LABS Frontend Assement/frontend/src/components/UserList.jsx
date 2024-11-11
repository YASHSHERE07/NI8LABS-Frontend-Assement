import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="mt-14 bg-neutral-50 shadow-2xl shadow-black p-10 rounded-2xl max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl lg:text-7xl bg-neutral-900 p-4 shadow-xl shadow-red-800 rounded-xl underline text-center text-white font-bebas mb-6">
        Registered Users
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-slate-900 shadow-lg flex flex-col justify-between transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-4 flex justify-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#000000"
                className="w-20 h-20 lg:w-36 lg:h-36"
              >
                <circle cx="256" cy="256" r="256" fill="#232323"></circle>
                <rect
                  x="113.424"
                  y="376"
                  width="285.144"
                  height="8"
                  fill="#E6E5E5"
                ></rect>
                <rect
                  x="157.296"
                  y="400"
                  width="197.408"
                  height="8"
                  fill="#E6E5E5"
                ></rect>
                <circle cx="256" cy="144.24" r="50.776" fill="#FFFFFF"></circle>
                <path
                  d="M343.584,307.552c0,0,0,2.368,0-44.944s-51.64-48.176-51.64-48.176h-71.888c0,0-51.64,0.576-51.64,48.176c0,47.312,0,44.944,0,44.944H343.584z"
                  fill="#DB2B42"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">
              {user.name}
            </h3>
            <p className="text-gray-700 break-words text-center mb-1">
              Email: {user.email}
            </p>
            <p className="text-gray-700 text-center mb-4">
              Date of Birth: {user.dob}
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
              <button
                onClick={() => onEdit(user)}
                className="px-4 py-2 flex items-center justify-center text-green-700 border border-green-500 rounded hover:bg-green-500 hover:text-white transition"
              >
                <svg
                  viewBox="0 0 512 512"
                  fill="#000000"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    d="M354.051,8.414H61.167c-18.093,0-32.759,14.667-32.759,32.759v429.653c0,18.093,14.667,32.759,32.759,32.759h292.885c18.093,0,32.759-14.667,32.759-32.759V41.173C386.811,23.08,372.144,8.414,354.051,8.414z"
                    fill="#df4343"
                  ></path>
                  <path
                    d="M386.811,104.541c-10.408,2.671-19.954,8.08-27.75,15.877L156.393,323.085l-4.583,144.975l144.976-4.58l90.025-90.024V104.541H386.811z"
                    opacity="0.1"
                  ></path>
                  <path
                    d="M475.656,198.696l-54.479-54.479c-10.582-10.582-27.738-10.582-38.32,0l-30.269,30.268l25.777,67.022l67.022,25.777l30.269-30.269C486.239,226.434,486.239,209.277,475.656,198.696z"
                    fill="#FF999A"
                  ></path>
                </svg>
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="px-4 py-2 flex items-center justify-center text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition"
              >
                <svg
                  height="16"
                  width="16"
                  viewBox="0 0 507.2 507.2"
                  fill="#000000"
                  className="mr-1"
                >
                  <circle
                    cx="253.6"
                    cy="253.6"
                    r="253.6"
                    fill="#F15249"
                  ></circle>
                  <path
                    d="M147.2,368L284,504.8c115.2-13.6,206.4-104,220.8-219.2L367.2,148L147.2,368z"
                    fill="#AD0E0E"
                  ></path>
                  <path
                    d="M373.6,309.6c11.2,11.2,11.2,30.4,0,41.6l-22.4,22.4c-11.2,11.2-30.4,11.2-41.6,0l-176-176 c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L373.6,309.6z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M280.8,216L216,280.8l93.6,92.8c11.2,11.2,30.4,11.2,41.6,0l23.2-23.2c11.2-11.2,11.2-30.4,0-41.6L280.8,216z"
                    fill="#D6D6D6"
                  ></path>
                  <path
                    d="M309.6,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6L197.6,373.6 c-11.2,11.2-30.4,11.2-41.6,0l-22.4-22.4c-11.2-11.2-11.2-30.4,0-41.6L309.6,133.6z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
