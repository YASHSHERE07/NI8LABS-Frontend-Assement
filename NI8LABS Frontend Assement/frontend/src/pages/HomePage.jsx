import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import { fetchUsers, createUser, updateUser, deleteUser } from "../api/userApi";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const loadUsers = async () => {
    const response = await fetchUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAddUser = async (user) => {
    await createUser(user);
    loadUsers();
  };

  const handleEditUser = async (updatedUser) => {
    if (userToEdit) {
      await updateUser(userToEdit.id, updatedUser);
      setUserToEdit(null);
      loadUsers();
    }
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="container mx-auto pt-10 px-4">
      <div className="max-w-4xl mx-auto py-5 shadow-xl shadow-red-800 rounded-xl bg-neutral-900 transition hover:scale-105 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center font-bebas">
          User Profile Manager
        </h1>
        <p className="text-center font-source-sans mt-2 text-sm md:text-base lg:text-lg">
          A simple way to add, update, and organize user information.
        </p>
      </div>
      <div className="container mx-auto p-4">
        <UserForm
          onSubmit={userToEdit ? handleEditUser : handleAddUser}
          userToEdit={userToEdit}
        />
        <UserList
          users={users}
          onEdit={setUserToEdit}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
};

export default HomePage;
