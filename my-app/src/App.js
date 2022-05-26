import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Spacer,
  Button,
  Container,Center,Input, Icon
} from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Navbar */}
         <Flex borderBottom="1px" p={5}>
             <Box fontWeight="bold" bg="slateblue" border="1px blue" color="white" w="40px" p={2}>4d</Box>
             <Spacer/>
             <Box>
                <Flex  gap="20px">
                <Box >
                    <Button bg="white"> Sign In</Button>
                  </Box>
                  <Box >
                    <Button bg="slateblue" borderRadius="10px"> Sign In</Button>
                  </Box>
                  <Box >
                    <Button borderRadius="10px"> Post a Job</Button>
                  </Box>
                </Flex>
             </Box>
         </Flex>
       
        <Box h="400px" p="50px">
        <Container >
            <Center p={1} fontWeight="bold" fontSize="4xl">Find The Right</Center>
            <Center p={1} fontWeight="bold" fontSize="4xl" gap={2}>
              <Box color="slateblue">Four-Day </Box><Box>Week Job</Box>
               </Center>
            <Flex gap="10px">
            <Center>
            <Input w="400px" placeholder='Type job title or keyword' />
            </Center>
            <Box fontWeight="bold" bg="slateblue" border="1px blue" color="white" w="40px" p={2} >F</Box>
            </Flex>
            <Center>
                <Flex gap={5} p={5}>
                    <Button w="140px" bg="slateblue" borderRadius="10px">Remote</Button>
                    <Button w="140px" bg="slateblue" borderRadius="10px">Tech</Button>
                    <Button w="140px" bg="slateblue" borderRadius="10px">Marketing</Button>
                </Flex>
            </Center>
         </Container>

        </Box>

<Box bg="whitesmoke">
        {/* data */}
        <Box>
          <Container>
            <Flex p={1} fontWeight="bold" fontSize="4xl" gap={2}>
            <Box color="slateblue">Recent</Box><Box> Jobs</Box>
            </Flex>
          </Container>
        </Box>
         
        {/* Midbox */}
        <Container borderRadius="10px" border="1px soild slateblue" bg="slateblue">
          <Center p={2}>Subscribe to our Newsletter</Center>
          <Flex p={2} gap="10px">
            <Center>
            <Input bg="white" w="300px" placeholder='Your Email' />
            </Center>
            <Box textAlign="center" borderRadius="10px" fontWeight="bold" bg="green" border="1px blue" color="white" w="200px" p={2} >Submit</Box>
          </Flex>
          <Center p={2}>Receive the best job offers every week</Center>
        </Container>
      
</Box>
      {/* footer */}
     <Box p={50} >
     
          <Flex  gap="80px"><Box ml={60}>Contact US</Box><Box>Legal</Box></Flex>        
  
     </Box>
    </ChakraProvider>
  );
}

export default App;
