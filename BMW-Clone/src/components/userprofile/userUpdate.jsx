import React from 'react';

const userUpdate = () => {
  return (
    <form>
      <label htmlFor="firstname">First Name:</label>
      <input type="text" className="firstname" name="firstname" />

      <label htmlFor="lastname">Last Name:</label>
      <input type="text" className="lastname" name="lastname" />

      <label htmlFor="username">Username:</label>
      <input type="text" className="username" name="username" />

      <label htmlFor="email">Email:</label>
      <input type="email" className="email" name="email" />

      <label htmlFor="profilepic">Profile Picture:</label>
      <input type='text' className="profilepic" name="profilepic" />

      <label htmlFor="phonenumber">Phone Number:</label>
      <input type="tel" className="phonenumber" name="phonenumber" />

      <label htmlFor="coverpic">Cover Picture:</label>
      <input type='text' className="coverpic" name="coverpic" />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default userUpdate;
