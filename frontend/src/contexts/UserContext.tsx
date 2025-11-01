import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  onlineUsers: string[];
  setOnlineUsers: (users: string[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    // Logic to fetch online users or listen for updates can be added here
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, onlineUsers, setOnlineUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};