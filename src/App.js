import { Box } from '@chakra-ui/react';
import './App.css';
import Alloutes from './Components/AllRoutes/AllRoutes';
import Nav from './Components/Navbar/Navbar';
import FooterDiv from './Components/footer';


function App() {
  return (
    <Box >
      <Nav/>
      <Alloutes/>
      <FooterDiv/>
    </Box>
  );
}

export default App;
