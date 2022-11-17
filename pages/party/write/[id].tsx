import { GetStaticPaths } from "next";
import { PathData, PathData2 } from "../../common/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "../../common/func/header";
import React, { useState } from "react";
const PartyWrite = () => {
  const router = useRouter();
  const { name, max, min, state }: any = router.query;
  console.log(name, max, min, state);
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Header />
      <Table>
        <Title>
          <span>{name}</span>의 파티를 생성합니다.
        </Title>
        <Locate>
          <FamilyStyle>
            <div>파티 이름</div>
            <input type={"text"} placeholder="파티의 이름을 입력하세요." />
          </FamilyStyle>
        </Locate>
        <Locate2>
          <FamilyStyle>
            <div>모집 인원 수</div>
            <div>
              <Icon
                onClick={() => {
                  if (count > min) {
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
                    setCount(count + 1);
                  }
                }}
              >
                +
              </Icon>
            </div>
            <div>
              * 파티를 구성하기 위해서는 최소 1명 이상의 파티원이 필요합니다.
            </div>
          </FamilyStyle>
        </Locate2>
      </Table>
    </>
  );
};
export default PartyWrite;
const getStaticPaths: GetStaticPaths = () => {
  const paths: {
    params: {
      id: string;
    };
  }[] = PathData.map((item) => {
    return {
      params: {
        id: item,
      },
    };
  });
  const paths2: {
    params: {
      id: string;
    };
  }[] = PathData2.map((item) => {
    return {
      params: {
        id: item,
      },
    };
  });
  return { paths, paths2, fallback: false };
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
  div {
    position: relative;
    left: 20px;
    width: 150px;
    height: 33px;
    font: 800 normal 24px "Noto Sans";
    color: #000000;
    margin-bottom: 10px;
    + div {
      width: 350px;
      height: 42px;
      left: 10px;
      border-radius: 20px;
      border: 1px solid #929292;
      display: flex;
      justify-content: space-between;
      padding: 0px 15px;
      + div {
        left: -10px;
        top: -10px;
        border: none;
        font-weight: 400;
        font-size: 8px;
        /* identical to box height */

        /* Gray07 */

        color: #7c7c7c;
      }
    }
    + input {
      border: 1px solid #929292;
      width: 400px;
      height: 42px;
      border-radius: 20px;
      padding-left: 15px;
    }
    + textarea {
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
  left: 60px;
  top: 80px;
  width: 400px;
  height: 75px;
`;
