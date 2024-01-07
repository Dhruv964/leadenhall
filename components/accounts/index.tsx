import {Button, Input, Text} from '@nextui-org/react';
import Link from 'next/link';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {DotsIcon} from '../icons/accounts/dots-icon';
import {ExportIcon} from '../icons/accounts/export-icon';
import {InfoIcon} from '../icons/accounts/info-icon';
import {TrashIcon} from '../icons/accounts/trash-icon';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';
import {AddUser} from './add-user';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../config/firebase';

// const AccountInfo = ({ user }) => {
//    const [userData, setUserData] = useState(null);

//    useEffect(() => {
//       if (user) {
//          const userRef = firestore.collection('users').doc(user.uid);
//          userRef.get().then((doc) => {
//             if (doc.exists) {
//                setUserData(doc.data());
//             } else {
//                console.log('No such document!');
//             }
//          });
//       }
//    }, [user]);

//    return (
//       <div>
//          {userData ? (
//             <div>
//                <p>Name: {userData.name}</p>
//                <p>Email: {userData.email}</p>
//                {/* Display other user data */}
//             </div>
//          ) : (
//             <p>Loading user data...</p>
//          )}
//       </div>
//    );
// };

// export default AccountInfo;

export const Accounts = () => {
   return (
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Home</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <UsersIcon />
               <CrumbLink href="#">Users</CrumbLink>
               <Text>/</Text>
            </Crumb>
            <Crumb>
               <CrumbLink href="#">List</CrumbLink>
            </Crumb>
         </Breadcrumbs>

         <Text h3>All Chats</Text>
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  'gap': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >

               {/* <SettingsIcon />
               <TrashIcon />
               <InfoIcon />
               <DotsIcon /> */}
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
               {/* <AddUser /> */}
               {/* <Button auto iconRight={<ExportIcon />}>
                  Export to CSV
               </Button> */}
            </Flex>
         </Flex>

         <TableWrapper />
      </Flex>
   );
};
