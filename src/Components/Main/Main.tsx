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
    background : url("https://an2-img.amz.wtchn.net/image/v2/mstekYRJbXsB11aQAh5uqw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZd09EVTFNVFl6TkRVeE5qVXhNak00TlNKOS5CQXk2ckl6cjAzNVVPYzVaODJpNTZ6eUdITzhFM3JHQVhseW5UVGZMekZz") center center / cover no-repeat;
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
    background : url("https://an2-img.amz.wtchn.net/image/v2/F-Ny23NqHJiMoEG72fB1jw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek9UTTNOVGc1T0RneU1UTXdORGcxT0NKOS5NLW9iQ0QzTEFkMnhSYnc0V2JGSW1jaUFndl9fRFFTVUIxUUhXR3gxUWE4") center center / cover no-repeat;
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
const Button = styled.div`
    display: inline-flex;
    background-color: ${props => props.theme.buttonColor};
    height : 4.16666666666vw;
    width: auto;
    min-width : 13.125vw;
    border-radius: 2.08333333vw;
    text-align: center;
    font-size: 1.38888888888vw;
    font-weight:700;
    padding: 0 1.5625vw;
    align-items: center;
`

function Main() {
    return (
        <>
            <First>
                <Text>
                    <Span>영화, 드라마, 예능, 다큐멘터리를 무제한으로 <br /></Span>
                    <H4>매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.</H4>
                    <Button>2주 무료 이용 시작</Button>
                </Text>
            </First>
            <Second>
                <Text>
                    <Span>여럿이 함께, 하나의 이용권으로 <br /></Span>
                    <H4>동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.</H4>
                    <Button>2주 무료 이용 시작</Button>
                </Text>
            </Second>
            <Third>
                <Text>
                    <Span>이제 TV로 최고의 화질을 경험하세요 <br /></Span>
                    <H4>최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.</H4>
                    <Button>2주 무료 이용 시작</Button>
                </Text>
            </Third>
            <Fourth>
                <Text>
                    <Span>이동 중에도 감상을 멈추지 마세요 <br /></Span>
                    <H4>보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.</H4>
                    <Button>2주 무료 이용 시작</Button>
                </Text>
            </Fourth>
            <Fifth>                
                <Text>
                    <Span>스마트폰, 태블릿, TV, PC, 크롬캐스트, Android TV에서 <br /></Span>
                    <H4>10만여 편의 작품을 무제한 스트리밍하세요.</H4>
                    <Button>2주 무료 이용 시작</Button>
                </Text>
            </Fifth>
        </>
    );
}

export default Main;