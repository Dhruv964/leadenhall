import {Avatar, Button, Dropdown, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import { useEffect, useState } from 'react';
import {DarkModeSwitch} from './darkmodeswitch';
import { useRouter } from 'next/router';
import {auth} from '../../config/firebase';
import { getUserEmail } from '../signin/userAccount'; // Import the getUserEmail function
import {account} from '../../lib/appwrite';






export const UserDropdown = () => {
   const router = useRouter(); // Initialize the useRouter hook
   const [userEmail, setUserEmail] = useState("");

   useEffect(() => {
      getUserEmail()
        .then((email) => {
          setUserEmail(email);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    const handleLogout = async () => {
      account.deleteSession('current')
      .then(() => {
        // Redirect to the login page or perform other actions
        // after successful logout if needed.
        router.push('/login');
      //   console.log('Logged out successfully');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
    };
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({actionKey})}
         >
            <Dropdown.Item key="profile" css={{height: '$18'}}>
               <Text b color="inherit" css={{d: 'flex'}}>
                  Signed in as
               </Text>
               <Text b color="inherit" css={{d: 'flex'}}>
                  {userEmail}
               </Text>
            </Dropdown.Item>

            <Dropdown.Item key="help_and_feedback" withDivider>
               Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error" >
               <Button onPress={handleLogout}>Log Out</Button>
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
