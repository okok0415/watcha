import styled from "styled-components";

const Box = styled.div`
    display:flex;
    justify-content: center;

`

const Image = styled.img`
    height: 100vh;
    width: 100vw;
    text-align: center;
    object-fit : cover;
    position : relative;
    background : rgb(18,18,24);

`
const Text = styled.div`
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
`
const Span = styled.span`
    font-weight : 400;
    font-size: 3.4722222222222223vw;

`

const First = styled(Image).attrs({ src: "https://an2-img.amz.wtchn.net/image/v2/OXVVO9CM53dOnYOjQN7XrQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZhMjV2YWprelkzWjBNWEp5TW5VeVpHMW1aV01pZlEuaUNaV0V3U0Jod1l6RDF3aWhQWWhWZXdKbzJTMG1HVjd4NlB3VjBrMllOSQ" })`
`
const Second = styled(Image).attrs({ src: "https://an2-img.amz.wtchn.net/image/v2/fs2WGbNXB7B4R7ugSLaYKQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZek1EUTVNemMzT1RZNU5qSXdORGMwTlNKOS43ekxOR0JBNU1xWFZuTGVXXzZvUFl3Skg5aC01WkFiSTdlZDNaeGh5ME1n" })`
`
const Third = styled(Image).attrs({ src: "https://an2-img.amz.wtchn.net/image/v2/N12BBXEqTnru-pWTin7AUQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqRXZkR2R4ZFRGalltNXFiV3R2WVdneWJXNXRhMklpZlEuOUg1dHd2WWF1RDAzQVgza05uMGJyZHVWeXp3VUR6andTNmpNNmxsSGktZw" })`
`
const Fourth = styled(Image).attrs({ src: "https://an2-img.amz.wtchn.net/image/v2/g6TaUJi4lQkzHIt9brzBZg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE1Ua3lNREExT0RnMU5EUXdOelU0TmlKOS4tM2czOXhtX1g1a2pQaExLM3dyWFVNZ0JGSmJ0WUVqNFBKeXFDQW0xMFhj" })`
`
const Fifth = styled(Image).attrs({ src: "https://an2-img.amz.wtchn.net/image/v2/-XAxJnuESCZrE1BfehvMFQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZeE9UYzNPVFkxT1RrMk1qUXlOek01TUNKOS5OaDRfTFl3ZmRycUx6X1lldDk4dlNsUHp1YTNKV2t5ZUVXYXhNS1R5bUxB" })`
`
function Main() {
    return (
        <>
            <Box>
                <First />
                <Text>
                    <Span>영화, 드라마, 예능, 다큐멘터리를 무제한으로 <br /></Span>

                </Text>
            </Box>
            <Box>
                <Second />
            </Box>
            <Box>
                <Third />
            </Box>
            <Box>
                <Fourth />
            </Box>
            <Box>
                <Fifth />
            </Box>

        </>
    );
}

export default Main;