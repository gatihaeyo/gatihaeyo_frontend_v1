import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../common/func/header";
import styled from "styled-components";
import React, { useCallback, useState } from "react";
import { MyParty } from "../common/data";
import { useQuery } from "@tanstack/react-query";
import { getPartyList } from "../common/request";
import LoadingPage from "../common/status/loading";
import ErrorPage from "../common/status/error";
import BoardItem from "../party/components/item";
import { useRouter } from "next/router";
import InvitedPartyItem from "./components";
const Board: NextPage = () => {
  const [state, setState] = useState<string>(MyParty[0].name);
  const [text, setText] = useState<string>(MyParty[0].path);
  const router = useRouter();
  const { status, data } = useQuery(
    ["getPartyData", state],
    () => getPartyList(text),
    { staleTime: 5000, keepPreviousData: true }
  );
  const [count, setCount] = useState<number>(0);
  const ClickHandler = useCallback((i: number, name: string, path: string) => {
    setCount(i);
    setText(path);
    setState(name);
  }, []);
  return (
    <>
      <Header />
      {status === "loading" ? (
        <>
          <LoadingPage />
        </>
      ) : status === "error" ? (
        <>
          <ErrorPage
            error={{
              status: "500",
              data: "server error",
            }}
          />
        </>
      ) : (
        <>
          <Title>
            <Category>
              {MyParty.map(
                (item: { name: string; path: string }, i: number) => (
                  <>
                    <Tag
                      state={count === i}
                      onClick={() => ClickHandler(i, item.name, item.path)}
                    >
                      {item.name}
                    </Tag>
                  </>
                )
              )}
            </Category>
            <Content>
              <Titleprops>{state}목록입니다.</Titleprops>
              <Ul>
                {count === 0 ? (
                  <>
                    {data.list.map((item: any) => (
                      <>
                        <div
                          onClick={() =>
                            router.push(`../party/newParty/${item.id}`)
                          }
                        >
                          <BoardItem props={item} />
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {data.list.map((item: any) => (
                      <>
                        <div
                          onClick={() =>
                            router.push(`../party/newParty/${item.id}`)
                          }
                        >
                          <InvitedPartyItem props={item} />
                        </div>
                      </>
                    ))}
                  </>
                )}
              </Ul>
            </Content>
          </Title>
        </>
      )}
    </>
  );
};

export default Board;
const Title = styled.div`
  margin: 50px auto;
  width: 1300px;
  height: 835px;
`;
const Content = styled.div`
  box-sizing: border-box;
  height: 800px;
  width: 1300px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Category = styled.div`
  display: flex;
  height: 35px;
  gap: 10px;
  padding-left: 20px;
`;
const Tag = styled.div<{ state: boolean }>`
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => (props.state ? "#f6da44" : "#fffff0")};
  width: max-content;
  padding: 0 25px;
  height: 35px;
  border-radius: 20px 20px 0px 0px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 35px;
  color: ${(props) => (props.state ? "#ffffff" : "#a7a7a7")};
  :hover {
    background: #f6da44;
    color: #ffffff;
  }
`;
const Ul = styled.div`
  position: relative;
  left: 300px;
  top: 100px;
  width: 900px;
  height: 600px;
  padding-left: 40px;
  div {
    margin-bottom: 10px;
  }
  overflow-y: scroll;
  scroll-padding-top: 20px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    height: 127px;
    border-radius: 20px;

    background-color: #ededed;
  }

  &::-webkit-scrollbar-thumb {
    padding-top: 9px;
    height: 28px;
    border-radius: 20px;
    background: #f6da44;
  }
`;
const Titleprops = styled.div`
  position: relative;
  left: 50px;
  top: 50px;
  font: 700 normal 32px "Noto Sans";
`;
