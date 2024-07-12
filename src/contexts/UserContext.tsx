'use client';
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { USER_WITH_ONE_SUBSCRIPTION } from '@/mocks/user';

interface UserContextType {
  user: typeof USER_WITH_ONE_SUBSCRIPTION;
  setUser: React.Dispatch<React.SetStateAction<typeof USER_WITH_ONE_SUBSCRIPTION>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(USER_WITH_ONE_SUBSCRIPTION); //  here we can replace with actual user context

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
