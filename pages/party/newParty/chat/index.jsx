import styled from "styled-components";
import io from "socket.io-client";
import Image from "next/image";
import { SendImg, UserProfile } from "../../../common/image";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useRef } from "react";
import { getMyInfo } from "../../../common/request";
import axios from "axios";
const Chat = ({ id, title }) => {
  const InputRef = useRef();
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [connectState, setConnectState] = useState(false);
  const [messageState, setMessageState] = useState(false);
  const { status, data } = useQuery(["getMyId", id], () => getMyInfo());
  let socket;
  if (data) {
    socket = io(process.env.NEXT_PUBLIC_WEB_SOCKET, {
      query: {
        id: data,
      },
      transports: ["websocket"],
    });
  }
  useEffect(() => {
    if (data) {
      socket.on("connect", () => {
        console.log(socket.id);
        setConnectState(true);
      });
      socket.emit("join", {
        token:
          "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjkxNTkwMjEsImV4cCI6MTY2OTE3NzAyMX0.f2_whGhdqKj3kLZcBRsWY06p4SEyeQXOQKliQH8f4jMLIN0L3WWtdbWYA1tw9MPRD3kexF0Lrl_oIfcNHPkTjg",
        room_id: id,
      });
      socket.on("message", (data) => {
        console.log(data);
        chat.push({ message: data.message });
        setChat([...chat]);
      });
      if (socket)
        return () => {
          socket.emit("leave", id);
          socket.disconnect();
        };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat, data, messageState]);
  const requestChat = () => {
    if (message !== "") {
      socket.emit("send", {
        token:
          "eyJKV1QiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiMmIxMDBjOS0zMThkLTRiNjgtYjVjZC0xZGQzZWU3M2ViMzYiLCJBVVRIT1JJVFkiOiJST0xFX1VTRVIiLCJpYXQiOjE2NjkxNTkwMjEsImV4cCI6MTY2OTE3NzAyMX0.f2_whGhdqKj3kLZcBRsWY06p4SEyeQXOQKliQH8f4jMLIN0L3WWtdbWYA1tw9MPRD3kexF0Lrl_oIfcNHPkTjg",
        room_id: id,
        message: message,
      });
    }
  };
  return (
    <>
      <Table>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>
          <Image src={UserProfile} alt="" width={89} height={89} />
        </Content>
        <InputBox>
          <Input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                requestChat();
              }
            }}
          />
          <Button onClick={() => requestChat()}>
            <Image src={SendImg} alt="" width={50} height={50}></Image>
          </Button>
        </InputBox>
      </Table>
    </>
  );
};
export default Chat;
const Table = styled.div`
  position: relative;
  top: 40px;
  left: 120px;
  width: 818px;
  height: 851px;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 80px;
`;
const Header = styled.div`
  width: 818px;
  height: 86px;
  background: #fffff0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Content = styled.div`
  position: relative;
  top: 50px;
  width: 800px;
  height: 600px;
  background-color: red;
`;
const User = styled.div``;
const Button = styled.div`
  position: relative;
  top: -50px;
  left: 600px;
  width: 60px;
  height: 55px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #8ace55;
  border-radius: 100%;
  padding-top: 5px;
  cursor: pointer;
`;
const InputBox = styled.div`
  position: relative;
  width: 671px;
  height: 76px;
  margin: 0 auto;
  top: 70px;
  z-index: 2;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
const Input = styled.input`
  position: relative;
  left: 30px;
  top: 10px;
  width: 550px;
  height: 55px;
  border: none;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 35px;
  color: #000000;
  :focus {
    outline: none;
  }
`;
const Title = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 86px;
  padding-left: 30px;
  /* identical to box height */

  color: #000000;
`;
