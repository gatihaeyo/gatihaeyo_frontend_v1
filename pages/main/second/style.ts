import styled from "styled-components";

interface AnimationProps {
    delay: number;
}

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageSubWrapper = styled.div<AnimationProps>`
    width: 200px;
    height: 200px;
    margin-top: 77.01px;
    background-color: #F6DA44;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin: 50px;
    animation-name: Blink;
    animation-direction: normal;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes Blink {
        0%{
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.4);
        }
        100%{
            opacity: 1;
        }
    }
    animation-delay: ${(props) => props.delay}s;

`;

export const CircleWrapper = styled.div<AnimationProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px;
    animation-name: Blink;
    animation-direction: normal;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes Blink {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    animation-delay: ${(props) => props.delay}s;
`;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const TitleWrapper = styled.div`
    width: 250px;
    text-align: center;
    margin-left: 133px;
    margin-right: 133px;
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