import styled from "styled-components";

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageSubWrapper = styled.div`
    width: 200px;
    height: 200px;
    margin-top: 77.01px;
    background-color: #F6DA44;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 50px;
`;

export const CircleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    width: 250px;
    text-align: center;
    margin-left: 135px;
    margin-right: 135px;
`;

export const Title = styled.div`
    font: 700 normal 40px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
    margin-bottom: 20px;
`;

export const Text = styled.div`
    font: 300 normal 32px ${(props) => props.theme.fonts.kr};
    color: ${(props) => props.theme.colors.Extra.black};
`;