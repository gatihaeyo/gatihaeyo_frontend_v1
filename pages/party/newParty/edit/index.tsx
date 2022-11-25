import styled from "styled-components";
import { newPartyList } from "../../../common/request";
import EditUserCard from "../editUser";
import Image from "next/image";
import React, { useState } from "react";
import { ConfirmImg, UpImg, DownImg } from "../../../common/image";
import { PartyData, PartyData2 } from "../../../common/data";
const EditUserParty = ({ data, func }: any) => {
  const Arr = [...PartyData, ...PartyData2];
  const asdf = Arr.findIndex((item) => item.category === data[0].category);
  const min = Arr[asdf].min;
  const max = Arr[asdf].max;
  const [count, setCount] = useState(data[0].current_personnel);
  const NewPartyList = () => {
    newPartyList(data[0].id).then(() => window.alert("정렬되었습니다."));
  };
  return (
    <>
      <Table>
        <ArrowBack onClick={() => func(false)}>←</ArrowBack>
        <Asdf>
          <ul>
            {data[1].list.map((item: any) => (
              <>
                <li>
                  <EditUserCard props={item} id={data[0].id} />
                </li>
              </>
            ))}
          </ul>
        </Asdf>
        <AsdfRight>
          <NewButtonProps onClick={() => NewPartyList()}>
            파티 목록 갱신
          </NewButtonProps>
          <Title>방 제목 바꾸기</Title>
          <InputProps>
            <Input type={"text"} placeholder={data[0].title} />
            <CornfirmBtn>
              <Image src={ConfirmImg} alt=""></Image>
            </CornfirmBtn>
          </InputProps>
          <Inwon>인원 수 변경</Inwon>
          <NumInput>
            <Number>{count}명</Number>
            <ImgLocation>
              <Image
                src={UpImg}
                alt=""
                onClick={() => {
                  if (max > count) setCount(count + 1);
                }}
              ></Image>
              <Image
                src={DownImg}
                alt=""
                onClick={() => {
                  if (count > min) setCount(count - 1);
                }}
              ></Image>
            </ImgLocation>
          </NumInput>
        </AsdfRight>
      </Table>
    </>
  );
};
export default EditUserParty;
const Table = styled.div`
  display: flex;
  width: 1330px;
  height: 748px;
  background: #ededed;
  margin: 80px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;
const Asdf = styled.div`
  position: relative;
  display: inline-flex;
  top: 70px;
  ul {
    display: flex;
    list-style-type: none;
    width: 650px;
    overflow-x: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    height: 700px;
    li {
    }
  }
`;
const AsdfRight = styled.div`
  padding-top: 100px;
  width: 600px;
  height: 700px;
  text-align: center;
`;
const NewButtonProps = styled.div`
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 50px;
  background: #8ace55;
  padding-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 31px;
  cursor: pointer;
  color: #000000;
`;
const Title = styled.div`
  position: relative;
  margin-top: 60px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 31px;
  color: #000000;
`;
const InputProps = styled.div`
  margin-top: 10px;
  div {
    display: inline-flex;
  }
`;
const CornfirmBtn = styled.div`
  position: relative;
  top: 15px;
  cursor: pointer;
`;
const Input = styled.input`
  margin-right: 20px;
  width: 333px;
  height: 44px;
  padding-left: 15px;
  background: #ffffff;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  border: 1px solid #929292;
  border-radius: 20px;
  :focus {
    outline: #929292;
  }
`;
const Inwon = styled.div`
  margin-top: 40px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 31px;
  color: #000000;
`;
const NumInput = styled.div`
  display: inline-block;
  width: 106px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #929292;
  padding-top: 5px;
  border-radius: 20px;
`;
const Number = styled.div`
  position: relative;
  margin-right: 30px;
  top: 5px;
  display: inline-flex;
`;
const ImgLocation = styled.div`
  position: relative;
  display: inline-flex;
  width: 10px;
  overflow: hidden;
  flex-wrap: wrap;
`;
const ArrowBack = styled.div`
  position: relative;
  top: 15px;
  left: 25px;
  font: 700 32px "Noto Sans";
  cursor: pointer;
`;
