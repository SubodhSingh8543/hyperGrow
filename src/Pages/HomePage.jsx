import { Box, Button, Flex, GridItem, SimpleGrid, useStatStyles } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios";
import VideoCard from "../Components/Cards/VideoCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async (page) => {
        try {
            const getData = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
            setData(getData?.data?.data?.posts);
        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
        fetchData(page);
    }, [page]);

    console.log(data);

    return (
        <Box margin={"auto"}  p={"10px"} >
            <SimpleGrid justifyContent={"center"} alignItems={"center"}  gap={"10px"} columns={[1,2,2,3,4]}>
                {data.map((el, i) => (
                    <Box key={el.postId} margin={"auto"}>
                        <VideoCard  el={el} />
                    </Box>
                ))}
            </SimpleGrid>
            <Box   display={"flex"} gap={"15px"} justifyContent={"center"} alignItems={"center"} w={"300px"} m={"auto"} mt={"30px"}>
              <Button boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"} isDisabled={page == 1} onClick={() => setPage(page - 1)}>
                <FaAngleLeft color={"#167a92"} />
              </Button>
              <Button boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"} >
                {page}
              </Button>
              <Button boxShadow={"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"}  onClick={() => setPage(page + 1)}>
                <FaAngleRight color={"#167a92"} />
              </Button>
            </Box>
        </Box>
    )
}

export default HomePage;