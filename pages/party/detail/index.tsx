import styled from "styled-components";
import { getShowDetailInfo, requestPartyInclude } from "../../common/request";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { CrownImg } from "../../common/image";
const DetailPartyInfo = ({ id, func }: any) => {
  const { status, data }: any = useQuery(
    ["showDetail", id],
    () => getShowDetailInfo(id),
    {
      keepPreviousData: true,
    }
  );
  return (
    <>
      <Box>
        {status === "loading" ? (
          <></>
        ) : status === "error" ? (
          <></>
        ) : (
          <>
            <HeaderTable>
              {data[0].title} <ExitButton onClick={() => func(false)} />
            </HeaderTable>
            <Ul>
              {data[1].list.map((item: any, i: number) => (
                <>
                  <UserCard>
                    {i === 0 ? (
                      <ImgLocation>
                        <Image src={CrownImg} alt=""></Image>
                      </ImgLocation>
                    ) : (
                      <></>
                    )}
                    <ImgProps width={i === 0 ? 0 : 20}>
                      {item.profile_image_path.slice(-4) ===
                      (".jpg" || ".png" || ".svg") ? (
                        <>
                          <Image
                            src={item?.profile_image_path}
                            alt=""
                            width={100}
                            height={100}
                          ></Image>
                        </>
                      ) : (
                        <></>
                      )}
                    </ImgProps>
                    <UserName>{item.nickname}</UserName>
                  </UserCard>
                </>
              ))}
            </Ul>
            <SubmitButton
              onClick={() =>
                requestPartyInclude(id)
                  .then(() => {
                    func(false);
                    window.alert("파티가 정상 신청되었습니다");
                  })
                  .catch(() => {
                    func(false);
                    window.alert("이미 신청한 파티입니다.");
                  })
              }
            >
              파티 입장 신청하기
            </SubmitButton>
          </>
        )}
      </Box>
    </>
  );
};
export default DetailPartyInfo;
const ImgLocation = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  left: 130px;
`;
const SubmitButton = styled.div`
  position: relative;
  top: 200px;
  width: 500px;
  height: 70px;
  background: #f6da44;
  margin: 0 auto;
  border-radius: 20px;
  line-height: 44px;
  font: 700 normal 32px "Noto Sans";
  color: #ffffff;
  padding-top: 20px;
  text-align: center;
  cursor: pointer;
`;
const ImgProps = styled.div<{ width: number }>`
  margin: ${(props) => props.width}px auto;
  background: #d9d9d9;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserName = styled.p`
  font: 800 normal 16px "Noto Sans";
  color: #000000;
`;
const UserCard = styled.div`
  width: 170px;
  height: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
`;
const Box = styled.div`
  width: 700px;
  height: 854px;
  background: #fcfcfc;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 50px;
`;
const HeaderTable = styled.div`
  width: 700px;
  height: 70.33px;
  left: 180.5px;
  top: 113px;
  background: #ffffc6;
  border-radius: 20px 20px 0px 0px;
  text-align: center;
  padding-top: 10px;
  font: 800 normal 35px "Noto Sans";
  color: #000000;
`;
const Ul = styled.ul`
  position: relative;
  top: 100px;
  display: flex;
  list-style-type: none;
  width: 750px;
  height: 440px;
  overflow-x: hidden;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
`;
const ExitButton = styled.div`
  position: relative;
  left: 660px;
  top: -50px;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Crect y='0.825195' width='20' height='19.8605' fill='url(%23pattern0)'/%3E%3Cdefs%3E%3Cpattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_516_503' transform='translate(0 -0.00351286) scale(0.00195312 0.00196685)'/%3E%3C/pattern%3E%3Cimage id='image0_516_503' width='512' height='512' xlink:href='data:image/png;base64,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'/%3E%3C/defs%3E%3C/svg%3E%0A");
`;
