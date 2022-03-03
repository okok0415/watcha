import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Login, Logo, Nav } from "../Main/Main";
import { Form, Format, FormatSpan, FormatTitle, FormList, Image, Input, LoginSuccessButton, Main } from "./Sign_in";
import './Login.css';

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
const Signup_clicked_button = styled.span`
    display: inline-block;
    position: absolute;
    top : 3px;
    left : 0px;
    background: rgb(248, 47, 98);
    width: 14px;
    height: 14px;
    border : 1px solid rgb(248, 47, 98);
    border-radius: 50%;
    ::after{
        content: '';
        display: inline-block;
        position: absolute;
        top:0px;
        left:0px;
        background : url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNDEgMTcuMjZhLjc0NC43NDQgMCAwIDEtLjUzLS4yMkw0LjA1IDEyLjIxMmEuNzQ5Ljc0OSAwIDEgMSAxLjA2LTEuMDZsNC4yOTggNC4yOTcgOS40OC05LjQ4QS43NS43NSAwIDEgMSAxOS45NSA3LjAzTDkuOTQgMTcuMDRhLjc0NC43NDQgMCAwIDEtLjUzLjIyIi8+Cjwvc3ZnPgo=") center center / contain no-repeat;
        width: 12px;
        height: 12px;
    }
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


    const [first, setFirst] = useState<boolean>(false);
    const [second, setSecond] = useState<boolean>(false);
    const [third, setThird] = useState<boolean>(false);
    const [fourth, setFourth] = useState<boolean>(false);
    const [fifth, setFifth] = useState<boolean>(false);

    const allClick = () => {
        if (first && second && third && fourth && fifth){
            setFirst(false)
            setSecond(false)
            setThird(false)
            setFourth(false)
            setFifth(false)
        }
        else{
            setFirst(true)
            setSecond(true)
            setThird(true)
            setFourth(true)
            setFifth(true)
        }
    }
    const firstClick = ()  => {
        setFirst(!first)
    }
    const secondClick = ()  => {
        setSecond(!second)
    }
    const thirdClick = ()  => {
        setThird(!third)
    }
    const fourthClick = ()  => {
        setFourth(!fourth)
    }
    const fifthClick = ()  => {
        setFifth(!fifth)
    }

    const [onecheck, setOnecheck] = useState<number>(0);
    const [twocheck, setTwocheck] = useState<number>(0);
    const [threecheck, setThreecheck] = useState<number>(0);

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onChangeName = (e : React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const requireName = (e : React.FormEvent<HTMLInputElement>) => {
        let string = e.currentTarget.value;
        if (string.length >= 2){
            setOnecheck(2)
        }
        else if (e.currentTarget.value.length === 0){
            setOnecheck(0)
        }
        else{
            setOnecheck(1)
        }
    }
    const mergeName = (e : React.FormEvent<HTMLInputElement>) => {
        onChangeName(e);
        requireName(e)
    }

    const onChangeEmail = (e : React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const requireEmail = (e : React.FormEvent<HTMLInputElement>) => {
        let string = e.currentTarget.value;
        if (string.includes('@') && string.includes('.')){
            setTwocheck(2)
        }
        else if (e.currentTarget.value.length === 0){
            setTwocheck(0)
        }
        else{
            setTwocheck(1)
        }
    }
    const mergeEmail = (e : React.FormEvent<HTMLInputElement>) => {
        onChangeEmail(e);
        requireEmail(e)
    }

    const onChangePassword = (e : React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const requirePassword = (e : React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length > 9){
            setThreecheck(2)
        }
        else if (e.currentTarget.value.length === 0){
            setThreecheck(0)
        }
        else{
            setThreecheck(1)
        }
    }
    const mergePassword = (e : React.FormEvent<HTMLInputElement>) => {
        onChangePassword(e);
        requirePassword(e)
    }

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
                            <FormList className={onecheck === 0 ? '' : onecheck === 1 ? 'x' : 'o'}><Name value={name} onChange={mergeName}/></FormList>
                            <FormList className={twocheck === 0 ? '' : twocheck === 1 ? 'x' : 'o'}><Email value={email} onChange={mergeEmail}/></FormList>
                            <FormList className={threecheck === 0 ? '' : threecheck === 1 ? 'x' : 'o'}><Password value={password} onChange={mergePassword} /></FormList>
                        </Form>
                        <Signup_checker>
                            <Signup_li onClick={allClick}>
                                {first&&second&&third&&fourth&&fifth ? <Signup_clicked_button/>: <Signup_button/>}
                                전체 약관에 동의합니다
                            </Signup_li>
                            <Signup_li onClick={firstClick}>
                            {first ? <Signup_clicked_button/>: <Signup_button/>}
                                만 14세 이상입니다
                            </Signup_li>
                            <Signup_li onClick={secondClick}>
                            {second ? <Signup_clicked_button/>: <Signup_button/>}
                                왓챠피디아 서비스 이용약관에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li onClick={thirdClick}>
                            {third ? <Signup_clicked_button/>: <Signup_button/>}
                                왓챠 서비스 이용약관에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li onClick={fourthClick}>
                            {fourth ? <Signup_clicked_button/>: <Signup_button/>}
                                개인정보 수집 및 이용에 대한 안내에 동의합니다 (필수)
                            </Signup_li>
                            <Signup_li onClick={fifthClick}>
                            {fifth ? <Signup_clicked_button/>: <Signup_button/>}
                                신작 알림 이벤트 정보 수신에 동의합니다 (선택)
                            </Signup_li>
                        </Signup_checker>
                        <LoginSession>
                            {onecheck === 2 && twocheck === 2 && threecheck === 2 && second && third && fourth ? <LoginSuccessButton>계정 생성하기</LoginSuccessButton> : <LoginButton>계정 생성하기</LoginButton>}
                        </LoginSession>
                        <P>결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</P>
                    </Format>
                </Main>
            </Image>
        </>
    )
}


export default Sign_up;