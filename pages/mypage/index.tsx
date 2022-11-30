import type { NextPage } from "next";
import Image from "next/image";
import Header from "../common/func/header";
import styled from "styled-components";
import { ChangeEvent, useState, useCallback } from "react";
import { SearchImg } from "../common/image";
import { useRouter } from "next/router";
import { NickNameOn } from "../common/request";
import SelectComplete from "../party/components/select";
import Footer from "../common/func/footer";
const MyPage: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [cate, setCate] = useState<string>("LOL");
  const [category, setCategory] = useState<string>("lol");
  const [nickName, setNickName] = useState<string>("");
  const router = useRouter();
  const GetCategoryProps = useCallback((cate: string) => {
    setCate(cate);
  }, []);
  const getCategoryUser = useCallback((categ: string) => {
    setCategory(categ);
  }, []);
  return (
    <>
      <Header />
      <Table>
        <Title>계정을 등록해주세요</Title>
        <LocateSelect>
          <SelectComplete
            Data={[
              { skill: "리그오브레전드", order: "lol" },
              { skill: "배틀그라운드", order: "pubg" },
            ]}
            func={getCategoryUser}
          />
        </LocateSelect>

        <Input
          type={"text"}
          placeholder="게임 계정을 등록하세요"
          onInput={(e: ChangeEvent<HTMLInputElement>) =>
            setNickName(e.target.value)
          }
        ></Input>
        <Button onClick={() => NickNameOn(category, nickName)}>등록하기</Button>
      </Table>

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
      <Footer />
    </>
  );
};
export default MyPage;
const LocateSelect = styled.div`
  position: relative;
  width: 210px;
  top: -20px;
  height: 60px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
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
  margin: 0 auto;
`;
const Table = styled.div`
  width: 600px;
  height: 350px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  background-color: #fffff0;
  text-align: center;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  font: 700 20px "Noto Sans Kr";
  color: white;
  left: 0px;
  right: 0px;
  margin: 30px auto;
  border-radius: 20px;
  line-height: 50px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.main.m6};
`;
const Input = styled.input`
  width: 300px;
  border-radius: 20px;
  padding: 0px 20px;
  height: 50px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
`;
const Title = styled.p`
  color: #808080;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 100px;
`;
