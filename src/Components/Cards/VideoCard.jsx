import { Box, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const VideoCard = ({ el }) => {
    const [videoPlaying, setVideoPlay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        try {
            if (videoRef.current) {
                if (isPlaying) {
                    videoRef.current.pause();
                } else {
                    if (videoRef.current.ended) {
                        restartVideo();
                    } else {
                        videoRef.current.play();
                    }
                }
                setIsPlaying(!isPlaying);
            }
        } catch (err) {
            console.log(err)
        }
    };

    const restartVideo = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset the video to the beginning
            videoRef.current.play().catch((error) => {
                console.error('Error restarting the video:', error);
            });
            setIsPlaying(true);
        }
    };

    return (
        <Card maxW='sm' boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} >
            <CardBody>
                {videoPlaying ? (
                    <Box maxW='560px' ratio={1} onClick={() => {
                        togglePlayPause();
                    }}>
                        <video
                            ref={videoRef}
                            title='naruto'
                            src={el?.submission?.mediaUrl}
                            controls
                        />
                    </Box>
                ) : (
                    <Box onClick={() => {
                        togglePlayPause();
                        setVideoPlay(videoPlaying ? false : true);
                    }} >
                        <Image
                            src={el?.submission?.thumbnail}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                    </Box>
                )}
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{el?.submission?.title}</Heading>
                    <Text>
                        {el?.submission?.description}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default VideoCard;