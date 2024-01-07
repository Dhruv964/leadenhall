import React from 'react';

import SignIn from '../components/signin';
import SignUp from '../components/signup';

const LoginPage: React.FC = () => {
   return (
      <div>
         {/* <SignUp /> */}
         <SignIn />
      </div>
   );
};

export default LoginPage;

