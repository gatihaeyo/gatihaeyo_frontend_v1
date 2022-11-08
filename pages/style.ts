import styled from "styled-components";

// Layout
export const Layout = styled.div`
    width: 100%;
    height: 100vh;
`;

// Image Style
export const ImageWrapper = styled.div`
    position: relative;
`;

export const ImageSubWrapper = styled.div`
    position: absolute;
    width: 620px;
    height: 491px;
    right: 20.34px;
    top: 23.31px;
    z-index: -1;
`;

// Title Style
export const TitleStage = styled.div`
    position: absolute;
    top: 310px;
    left: 240.2px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`;

export const Title1 = styled.span`
    font-family: 'NotoSansKR-Black';
    font-weight: bold;
    font-style: blod;
    font-size: 96px;
`;

export const Title2 = styled.span`
    font-family: 'NotoSansKR-Black';
    font-weight: bold;
    font-style: blod;
    font-size: 96px;
    color: #FFE75F;
`;

export const Title3 = styled.span`
    font-family: 'NotoSansKR-Black';
    font-weight: bold;
    font-style: blod;
    font-size: 96px;
`;

// About Login
export const LoginText = styled.div`
    position: absolute;
    font: 700 normal 32px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    right: 656.11px;
    top: 539.09px;
`;

export const LoginBtn = styled.button`
    position: absolute;
    font: 700 normal 32px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    background-color: #FFE75F;
    color: #ffffff;
    width: 200px;
    height: 60px;
    border-radius: 20px;
    border: none;
    right: 426.43px;
    top: 532.99px;
    :hover{
        cursor: pointer;
    }
`;

