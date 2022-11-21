import { FC } from "react";
import styled from "styled-components";
import { Props } from "../../../common/types";
import Image from "next/image";
import { ManyPeopleImg } from "../../../common/image";
const BoardItem: FC<any> = ({ props }) => {
  return (
    <>
      <ListBox>
        <Title>{props.title}</Title>
        <Key>{props.category}</Key>
        <Locate>
          <Image src={ManyPeopleImg} alt=""></Image>
        </Locate>
        <Count>
          {props.current_personnel}/{props.personnel}
        </Count>
      </ListBox>
    </>
  );
};
export default BoardItem;
const ListBox = styled.div`
  padding-top: 20px;
  width: 800px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.main.m1};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding-left: 40px;
`;
const Title = styled.div`
  width: 550px;
  height: 30px;
  font: 800 normal 24px ${(props) => props.theme.fonts.kr};
  color: #010101;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Key = styled.div`
  position: relative;
  left: 10px;
  margin-top: 20px;
  text-align: center;
  width: min-content;
  padding: 0 15px;
  height: 20px;
  background: #ffe75f;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  padding-top: 2px;
  border-radius: 20px;
`;
const Locate = styled.div`
  position: relative;
  top: -60px;
  left: 700px;
  width: 60px;
`;
const Count = styled.div`
  position: relative;
  left: 710px;
  top: -60px;
  color: ${(props) => props.theme.colors.Gray.g7};
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  width: 100px;
`;
