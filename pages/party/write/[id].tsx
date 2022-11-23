/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticPaths } from "next";
import { PartyData, PartyData2 } from "../../common/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../../common/func/header";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { PartyAddImg } from "../../common/image";
import { getPartyIMade, requestCreateParty } from "../../common/request";
const PartyWrite = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { name, max, min, state, category }: any = router.query;
  const [count, setCount] = useState<number>(parseInt(min) + 1);
  const [text, setText] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const createPartyRecruitment = () => {
    if (text === "") {
      window.alert("제목을 입력해주세요");
    } else if (content === "") {
      window.alert("본문을 입력해주세요");
    } else {
      requestCreateParty(text, content, category, count).then(() => {
        getPartyIMade().then((res) =>
          router.push(`../newParty/${res.list[0].id}`)
        );
      });
    }
  };
  return (
    <>
      <Header />
      <Table>
        <Title>
          <span>{name}</span>의 파티를 생성합니다.
        </Title>
        {state === "true" ? (
          <>
            <Locate5>
              <FamilyStyle>
                <div>공유할 서비스의 계정</div>
                <input
                  type={"text"}
                  placeholder="이용할 이메일을 입력해주세요."
                />
              </FamilyStyle>
            </Locate5>
          </>
        ) : (
          <></>
        )}
        <Locate>
          <FamilyStyle>
            <div>파티 이름</div>
            <input
              type={"text"}
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
              }
              placeholder="파티의 이름을 입력하세요."
            />
          </FamilyStyle>
        </Locate>
        <Locate2>
          <FamilyStyle>
            <div>모집 인원 수</div>
            <div>
              <Icon
                onClick={() => {
                  if (count > parseInt(min) + 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </Icon>
              {count}명
              <Icon
                onClick={() => {
                  if (count < max) {
                    let asdf: number = count;
                    setCount(++asdf);
                  }
                }}
              >
                +
              </Icon>
            </div>
          </FamilyStyle>
        </Locate2>
        <Locate3>
          <FamilyStyle>
            <div>파티 설명</div>
            <textarea
              placeholder="파티의 설명을 간략하게 입력하세요."
              onInput={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
            ></textarea>
          </FamilyStyle>
        </Locate3>
        <SubmitButton onClick={() => createPartyRecruitment()}>
          파티 모집 글 생성하기
        </SubmitButton>
        <Locate4>
          <Image src={PartyAddImg} alt="" width={700} height={700} />
        </Locate4>
      </Table>
    </>
  );
};
export default PartyWrite;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {
    params: {
      id: string;
    };
  }[] = PartyData.map((item) => {
    return {
      params: {
        id: item.category,
      },
    };
  });
  const paths2: {
    params: {
      id: string;
    };
  }[] = PartyData2.map((item) => {
    return {
      params: {
        id: item.category,
      },
    };
  });
  return {
    paths: [...paths, ...paths2],
    fallback: false,
  };
};
export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      params,
    },
  };
};
const Title = styled.div`
  position: relative;
  width: 900px;
  height: 68px;
  font: 800 normal 50px "Noto Sans";
  color: ${(props) => props.theme.colors.Extra.black};
  span {
    color: #f6da44;
  }
`;
const FamilyStyle = styled.div`
  height: 500px;
  div {
    position: relative;
    left: 20px;
    width: 300px;
    height: 33px;
    font: 800 normal 24px "Noto Sans";
    color: #000000;
    margin-bottom: 10px;
    + div {
      width: 350px;
      padding: 0px 15px;
      height: 42px;
      left: 10px;
      border-radius: 20px;
      border: 1px solid #929292;
      display: flex;
      justify-content: space-between;
      line-height: 42px;
    }
    + input {
      border: 1px solid #929292;
      width: 400px;
      height: 42px;
      border-radius: 20px;
      padding-left: 15px;
      font: 800 normal 24px "Noto Sans";
      color: #000000;
      ::placeholder {
        color: #ccc;
      }
      :-webkit-input-placeholder {
        color: #ccc;
      }
      :-ms-input-placeholder {
        color: #ccc;
      }
    }
    + textarea {
      box-sizing: border-box;
      white-space: pre-line;
      word-break: break-all;
      border-radius: 10px;
      white-space: pre-wrap;
      resize: none;
      width: 840px;
      height: 300px;
      border: 1px solid #929292;
      border-radius: 20px;
      padding: 10px 15px;
    }
  }
`;
const Icon = styled.span`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-top: 2px;
  :hover {
    color: #7c7c7c;
  }
`;
const Table = styled.div`
  position: relative;
  width: 810px;
  height: 733px;
  top: 139px;
  left: 150px;
`;
const Locate = styled.div`
  position: relative;
  top: 80px;
  display: inline-flex;
  width: 400px;
  height: 75px;
`;
const Locate2 = styled.div`
  position: relative;
  display: inline-flex;
  left: 50px;
  top: 80px;
  width: 350px;
  height: 75px;
`;
const Locate3 = styled.div`
  position: relative;
  width: 810px;
  height: 300px;
  top: 150px;
`;
const Locate4 = styled.div`
  width: 800px;
  height: 700px;
  position: relative;
  left: 900px;
  top: -550px;
`;
const SubmitButton = styled.div`
  position: relative;
  width: 500px;
  height: 70px;
  text-align: center;
  background-color: #f6da44;
  border-radius: 20px;
  margin: 50px auto;
  top: 180px;
  padding-top: 22px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  cursor: pointer;
`;
const Locate5 = styled.div`
  position: relative;
  top: 10px;
  height: 30px;
`;
