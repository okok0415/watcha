
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const startAnimation = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity:0.3;
    }
`

const Box = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
`

const Image = styled(Box).attrs({ id: "1" })`
::before{    
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/EXPCHYwE1ShTwQDUAcarow.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZME1qUTVNelUzT0RVMk9ESXpNakkyT0NKOS5DQ2Jjb1IyNmVJUWItOVZiMkRueTlIZDhtdHBjTlplamFLSXJDVHlXNDRN") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    animation : ${startAnimation} 2s;
    opacity: 0.3;
    top: 0;
    left: 0;
    position: fixed;
    
}
`

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

`

const Logo = styled.span`

    display: block;
    width: 290px;
    height: 88.16px;
    margin : 20px 5px 8px 1px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    z-index: 10;
    cursor: pointer;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg==");
`
const Middle = styled.div`
    display: block;
    margin: 12px 1px 0px 2px;
    z-index: 10;
`
const Button = styled.div`
    width: 316px;
    display: block;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.1px;
    line-height: 51px;
    text-align: center;
    height:52px;
    border-radius: 40px;
    background: ${props => props.theme.backgroundButton};
    color: rgb(255,255,255);
    border: 1px solid rgba(255,255,255,0.3);
    margin: 12px 0px;
    :hover {
        background : ${props => props.theme.textColor};
        color: ${props => props.theme.bgColor};
    }
`

const Line = styled.div`
    background : rgba(154, 151, 161, 0.2);
    width: 260px;
    height: 1px;
`
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const Information = styled.p`
    color : ${props => props.theme.textColor};
    font-size : 12px;
    font-weight: 400;
    letter-spacing : -0.5px;
    margin: 20px 0px 10px;
    opacity: 0.6;
`

const LoginButton = styled.div`
    z-index: 100;
    display: flex;
    background-color: rgb(248, 47, 98);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.1px;
    line-height: 51px;
    width: 316px;
    margin: 0px 0px 20px;
    border-radius: 40px;
    justify-content: center;
`

/*
const Logo = styled.div`
    margin: 20px 5px 8px 1px;
    display: inline-block;
    cursor:pointer;
    width: 290px;
    height: 88.16px;
`

const LogoSpan = styled.span`
display: block;
background-repeat: no-repeat;
background-position: center;
height:100%;
z-index: 100;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk2IiBoZWlnaHQ9IjU5IiB2aWV3Qm94PSIwIDAgMTk2IDU5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc4LjI3MTMgMTIuOTE4NFYyMC43NzFIODYuMDk0NlY1Ni4xOTU2SDk1Ljg0MzJWMjAuNzcxSDEwMy4yMThWMTIuOTE4NEg3OC4yNzEzWk0xNTMuNDY0IDI5LjYzODlIMTQ2LjAwNFYxMi45NzYzSDEzNi4yODVWNTYuMjUzMkgxNDYuMDA0VjM3LjQ5MTJIMTUzLjQ2NFY1Ni4yNTMySDE2My4xODNWMTIuOTc2M0gxNTMuNDY0VjI5LjYzODlaTTExOS42MTMgMTIuNDUyN0gxMTcuOTJDMTA5LjE0MiAxMi40NTI3IDEwNS42MzEgMTYuOTMxNiAxMDUuNjMxIDI0LjIwM1Y0NC44NTIxQzEwNS42MzEgNTIuMTIzOSAxMDkuMTQyIDU2Ljc3NyAxMTguMTA4IDU2Ljc3N0gxMTkuODAxQzEyOC43MDQgNTYuNzc3IDEzMS44MzkgNTEuNDI1MiAxMzEuODM5IDQ1LjM3NjNWMzcuOTg5MUgxMjIuMzA5VjQ0Ljg1MjFDMTIyLjMwOSA0Ny40MTIzIDEyMS40MzEgNDguOTgyNiAxMTguOTIzIDQ4Ljk4MjZDMTE2LjQ3NyA0OC45ODI2IDExNS42NjMgNDcuNTI4NiAxMTUuNjYzIDQ0Ljc5NDZWMjQuMTQ0NkMxMTUuNjYzIDIxLjQxMDUgMTE2LjQ3NyAyMC4wMTUgMTE4LjkyMyAyMC4wMTVDMTIxLjQ5MyAyMC4wMTUgMTIyLjMwOSAyMS41MjY5IDEyMi4zMDkgMjQuMTQ0NlYyOS4xNDdIMTMxLjgzOVYyMy42MjFDMTMxLjgzOSAxNi40MDg3IDEyOC40NTMgMTIuNDUyNyAxMTkuNjEzIDEyLjQ1MjdaTTY4Ljc4MiA0MS40MjI0TDY1Ljk1NTggMjMuMzMxNkg2NC4yODQxTDYxLjQ1NzYgNDEuNDIyNEg2OC43ODJaTTcyLjMyNjIgMTIuOTE4NEw3OS45NzU5IDU2LjE5NTZINzEuMDkwMkw3MC4wMDkgNDkuMjc1M0g2MC4yMzA4TDU5LjE0OTMgNTYuMTk1Nkg1MC4yNjM2TDU3LjkxMzYgMTIuOTE4NEg3Mi4zMjYyWk0xODQuMzkxIDQxLjQyMjRMMTgxLjU2NCAyMy4zMzE2SDE3OS44OTNMMTc3LjA2NiA0MS40MjI0SDE4NC4zOTFaTTE4Ny45MzUgMTIuOTE4NEwxOTUuNTg1IDU2LjE5NTZIMTg2LjY5OUwxODUuNjE4IDQ5LjI3NTNIMTc1Ljg0TDE3NC43NTkgNTYuMTk1NkgxNjUuODczTDE3My41MjIgMTIuOTE4NEgxODcuOTM1WiIgZmlsbD0iI0ZGMDU1OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQyLjI1MDEgMC43NTc4MTJMMzkuMzUyMSA0Mi4yMDY3TDM4LjU3MzMgNDIuMjQ2NkwzMS42ODA3IDEyLjkyMjRIMjMuMTY0TDE4LjAwNzggNDMuMzA3MkwxNi45MDI3IDQzLjM2MzlMMTIuMjg2MiAxMi45MjI0SDAuNDE0MDYyTDExLjIxNTEgNTguMjM5N0wyMy4yODkxIDU3LjQ1NTdMMjcuMjE3MyAyOS4zMjY4TDI4LjM2OTQgMjkuMjY1M0wzMy42Mjk1IDU2Ljc3NjFMNDUuMTg1NSA1Ni4wMjA2TDU0LjM2MjUgMC43NTc4MTJINDIuMjUwMVoiIGZpbGw9IiNGRjA1NTgiLz4KPC9zdmc+Cg==");

`
*/
function Start() {
    return (
        <>
            <Image>
                <Main>
                    <Logo />
                    <Middle>
                        <Link to='/sign_up'><Button>이메일로 가입</Button></Link>
                        <Button>다른 방법으로 계속하기</Button>
                    </Middle>
                    <Line />
                    <Bottom>
                        <Information>왓챠와 왓챠피디아는 같은 계정을 사용해요.</Information>
                        <Link to="/sign_in"><LoginButton>로그인</LoginButton></Link>
                    </Bottom>
                </Main>
            </Image>
        </>
    )
}

export default Start;