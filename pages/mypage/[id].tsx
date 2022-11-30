import styled from "styled-components";
import { ChangeEvent, useState, useCallback } from "react";
import { SearchImg } from "../common/image";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../common/func/header";
import type { NextPage } from "next";
import SelectComplete from "../party/components/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingPage from "../common/status/loading";
import ErrorPage from "../common/status/error";
const MyPageProps: NextPage = () => {
  const router = useRouter();
  const { category, content, id } = router.query;
  const { status, data } = useQuery(
    ["getUserGameList", content, category],
    async () => {
      const { data } = await axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BASE_URL + "/users/game",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        params: {
          nickname: content,
          category: category,
        },
      });
      return data;
    }
  );
  const [text, setText] = useState<string>("");
  const [cate, setCate] = useState<string>(category as string);
  const GetCategoryProps = (cate: string) => {
    setCate(cate);
  };

  return (
    <>
      {status === "loading" ? (
        <LoadingPage />
      ) : status === "error" ? (
        <ErrorPage
          error={{
            status: "500",
            data: "서버에러입니다..",
          }}
        />
      ) : (
        <>
          <Header />
          <Locate>
            <Locate3>
              <SelectComplete
                Data={[
                  { skill: "리그오브레전드", order: "LOL" },
                  { skill: "배틀그라운드", order: "BG" },
                ]}
                func={GetCategoryProps}
              />
            </Locate3>
            <Search
              type={"text"}
              placeholder="전적검색을 해주세요."
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  router.push({
                    pathname: "/mypage/search",
                    query: {
                      category: cate,
                      content: text,
                    },
                  });
                }
              }}
            />
            <Locate2>
              <Image
                src={SearchImg}
                alt=""
                onClick={() =>
                  router.push({
                    pathname: "/mypage/search",
                    query: {
                      category: cate,
                      content: text,
                    },
                  })
                }
              ></Image>
            </Locate2>
          </Locate>
          <Box>
            <div>닉네임: {content}</div>
            <div>분류: {data.type}</div>
            <div>
              티어: {data.tier} {data.rank} {data.point}점
            </div>
            <div>승률 {data.winRatio}%</div>
          </Box>
        </>
      )}
    </>
  );
};
export default MyPageProps;
const Box = styled.div`
  width: 600px;
  height: 300px;
  margin: -20px auto;
  border-radius: 20px;
  background-color: #fffff0;
  text-align: center;
  div {
    font: 700 normal 32px "Noto Sans";
    line-height: 75px;
    color: #808080;
    + div {
      color: #8ace55;
      + div {
        color: ${(props) => props.theme.colors.main.m6};
        + div {
          color: #4000ff;
        }
      }
    }
  }
`;
const Locate = styled.div`
  width: 980px;
  height: 100px;
  margin: 100px auto;
  justify-content: space-between;
  display: flex;
`;
const Search = styled.input`
  position: relative;
  width: 600px;
  height: 42px;
  border: 1px solid #000000;
  padding-left: 15px;
  border-radius: 20px;
  font: 700 normal 14px ${(props) => props.theme.fonts.Kr};
  color: ${(props) => props.theme.colors.Extra.black};
`;
const Locate2 = styled.div`
  position: relative;
  width: 50px;
  top: 5px;
  margin: 0;
`;
const Locate3 = styled.div`
  position: relative;
  width: 200px;
  height: 60px;
  margin: 0;
`;
