import React, { createContext, useState, useContext } from 'react';

// Create a Context
const UserContext = createContext();

// Hook to use the context
export const useIBValues = () => useContext(UserContext);

// Provider Component
export const UserValuesProvider = ({ children }) => {
  const [userValues, setUserValues] = useState([]);

  // The context value that will be supplied to any descendants of this component.
  const contextValue = {
    userValues, setUserValues,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
