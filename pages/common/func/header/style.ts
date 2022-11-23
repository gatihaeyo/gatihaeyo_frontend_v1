import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoWrapper = styled.div`
  padding-left: 63px;
  :hover {
    cursor: pointer;
  }
`;

export const CategoryStage = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const Category = styled.div`
  font-size: 24px;
  padding-left: 18.37px;
  font-family: "NotoSansKR-Medium";
  font-weight: bold;
  font-style: bold;
  :hover {
    cursor: pointer;
  }
`;

export const BellWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding-left: 30.85px;
  :hover {
    cursor: pointer;
  }
`;

export const UserIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  padding-left: 30.05px;
  padding-right: 61.7px;
  :hover {
    cursor: pointer;
  }
`;
export const Alarm = styled.span`
  position: relative;
  left: 30px;
  height: 20px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  top: -10px;
  color: #ce6b55;
`;
