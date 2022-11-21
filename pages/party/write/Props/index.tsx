import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
const ItemComponentWrite: FC<any> = ({ props }) => {
  return (
    <>
      <Box>
        <Image src={props.image} alt="" />
        <Main>{props.name}</Main>
        <People>
          {props.min}인~{props.max}인
        </People>
      </Box>
    </>
  );
};
export default ItemComponentWrite;
const Box = styled.div`
  width: 150px;
  height: 200px;
  background: ${(props) => props.theme.colors.main.m2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-right: 24px;
  margin-top: 0px;
  padding-top: 24px;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.main.m5};
  }
`;
const Main = styled.div`
  position: relative;
  font: 800 normal 16px "Noto Sans";
  top: 20px;
`;
const People = styled.div`
  position: relative;
  font: 800 normal 16px "Noto Sans";
  color: #7c7c7c;
  top: 30px;
`;
