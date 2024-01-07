import React, { useState } from 'react';
import { account } from '../../lib/appwrite';
import { ID,  Permission , Role} from 'appwrite';

const SignUp = () => {
  const [email, setEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Generate a random unique ID or use a library to generate one
    const randomUniqueId = ID.unique();

    // Create a Magic URL session
    // const promise = account.createMagicURLSession(randomUniqueId, email, 'http://localhost:3000');
    const promise = account.create(randomUniqueId, email, '', [
        Permission.read(Role.users(["verified"])),            
        Permission.update(Role.users(["verified"])), 
        Permission.delete(Role.users(["verified"]))
    ]);


    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
