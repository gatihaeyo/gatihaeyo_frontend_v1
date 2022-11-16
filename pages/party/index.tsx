import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { PartyData, PartyData2 } from "../common/data";
import React, { useState, useCallback } from "react";
import { partyDataProps } from "../common/types";
import ItemComponent from "./components";
const Party: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  const [nameState, setNameState] = useState<string>("");
  const changeItemColor = (num: number, name: string) => {
    setCount(num);
    setNameState(name);
  };
  return (
    <>
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
        <TextDiv>스트리밍 사이트를 같이 이용할 사람을 찾고 싶다면?</TextDiv>
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
        <Button>파티만들기</Button>
      </Category>
    </>
  );
};
export default Party;
const Category = styled.ul`
  position: relative;
  width: 700px;
  height: auto;
  left: 103px;
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
  left: 103px;
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
  font: 700 normal 32px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.white};
  background: ${(props) => props.theme.colors.main.m5};
  border-radius: 20px;
`;
