'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Input,
  Tooltip,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FcSearch } from "react-icons/fc";
import { BsFillMicFill, BsHeart, BsCart3 } from "react-icons/bs";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { IoMdCart, IoIosHeartEmpty } from "react-icons/io";
import { LiaHeart } from "react-icons/lia";
import { HiOutlineUser ,HiOutlineShoppingCart } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { FiUser, FiHeart } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { GrCart } from "react-icons/gr";



const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function NavMiddle() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box border={"1px solid grey"} bg={useColorModeValue('gray.1', 'gray.900')} px={4}>
        <Flex border={"0px solid blue"} h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box border={"0px solid red"}>Logo</Box>

          <Flex w={"50%"} border={"0px solid grey"} justifyContent={"space-between"} >
            <Flex w={"93%"} border={"1px solid grey"}>
              <Input border={"none"} focusBorderColor='transparent' />
              <Flex padding={"10px"} border={"0px solid grey"} justifyContent={"center"} alignItems={"center"}>
                <AiOutlineSearch style={{ fontSize: "20px" }} />
              </Flex>
            </Flex>

            <Flex padding={"10px"} w={"45px"}  h={"45px"} borderRadius={"50%"} border={"1px solid grey"} justifyContent={"center"} alignItems={"center"}>
              <BsFillMicFill />
            </Flex>
          </Flex>

          <Flex border={"0px solid green"} alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Tooltip
                  label={`You have 0 items in the cart`}
                  fontSize="md"
                  background='lightgrey'
                  color={'black'}
                >
                  <span style={{ marginLeft: "4px" }}>
                  <HiOutlineShoppingCart style={{ fontSize: "26px" }} />
                  </span>
                </Tooltip>
              </Flex>
              <Flex justifyContent={"center"} alignItems={"center"}>
              <Tooltip
                  label={`favourite items`}
                  fontSize="md"
                  background='lightgrey'
                  color={'black'}
                >
                  <span style={{ marginLeft: "4px" }}>
                  <FiHeart style={{ fontSize: "23px" }} />
                  </span>
                </Tooltip>
                
              </Flex>
              <Menu>
              {/* <HiOutlineUser as={Button}  style={{ fontSize: "25px", color: useColorModeValue('gray.1', 'gray.900'), border:"1px solid black" }} /> */}
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'none'}
                  padding={"0px"}
                  bg={"none"}
                  cursor={'pointer'}
                  minW={0}>
                  <HiOutlineUser style={{ fontSize: "25px", color: useColorModeValue('gray.1', 'gray.900')}} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}