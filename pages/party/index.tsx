/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { PartyData, PartyData2, PartyBoard, SelectData } from "../common/data";
import React, { useState, useCallback } from "react";
import { partyDataProps } from "../common/types";
import ItemComponent from "./components";
import BoardItem from "./components/item";
import dynamic from "next/dynamic";
import { SearchImg } from "../common/image";
import Header from "../common/func/header";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getPartyData } from "../common/request";
import LoadingPage from "../common/status/loading";
import ErrorPage from "../common/status/error";
import DetailPartyInfo from "./detail";
const Party: NextPage = () => {
  const SelectComplete = dynamic(() => import("./components/select"), {
    ssr: false,
  });
  const [count, setCount] = useState<number>(0);
  const [nameState, setNameState] = useState<string>("리그오브레전드");
  const [categoryState, setCategoryState] = useState<string>("LEAGUEOFLEGEND");
  const [state, setState] = useState<string>("RECENT");
  const [idState, setIdState] = useState<string>("");
  const [detailState, setDetailState] = useState<boolean>(false);
  const changeItemColor = useCallback(
    (num: number, name: string, category: string) => {
      setCount(num);
      setNameState(name);
      setCategoryState(category);
    },
    []
  );
  const changeOrderProps = useCallback((order: string) => {
    setState(order);
  }, []);
  const { status, data } = useQuery(["newparty", categoryState, state], () =>
    getPartyData(categoryState, state)
  );
  const closeDetailInfo = useCallback(() => {
    setDetailState(false);
  }, []);
  const userDatailInfo = useCallback((id: string) => {
    setIdState(id);
    setDetailState(true);
  }, []);
  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage
          error={{
            status: "",
            data: "",
          }}
        />
      ) : (
        <>
          <Header />

          <Ul>
            {detailState ? (
              <>
                <Li>
                  <DetailPartyInfo id={idState} func={closeDetailInfo} />
                </Li>
              </>
            ) : (
              <>
                <Li>
                  <MainText>
                    <span>{nameState}</span>
                    <br />
                    파티 목록 입니다.
                    <br />
                    원하는 파티를 찾아보세요!
                  </MainText>
                  <Category>
                    <TextDiv>다른 게임의 파티를 구하고 싶다면?</TextDiv>
                    {PartyData.map((item: partyDataProps, i: number) => (
                      <>
                        <li>
                          <ItemComponent
                            state={i === count}
                            props={item}
                            func={changeItemColor}
                            index={i}
                          ></ItemComponent>
                        </li>
                      </>
                    ))}
                    <TextDiv>
                      스트리밍 사이트를 같이 이용할 사람을 찾고 싶다면?
                    </TextDiv>
                    {PartyData2.map((item: partyDataProps, i: number) => (
                      <>
                        <li>
                          <ItemComponent
                            state={i + 4 === count}
                            props={item}
                            func={changeItemColor}
                            index={i + 4}
                          ></ItemComponent>
                        </li>
                      </>
                    ))}
                    <TextDiv>자신만의 파티를 만들어보세요!</TextDiv>
                    <Link href="/party/write">
                      <Button>파티만들기</Button>
                    </Link>
                  </Category>
                </Li>
              </>
            )}
            <Li>
              <Search
                type={"text"}
                placeholder="검색할 파티의 이름을 입력하세요."
              />
              <Locate2>
                <Image src={SearchImg} alt=""></Image>
              </Locate2>

              <Locate>
                <SelectComplete Data={SelectData} func={changeOrderProps} />
              </Locate>
              <BoxUl>
                {data.list.map((item: any) => (
                  <BoxLi onClick={() => userDatailInfo(item.id)}>
                    <BoardItem props={item} />
                  </BoxLi>
                ))}
              </BoxUl>
            </Li>
          </Ul>
        </>
      )}
    </>
  );
};
export default Party;
const Category = styled.ul`
  position: relative;
  width: 700px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;
  margin-bottom: 150px;
  li {
    position: relative;
    left: -40px;
  }
`;
const TextDiv = styled.div`
  position: relative;
  width: 630px;
  height: 28px;
  text-align: right;
  font: 800 normal 16px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.blue};
  margin-top: 44px;
`;
const MainText = styled.div`
  position: relative;
  top: 80px;
  width: 670px;
  height: 132px;
  line-height: 44px;
  font: 800 normal 32px ${(props) => props.theme.fonts.kr};
  text-align: right;
  margin-bottom: 94px;
  span {
    color: ${(props) => props.theme.colors.main.m6};
  }
`;
const Button = styled.div`
  position: relative;
  width: 300px;
  height: 60px;
  left: 341px;
  text-align: center;
  padding-top: 7px;
  cursor: pointer;
  font: 700 normal 32px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.white};
  background: ${(props) => props.theme.colors.main.m5};
  border-radius: 20px;
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
const Li = styled.li`
  margin-left: 109px;
`;
const Search = styled.input`
  position: relative;
  top: 60px;
  width: 400px;
  height: 42px;
  border: 1px solid #000000;
  padding-left: 15px;
  border-radius: 20px;
  font: 700 normal 14px ${(props) => props.theme.fonts.Kr};
  color: ${(props) => props.theme.colors.Extra.black};
`;
const BoxUl = styled.ul`
  position: relative;
  list-style-type: none;
`;
const BoxLi = styled.li`
  left: -40px;
  margin-bottom: 10px;
`;
const Locate = styled.div`
  position: relative;
  left: 600px;
  top: 40px;
  margin: 0;
  width: 200px;
`;
const Locate2 = styled.div`
  left: 450px;
  position: relative;
  top: 15px;
  width: 50px;
  margin: 0;
`;
