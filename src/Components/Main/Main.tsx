import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll"
import React, { useEffect, useState } from "react";
import { Link as Li } from "react-router-dom";
import One from "./Images/2_censored2.jpg"
import Two from "./Images/55.png"
import Three from "./Images/66_censored.jpg"
import T from "./Images/77.png"
import Five from "./Images/8.png"
export const Animation = keyframes`
    0%{
        opacity : 0;
    }
    30%{
        opacity: 0;
    }
    100%{
        opacity: 0.6;
    }
`
export const Box = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /*background : url("https://an2-img.amz.wtchn.net/image/v2/CfFOq6D__lgxqxVn33d_4w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkVE41YTJ4dmNEWnBOMjE0T0hGa2NIUjFabVVpZlEucGdwM3BJemhPVjRnLWowS1ZTSkd1emF4NXBRel9XTnFKZ3l3NHVTZktkaw") center center / cover no-repeat ;
*/
`

const Text = styled.div`
    position: absolute;
    text-align : center;
    z-index : 100;
    align-items: center;
    color: white;
`
const Span = styled.span`
    display: block;
    font-weight : 400;
    font-size: 3.4722222222222223vw;
    margin-bottom: 1.111111111111vw;
    letter-spacing: -0.2430555555vw;
    line-height: 4.375vw;
`
const H4 = styled.h4`
    display : block;
    font-weight: 400;
    font-size : 1.527777777777777vw;
    opacity: 0.65;
    letter-spacing: -0.04861111111111111vw;
    margin-bottom:3.75vw;
`
const First = styled(Box).attrs({ id: "1" })`
    ::before{
    content :""  ;
    
    background : url(${One}) center center / cover no-repeat;

    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.4;
}`

//background : url("https://an2-img.amz.wtchn.net/image/v2/CfFOq6D__lgxqxVn33d_4w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkVE41YTJ4dmNEWnBOMjE0T0hGa2NIUjFabVVpZlEucGdwM3BJemhPVjRnLWowS1ZTSkd1emF4NXBRel9XTnFKZ3l3NHVTZktkaw") center center / cover no-repeat;

const Second = styled(Box).attrs({ id: "2" })`
::before{
    content :""  ;
    background : url(${T}) center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.4;
}
`
const Third = styled(Box).attrs({ id: "3" })`
::before{
    content :""  ;
    background : url(${Three}) center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.4;
}
`
const Fourth = styled(Box).attrs({ id: "4" })`
    ::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/ii6wJCYLACBS7sru0oZhkA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZhbVppYzNSd1pYZDVlSEUxYUhod01tNWtaR1lpZlEuN0dkd0pkOTJrMWZoUzFrXzVhS3JNbG05c0dPZ0hFaU5wQnloeTlrRWdtdw") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.4;
}
`
const Fifth = styled(Box).attrs({ id: "5" })`
    ::before{
    content :""  ;
    background : url(${Five}) center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.4;
}
`
const Button = styled.div`
    display: inline-flex;
    background-color: ${props => props.theme.buttonColor};
    height : 4.16666666666vw;
    width: auto;
    min-width : 10.125vw;
    justify-content: center;
    border-radius: 2.08333333vw;
    text-align: center;
    font-size: 1.38888888888vw;
    font-weight:700;
    padding: 0 1.5625vw;
    align-items: center;
`

const Circle = styled.div`
    position : absolute;
    bottom: 5.2083333333333vw;
    left : 50%;
    transform: translate(-50%, 0);


`
const DownArrow = styled.button`
position: relative;
    width:3.33333333333333333vw;
    height:3.33333333333333333vw;
    transform : rotate3d(0,0,1,-90deg);
    border-radius : 50%;
    border : 1px solid white;

    z-index: 100;
    background : url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOS42OTM2MTY4IDExLjIxODg4IDQuOTU1ODk4OTUgMTEuMjE4ODggMTEuMTk2NzA3NCAxNy4zOTU0MTg5IDkuNDgxNDQgMTkuMDkyNDk2OCAwLjMgMTAuMDA1NjQyMSAyLjAxNTI2NzM3IDguMzA4NTY0MjEgMi4wMTU4NzM2OCA4LjMwOTE3MDUzIDkuNDgxNDQgMC45MiAxMS4xOTY3MDc0IDIuNjE3MDc3ODkgNC45NTU4OTg5NSA4Ljc5MzYxNjg0IDE5LjY5MzYxNjggOC43OTM2MTY4NCI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4=") center no-repeat;
    background-size : 1.736111111vw 1.7361111111111111vw;
    cursor: pointer;
