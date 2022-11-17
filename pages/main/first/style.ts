import styled from "styled-components";

// Image Style
export const ImageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;  

export const ImageSubWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 620px;
    height: 491px;
    z-index: -1;
`;

// Title Style
export const Page = styled.div`
    margin-top: 23.31px;
    position: relative ;
`;

export const TitleWrapper = styled.div`
    position: absolute;
    margin-top: 200px;
    margin-left: 300px;
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
    right: 406.43px;
    top: 532.99px;
    :hover{
        cursor: pointer;
    }
    box-shadow: -3px 3px 3px grey;
`;

