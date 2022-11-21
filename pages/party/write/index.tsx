import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../../common/func/header";
import { MoklokData, PartyData, PartyData2 } from "../../common/data";
import React, { useState, useCallback } from "react";
import ItemComponentWrite from "./Props";
import Link from "next/link";
import path from "path";
import { partyDataProps } from "../../common/types";
const PartyWrite: NextPage = () => {
  const [state, setState] = useState<number>(0);
  const Fox = useCallback((i: number) => {
    setState(i);
  }, []);
  return (
    <>
      <Header />
      <Title>
        어떤 서비스의<span>파티</span>를 만드시겠습니까?
      </Title>
      <Box>
        {MoklokData.map((item, i) => (
          <>
            <Li onClick={() => Fox(i)} state={i === state}>
              {item}
            </Li>
          </>
        ))}
      </Box>
      <Category>
        {state !== 2 ? (
          <>
            {PartyData.map((item: partyDataProps, i) => (
              <>
                <Link
                  href={{
                    pathname: `/party/write/${item.category}`,
                    query: { ...item, state: false },
                  }}
                  as={`/party/write/${item.category}`}
                >
                  <li>
                    <ItemComponentWrite props={item} />
                  </li>
                </Link>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
        {state !== 1 ? (
          <>
            {PartyData2.map((item: partyDataProps, i) => (
              <>
                <Link
                  href={{
                    pathname: `/party/write/${item.category}`,
                    query: { ...item, state: true },
                  }}
                  as={`/party/write/${item.category}`}
                >
                  <li>
                    <ItemComponentWrite props={item} />
                  </li>
                </Link>
              </>
            ))}
          </>
        ) : (
          <></>
        )}
      </Category>
    </>
  );
};

export default PartyWrite;
const Title = styled.div`
  position: relative;
  width: 870px;
  height: 68px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 150px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 68px;

  color: #010101;
  span {
    color: #ffe75f;
  }
`;
const Box = styled.ul`
  position: relative;
  width: 448px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0 auto;
  top: 250px;
`;
const Li = styled.li<{ state: boolean }>`
  width: 100px;
  height: 30px;
  padding-top: 8px;
  text-align: center;
  background: #ffe75f;
  border-radius: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  /* identical to box height */
  cursor: pointer;
  color: ${(props) => (!props.state ? "#7C7C7C" : "#000000")};
`;
const Category = styled.ul`
  position: relative;
  width: 700px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;
  margin: 300px auto;
  li {
    position: relative;
    margin-bottom: 20px;
  }
`;
