import io from "socket.io-client";
import React, { createContext } from "react";
export const socket = io(process.env.NEXT_PUBLIC_WEB_SOCKET, {
  transports: ["websocket"],
  query: {
    token:
      "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjkzMzIxMjUsImV4cCI6MTY2OTM1MDEyNX0.XCAxlSX3zvLTjVX8qUZdyRk250oiSGql-lJJpvYNjFdJ5fhf9ZPrdAsyyQ0Sgc42t-1EjmXpBXN5d-aQsaTMrg",
  },
});
export const SocketContext = createContext();