`
const UpArrow = styled.button`
position: relative;
    width:3.33333333333333333vw;
    height:3.33333333333333333vw;
    transform : rotate3d(0,0,1,90deg);
    border-radius : 50%;
    border : 1px solid white;

    z-index: 100;
    background : url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5BcnRib2FyZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOS42OTM2MTY4IDExLjIxODg4IDQuOTU1ODk4OTUgMTEuMjE4ODggMTEuMTk2NzA3NCAxNy4zOTU0MTg5IDkuNDgxNDQgMTkuMDkyNDk2OCAwLjMgMTAuMDA1NjQyMSAyLjAxNTI2NzM3IDguMzA4NTY0MjEgMi4wMTU4NzM2OCA4LjMwOTE3MDUzIDkuNDgxNDQgMC45MiAxMS4xOTY3MDc0IDIuNjE3MDc3ODkgNC45NTU4OTg5NSA4Ljc5MzYxNjg0IDE5LjY5MzYxNjggOC43OTM2MTY4NCI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4=") center no-repeat;
    background-size : 1.736111111vw 1.7361111111111111vw;
    cursor: pointer;
`

const Right = styled.div`
    position : fixed;
    top: 50%;
    right: 50px;
    z-index:499;
    transform : translateY(-50%);
`
const RightCircle = styled.div`
    background-color: ${props => props.theme.textColor};
    width: 1.25vw;
    height: 1.25vw;
    border-radius: 50%;
    margin : 0 0 1.1111111111111111111112vw;
    cursor : pointer;
    opacity : 0.2;
`
const AccentRightCircle = styled(RightCircle)`
    opacity: 1;
`

export const Nav = styled.nav`
    position : fixed;
    top : 0px;
    z-index: 400;
    font-size: 14px;
    letter-spacing: -0.4px;
    width: 100%;
    height: 72px;
    padding : 0 4%;

    
`
const NavH = styled(Nav)`
    background-color: rgb(3, 7, 8);
`
export const Logo = styled.div`
    position:  relative;
    z-index: 1000;
    float: left;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg==') 0 21px no-repeat;
    background-size: contain;
    width: 94px;
    height: 72px;

`
export const Login = styled.div`
    color: #121218;
    display: flex;
    position: relative;
    background: ${props => props.theme.textColor};
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.3px;
    padding: 7px 18px 8px;
    border-radius: 40px;
    margin: 23px 0 0;
    float: right;
    right: -11px;

