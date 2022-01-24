import styled, { keyframes } from "styled-components";
const Animation = keyframes`
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
const Box = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
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
`
const H4 = styled.h4`
    display : block;
    font-weight: 400;
    font-size : 1.527777777777777vw;
    opacity: 0.65;
    margin-bottom:3.75vw;
`
const First = styled(Box)`
    ::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/CfFOq6D__lgxqxVn33d_4w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkVE41YTJ4dmNEWnBOMjE0T0hGa2NIUjFabVVpZlEucGdwM3BJemhPVjRnLWowS1ZTSkd1emF4NXBRel9XTnFKZ3l3NHVTZktkaw") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.6;
}

    `
const Second = styled(Box)`
::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/fs2WGbNXB7B4R7ugSLaYKQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek1EUTVNemMzT1RZNU5qSXdORGMwTlNKOS43ekxOR0JBNU1xWFZuTGVXXzZvUFl3Skg5aC01WkFiSTdlZDNaeGh5ME1n") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.6;
}
`
const Third = styled(Box)`
::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/N12BBXEqTnru-pWTin7AUQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkR2R4ZFRGalltNXFiV3R2WVdneWJXNXRhMklpZlEuOUg1dHd2WWF1RDAzQVgza05uMGJyZHVWeXp3VUR6andTNmpNNmxsSGktZw") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.6;
}
`
const Fourth = styled(Box)`
    ::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/ii6wJCYLACBS7sru0oZhkA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZhbVppYzNSd1pYZDVlSEUxYUhod01tNWtaR1lpZlEuN0dkd0pkOTJrMWZoUzFrXzVhS3JNbG05c0dPZ0hFaU5wQnloeTlrRWdtdw") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.6;
}
`
const Fifth = styled(Box)`
    ::before{
    content :""  ;
    background : url("https://an2-img.amz.wtchn.net/image/v2/-XAxJnuESCZrE1BfehvMFQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE9UYzNPVFkxT1RrMk1qUXlOek01TUNKOS5OaDRfTFl3ZmRycUx6X1lldDk4dlNsUHp1YTNKV2t5ZUVXYXhNS1R5bUxB") center center / cover no-repeat;
    z-index:0;
    height: 100vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    animation : ${Animation} 2s;
    opacity: 0.6;
}
`

function Main() {
    return (
        <>
            <First>
                <Text>
                    <Span>영화, 드라마, 예능, 다큐멘터리를 무제한으로 <br /></Span>
                    <H4>매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.</H4>
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