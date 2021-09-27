import { createContext, useCallback, useContext, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export interface WebSocketContextData {
  openSocket(): Socket;
}

const WebSocketContext = createContext<WebSocketContextData>(
  {} as WebSocketContextData,
);

export const WebSocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState({} as Socket);

  const openSocket = useCallback(() => {
    const newSocket = io('http://192.168.0.150:3333', {
      transports: ['websocket', 'polling'],
    });

    setSocket(newSocket);

    return newSocket;
  }, []);

  return (
    <WebSocketContext.Provider value={{ openSocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export function useWebSocket(): WebSocketContextData {
  const context = useContext(WebSocketContext);

  return context;
}
