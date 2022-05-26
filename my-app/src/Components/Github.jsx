import {Box, Center,Flex,Image} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ThemeContext } from '@emotion/react';

const Github = () => {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        axios({
              url:"  http://localhost:3000/user",
              method:"get"
    })
    .then(res=>{
        // console.log(res.data);
        setLoading(false);
        setData(res.data)

    })
    .catch(error=>{
        setError(true);

    })

    },[])
  return (
    <Box>
       {
           data.map((ele)=>{
           return(
               <Box>
                   <Center>
                        <Flex w="500px" gap={30} border="2px solid blue" p={4} m={2} borderRadius="10px">
                           <Box>
                              <Image w="50px" h="40px" src={ele.avatar} alt='Dan Abramov' />
                           </Box>
                            
                           <Box>
                               <Box>{ele.name}</Box>  
                               <Box>{ele.title}</Box> 
                                <Box>{ele.salary}</Box>
                               
                           </Box> 
                            
                            <Box>
                               <Box>Full-Time</Box>
                            </Box>
                        </Flex>   

                       
                       </Center>
               </Box> 
           )

       })
       }
    </Box>
  )
}

export default Github