`
const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
};

function Main() {
    const [fCircle, setFCircle] = useState<boolean>(true);
    const [sCircle, setSCircle] = useState<boolean>(false);
    const [tCircle, setTCircle] = useState<boolean>(false);
    const [foCircle, setFoCircle] = useState<boolean>(false);
    const [fiCircle, setFiCircle] = useState<boolean>(false);
    const [height, setHeight] = useState<boolean>(false);
    const [state, setState] = useState({ x: 0, y: 0 });
    const fPicture = React.useRef<HTMLDivElement>(null);
    const sPicture = React.useRef<HTMLDivElement>(null);
    const tPicture = React.useRef<HTMLDivElement>(null);
    const foPicture = React.useRef<HTMLDivElement>(null);
    const fiPicture = React.useRef<HTMLDivElement>(null);

    /*
        const target = document.getElementById('2');
        const clientRect = target?.getBoundingClientRect();
        const relativeTop = clientRect.top;
    */

    const FirstClick = () => {
        setFCircle(true);
        setSCircle(false);
        setTCircle(false);
        setFoCircle(false);
        setFiCircle(false);
    }
    const SecondClick = () => {
        setFCircle(false);
        setSCircle(true);
        setTCircle(false);
        setFoCircle(false);
        setFiCircle(false);
    }
    const ThirdClick = () => {
        setFCircle(false);
        setSCircle(false);
        setTCircle(true);
        setFoCircle(false);
        setFiCircle(false);
    }
    const FourthClick = () => {
        setFCircle(false);
        setSCircle(false);
        setTCircle(false);
        setFoCircle(true);
        setFiCircle(false);
    }
    const FifthClick = () => {
        setFCircle(false);
        setSCircle(false);
        setTCircle(false);
        setFoCircle(false);
        setFiCircle(true);
    }

    const moveScroll = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const trackHeight = () => {
        if (window.pageYOffset < window.innerHeight / 2) {
            FirstClick();
            moveScroll(fPicture);
        } else if (window.pageYOffset >= window.innerHeight / 2 && window.pageYOffset < window.innerHeight * 3 / 2) {
            SecondClick();
            moveScroll(sPicture);
        } else if (window.pageYOffset >= window.innerHeight * 3 / 2 && window.pageYOffset < window.innerHeight * 5 / 2) {
            ThirdClick();
            moveScroll(tPicture);
        } else if (window.pageYOffset >= window.innerHeight * 5 / 2 && window.pageYOffset < window.innerHeight * 7 / 2) {
            FourthClick();
            moveScroll(foPicture);
        } else if (window.pageYOffset >= window.innerHeight * 7 / 2 && window.pageYOffset < window.innerHeight * 9 / 2) {
            FifthClick();
            moveScroll(fiPicture);
        }

    }

    useEffect(() => {
        setTimeout(trackHeight, 2000);
    }, [window.scrollY]);

    const { y } = useScroll();
    useEffect(() => {
        if (y > 0) {
            setHeight(true)
        }
        else {
            setHeight(false)
        }
    }, [y]);

    return (
        <>
            {height ? <NavH><Li to='/'><Logo /></Li><Li to='sign_in'><Login>로그인</Login></Li></NavH> : <Nav><Li to='/'><Logo /></Li><Li to='sign_in'><Login>로그인</Login></Li></Nav>}
            <First ref={fPicture}>
                <Text>
                    <Span>임정민의 종합 포트폴리오 & 프로필<br /></Span>
                    <H4>인적사항, 프로젝트 , 경력을 한 눈에 보려면</H4>
                    <Li to="/portfolio/profile"><Button>보러 가기</Button></Li>
                </Text>
                <Circle><Link to="2" spy={true} smooth={true}><DownArrow onClick={SecondClick} /></Link></Circle>
            </First>
            <Second ref={sPicture} >
                <Text >
                    <Span>Cheating Detection <br /></Span>
                    <H4>시험 플랫폼에 딥러닝 모델을 결합하여 부정행위를 탐지하는 프로젝트</H4>
                    <Li to="/start"><Button>보러 가기</Button></Li>
                </Text>
                <Circle><Link to="3" spy={true} smooth={true}><DownArrow onClick={ThirdClick} /></Link></Circle>
            </Second>
            <Third ref={tPicture}>
                <Text>
                    <Span>IMSAFE<br /></Span>
                    <H4>중앙보훈병원과 협업하여 독거노인의 데이터를 분석하거나 <br />낙상등의 응급상황을 탐지하고 보호자에게 자동으로 연락하는 프로젝트</H4>
                    <Li to="/start"><Button>보러 가기</Button></Li>
                </Text>
                <Circle><Link to="4" spy={true} smooth={true}><DownArrow onClick={FourthClick} /></Link></Circle>
            </Third>
            <Fourth ref={foPicture}>
                <Text>
                    <Span>My STOCK MBTI<br /></Span>
                    <H4>MBTI 테스트 결과에 따른 주식종목을 추천 해주는 React만 사용한 21년 초 첫번째 프로젝트</H4>
                    <Li to="/start"><Button>보러 가기</Button></Li>
                </Text>
                <Circle><Link to="5" spy={true} smooth={true}><DownArrow onClick={FifthClick} /></Link></Circle>
            </Fourth>
            <Fifth ref={fiPicture}>
                <Text>
                    <Span>Fruits Classification<br /></Span>
                    <H4>다양한 머신러닝, 딥러닝 모델을 이용한 과일 사진을 학습하고 파라미터를 조정하며 정확도를 비교하는 프로젝트</H4>
                    <Li to="/start"><Button>보러 가기</Button></Li>
                </Text>
                <Circle><Link to="1" spy={true} smooth={true}><UpArrow onClick={FirstClick} /></Link></Circle>
            </Fifth>
            <Right>
                {fCircle ? <Link to="1" spy={true} smooth={true}><AccentRightCircle onClick={FirstClick} /></Link> : <Link to="1" spy={true} smooth={true}><RightCircle onClick={FirstClick} /></Link>}
                {sCircle ? <Link to="2" spy={true} smooth={true}><AccentRightCircle onClick={SecondClick} /></Link> : <Link to="2" spy={true} smooth={true} ><RightCircle onClick={SecondClick} /></Link>}
                {tCircle ? <Link to="3" spy={true} smooth={true}><AccentRightCircle onClick={ThirdClick} /></Link> : <Link to="3" spy={true} smooth={true}><RightCircle onClick={ThirdClick} /></Link>}
                {foCircle ? <Link to="4" spy={true} smooth={true}><AccentRightCircle onClick={FourthClick} /></Link> : <Link to="4" spy={true} smooth={true}><RightCircle onClick={FourthClick} /></Link>}
                {fiCircle ? <Link to="5" spy={true} smooth={true}><AccentRightCircle onClick={FifthClick} /></Link> : <Link to="5" spy={true} smooth={true}><RightCircle onClick={FifthClick} /></Link>}
            </Right>
        </>
    );
}

export default Main;