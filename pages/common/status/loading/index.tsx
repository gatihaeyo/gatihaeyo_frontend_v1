import Image from "next/image";
import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { LoadingImg } from "../../image";
const LoadingPage: FC = () => {
  return (
    <>
      <Box>
        <Turn>
          <Image
            src={LoadingImg}
            alt="로딩중..."
            width={300}
            height={300}
          ></Image>
        </Turn>
        <Ing>로딩중입니다.</Ing>
        <Content>
          F5버튼 연타한다고 로딩이
          <br />
          빨라지거나 하지는 않습니다.
        </Content>
      </Box>
    </>
  );
};

export default LoadingPage;
const turn = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Turn = styled.div`
  animation: ${turn} 2.5s linear infinite;
  display: inline-block;
`;
const Box = styled.div`
  position: relative;
  top: 174px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 600px;
  height: 691px;
  text-align: center;
`;
const Ing = styled.p`
  font: 700 normal 64px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.black};
`;
const Content = styled.p`
  font: 500 normal 48px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Gray.g4};
`;
