import styled from "styled-components";
import io from "socket.io-client";
import Image from "next/image";
import { SendImg, UserProfile } from "../../../common/image";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState, useRef, useContext } from "react";
import { getMyInfo } from "../../../common/request";
import { SocketContext } from "../../../common/socket";
const Chat = ({ id, title, name }) => {
  const socket = useContext(SocketContext);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [connectState, setConnectState] = useState(false);
  useEffect(() => {
    socket.on("message", (msg) => {
      console.log(msg);
      chat.push({ message: msg.message, state: true, name: "otherUser" });
      console.log(chat);
      setChat([...chat]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);
  useEffect(() => {
    socket.open();
    socket.emit("join", id);
    return () => {
      console.log("socket이 끊겻어요 ㅜ");
      setConnectState(false);
      console.log(id);
      socket.emit("leave", id);
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const requestChat = () => {
    if (message !== "") {
      console.log(socket);
      socket.on("connect", () => {
        console.log("SOCKET CONNECTED!", socket.id);
        setConnectState(true);
      });
      console.log(message);
      chat.push({ message: message, state: true, name: name });
      setChat([...chat]);
      socket.emit("send", {
        roomId: id,
        message: message,
      });
      setMessage("");
    }
  };
  return (
    <>
      <Table>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>
          <Ul>
            {chat.map((item) => (
              <>
                <Li>
                  <CategoryImg>
                    <Image src={UserProfile} alt="" width={89} height={89} />
                    <div> {item.name}</div>
                  </CategoryImg>

                  <ChatTable>{item.message}</ChatTable>
                </Li>
              </>
            ))}
          </Ul>
        </Content>
        <InputBox>
          <Input
            type="text"
            value={message}
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
`;
const Ul = styled.ul`
  list-style: none;
  height: 600px;
  overflow-y: scroll;
`;
const Li = styled.li`
  position: relative;
  left: -40px;
  display: flex;
`;
const Asdf = styled.div`
  display: inline-block;
  width: 100%;
`;
const ChatTable = styled.div`
  position: relative;
  top: 30px;
  width: max-content;
  height: 50px;
  border-radius: 40px;
  padding: 0px 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 50px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
`;
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
const CategoryImg = styled.div`
  div {
    position: relative;
    top: -20px;
    left: 10px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #000000;
  }
`;
