import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    z-index: 999;
`;

export const LogoWrapper = styled.div`
    width: 200px;
    height: 50px;
    margin-top: 60px;
    margin-right: 250px;
`;

export const ContentWrapper = styled.div`
    margin-top: 60px;
    margin-right: 150px;
`;

export const Contents = styled.div`
    font: 700 normal 32px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    margin-bottom: 15px;
`;

export const Text = styled.div`
    font: 700 normal 24px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
`;

export const SortText = styled.div`
    font: 700 normal 24px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.white};
    text-align: center;
`;