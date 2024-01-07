import React, { useState, useEffect } from 'react';
import { Box } from '../styles/box';
import { Sidebar } from './sidebar.styles';
import { Avatar, Tooltip } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { CompaniesDropdown } from './companies-dropdown';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { useSidebarContext } from '../layout/layout-context';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';
import { useRouter } from 'next/router';
import { auth } from '../../config/firebase'; 

export const SidebarWrapper = () => {
   const router = useRouter();
   const { collapsed, setCollapsed } = useSidebarContext();
   const [user, setUser] = useState<any | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
         if (authUser) {
            setUser(authUser);
         } else {
            setUser(null);
         }
         setIsLoading(false);
      });

      return () => unsubscribe();
   }, []);

   if (isLoading) {
      return <p>Loading...</p>;
   }
   if (!user) {
      return null;
   }

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex direction={'column'} justify={'between'} css={{ height: '100%' }}>
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     isActive={router.pathname === '/'}
                     title="Home"
                     icon={<HomeIcon />}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">
                     <SidebarItem
                        isActive={router.pathname === '/accounts'}
                        title="Chat History"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                     {/* <CollapseItems
                        icon={<BalanceIcon />}
                        items={['Banks Accounts', 'Credit Cards', 'Loans']}
                        title="Balances"
                     /> */}
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size={'sm'} />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
