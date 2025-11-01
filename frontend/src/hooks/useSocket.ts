import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const useSocket = (serverUrl: string) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(serverUrl);

    return () => {
      socketRef.current?.disconnect();
    };
  }, [serverUrl]);

  const sendMessage = (message: string) => {
    socketRef.current?.emit('sendMessage', message);
  };

  const onMessageReceived = (callback: (message: string) => void) => {
    socketRef.current?.on('messageReceived', callback);
  };

  const onUserStatusUpdate = (callback: (status: { userId: string; online: boolean }) => void) => {
    socketRef.current?.on('userStatusUpdate', callback);
  };

  return {
    sendMessage,
    onMessageReceived,
    onUserStatusUpdate,
  };
};

export default useSocket;