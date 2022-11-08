import { FC } from "react";
import styled from "styled-components";
import { errorType } from "../../types";
import Link from "next/link";
import { useRouter } from "next/router";
const ErrorPage: FC<errorType> = (props) => {
  const { status, data } = props.error;
  const router = useRouter();
  return (
    <>
      <Box>
        <Title>{status}</Title>
        <ErrorMessage>{data}</ErrorMessage>
        <Content>
          페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
          <br />
          존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가
          <br />
          정확한지 다시 한 번 확인해 주시기 바랍니다.
        </Content>
        <BtUl>
          <BtLi>
            <Button onClick={() => router.back()}>이전화면</Button>
          </BtLi>
          <Link href="/">
            <BtLi>
              <Button>메인화면</Button>
            </BtLi>
          </Link>
        </BtUl>
      </Box>
    </>
  );
};

export default ErrorPage;
const Box = styled.div`
  position: relative;
  width: 1250px;
  height: 975px;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -300px;
`;
const Title = styled.p`
  color: ${(props) => props.theme.colors.Extra.red};
  font: 700 normal 300px ${(props) => props.theme.fonts.kr};
`;
const ErrorMessage = styled.div`
  position: relative;
  width: 800px;
  flex-wrap: wrap;
  display: inline-block;
  font: 500 normal 64px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.black};
  top: -300px;
`;
const Content = styled.p`
  position: relative;
  top: -300px;
  font: 400 normal 48px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Gray.g4};
`;
const Button = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.main.m5};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font: 500 normal 24px ${(props) => props.theme.fonts.kr};
  color: ${(props) => props.theme.colors.Extra.white};
  cursor: pointer;
  padding-top: 15px;
  :hover {
    background-color: ${(props) => props.theme.colors.main.m3};
  }
`;
const BtUl = styled.ul`
  position: relative;
  display: flex;
  list-style-type: none;
  top: -300px;
  width: 610px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const BtLi = styled.li`
  margin-right: 125px;
  margin-left: 15px;
`;
