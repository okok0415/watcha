import styled from "styled-components";

const Box = styled.div`
    height: 100vh;
    position: relative;
    width: 100vw;
    display:flex;
    justify-content: center;
    opacity: 0.63;
    z-index: 0;
    ::before{
        background: url("https://an2-img.amz.wtchn.net/image/v2/CfFOq6D__lgxqxVn33d_4w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkVE41YTJ4dmNEWnBOMjE0T0hGa2NIUjFabVVpZlEucGdwM3BJemhPVjRnLWowS1ZTSkd1emF4NXBRel9XTnFKZ3l3NHVTZktkaw");
        content: "";
        top: 0px;
        left: 0px;
        opacity : 1;
        transition : opacity 500ms ease 0s;
    }
    ::after{
        content: "";
        background : rgb(18,18,24);
        opacity:0.63;
    }

`
const Text = styled.div`
    height: 100vh;
    position: absolute;
    display: flex;
    text-align : center;
    z-index : 100;
    align-items: center;
    color: white;
`
const Span = styled.span`
    font-weight : 400;
    font-size: 3.4722222222222223vw;

`

const First = styled(Box)`
    background : url("https://an2-img.amz.wtchn.net/image/v2/CfFOq6D__lgxqxVn33d_4w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkVE41YTJ4dmNEWnBOMjE0T0hGa2NIUjFabVVpZlEucGdwM3BJemhPVjRnLWowS1ZTSkd1emF4NXBRel9XTnFKZ3l3NHVTZktkaw")  center center / cover no-repeat;
`
const Second = styled(Box)`
    background : url("https://an2-img.amz.wtchn.net/image/v2/fs2WGbNXB7B4R7ugSLaYKQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek1EUTVNemMzT1RZNU5qSXdORGMwTlNKOS43ekxOR0JBNU1xWFZuTGVXXzZvUFl3Skg5aC01WkFiSTdlZDNaeGh5ME1n")  center center / cover no-repeat;
`
const Third = styled(Box)`
    background : url("https://an2-img.amz.wtchn.net/image/v2/N12BBXEqTnru-pWTin7AUQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkR2R4ZFRGalltNXFiV3R2WVdneWJXNXRhMklpZlEuOUg1dHd2WWF1RDAzQVgza05uMGJyZHVWeXp3VUR6andTNmpNNmxsSGktZw")  center center / cover no-repeat;
`
const Fourth = styled(Box)`
    background : url("https://an2-img.amz.wtchn.net/image/v2/g6TaUJi4lQkzHIt9brzBZg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE1Ua3lNREExT0RnMU5EUXdOelU0TmlKOS4tM2czOXhtX1g1a2pQaExLM3dyWFVNZ0JGSmJ0WUVqNFBKeXFDQW0xMFhj")  center center / cover no-repeat;
`
const Fifth = styled(Box)`
    background : url("https://an2-img.amz.wtchn.net/image/v2/-XAxJnuESCZrE1BfehvMFQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE9UYzNPVFkxT1RrMk1qUXlOek01TUNKOS5OaDRfTFl3ZmRycUx6X1lldDk4dlNsUHp1YTNKV2t5ZUVXYXhNS1R5bUxB")  center center / cover no-repeat;
`

function Main() {
    return (
        <>
            <First>
                <Text>
                    <Span>영화, 드라마, 예능, 다큐멘터리를 무제한으로 <br /></Span>
                </Text>
            </First>
            <Second>

            </Second>
            <Third>

            </Third>
            <Fourth>

            </Fourth>
            <Fifth>

            </Fifth>
        </>
    );
}

export default Main;