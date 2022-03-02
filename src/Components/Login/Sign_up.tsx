import { Link } from "react-router-dom";
import styled from "styled-components";
import { Login, Logo, Nav } from "../Main/Main";
import { Form, Format, FormatSpan, FormatTitle, FormList, Image, Input, Main } from "./Sign_in";


const Name = styled(Input).attrs(
    {
        placeholder: '이름 (2자 이상)',
        type: 'text',
        data_valid: "false",
        autocomplete: 'off',
    })`

    color: rgba(51, 51, 51);
    font-weight: 400;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;

`

const Email = styled(Input).attrs(
    {
        placeholder: '이메일 (example@gmail.com)',
        type: 'email',
        data_valid: "false",
        autocomplete: 'off',
    })`

    color: rgba(51, 51, 51);
    font-weight: 400;
    border-radius: 0;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;

`
const Password = styled(Input).attrs(
    {
        placeholder: '영문, 숫자, 특문 중 2개 조합 10자 이상',
        type: 'password',
        data_valid: "false",
        autocomplete: 'off',
    })`
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    color: rgba(51, 51, 51);
    font-weight: 400;
    border-top-width: 1px;
    border-radius : 0px 0px 4px 4px;
    border-width: 0px 1px 1px;
    border-style: solid;
    border-image: initial;


`

const Signup_checker = styled.div`
    margin: 16px 0px 0px;
`

const Signup_li = styled.div`
    margin: 6px 0px;
    display: block;
    position: relative;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    padding: 0px 0px 0px 21px;
    cursor: pointer;
`
const Signup_button = styled.span`
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 0px;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
`

const P = styled.p`
    padding: 0px;
    margin: 0px;
`

const LoginSession = styled.div`
    margin: 2px 0px;
`
const LoginButton = styled.div`
    z-index: 100;
    display: flex;
    background-color: #F82F62;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.1px;
    line-height: 51px;
    width: 300px;
    border-radius: 40px;
    justify-content: center;
    opacity: 0.3;
    height: 48px;
`
function Sign_up() {



    return (
        <>

            <Image>
                <Nav><Link to='/'><Logo /></Link><Link to='sign_in'><Login>로그인</Login></Link></Nav>
                <Main>
                    <Format>
                        <FormatTitle>
                            <FormatSpan>회원가입</FormatSpan>
                        </FormatTitle>
                        <Form>
                            <FormList><Name /></FormList>
                            <FormList><Email /></FormList>
                            <FormList><Password /></FormList>
                        </Form>
                        <Signup_checker>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                전체 약관에 동의합니다
                            </Signup_li>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                만 14세 이상입니다
                            </Signup_li>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                왓챠피디아 서비스 이용약관에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                왓챠 서비스 이용약관에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                개인정보 수집 및 이용에 대한 안내에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li>
                                <Signup_button></Signup_button>
                                신작 알림 이벤트 정보 수신에 동의합니다 (선택)
                            </Signup_li>
                        </Signup_checker>
                        <LoginSession>
                            <LoginButton>계정 생성하기</LoginButton>
                        </LoginSession>
                        <P>결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</P>
                    </Format>
                </Main>
            </Image>
        </>
    )
}


export default Sign_up;