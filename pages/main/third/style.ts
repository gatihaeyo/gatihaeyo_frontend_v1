import styled from "styled-components";
import Image from "next/image";

export const Page = styled.div`
    position: relative;
`;

export const ElementWrapper = styled.div`
    margin-top: 50px;
    height: 930px;
    z-index: -1;
`;

export const Oval = styled(Image)`
    z-index: -99;
`;

export const ImageWrapper = styled.div`
    position: absolute;
    top: 380px;
    left: 291.39px;
`;

// Title
export const TitleWrapper = styled.div`
    position: absolute;
    top: 190px;
    left: 470px;
    z-index: 2;
`;

export const Title1 = styled.span`
    font: 700 normal 128px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
`;

export const Title2 = styled.span`
    font: 700 normal 128px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.main.m5};
`;

// Contents
export const ContentWrapper = styled.div`
    position: absolute;
    width: 500px;
    height: 150px;
    top: 435px;
    left: 1220px;
`;

export const ContentTitle = styled.div`
    font: 700 normal 64px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    text-align: center;
    margin-bottom: 20px;
`;

export const Content = styled.div`
    font: 300 normal 32px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    text-align: center;
`;