import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  Container,
  background,
} from '@chakra-ui/react'
import axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box>
    <FormLabel mt={5} htmlFor={props.id || props.name}>{label}</FormLabel>
    <Input className="text-input" {...field} {...props} />
    {meta.touched && meta.error ? (
        <Alert className="error" status={'error'} mt={2}>
          <AlertIcon />
          {meta.error}
        </Alert>
      ) : null}
  </Box>
  )
};

// And now we can use these
export default function Staff(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logData, setLogData] = useState({});
  let corsUrl;
  if(import.meta.env.PROD){
    corsUrl = import.meta.env.VITE_API_URL
  }else{
    corsUrl = import.meta.env.VITE_DOCKER_BACKEND_URL
  }

  async function makeRequest(values) {
    const data = await axios.post(corsUrl + "/staff",values)
    return data;
  }

  if(isLoggedIn && logData){

    return (
      <Box mt={5} ml={5}>
        <Button 
        bgColor={logData.currentState ? "green.400" : "red.400"}
        onClick={
          async ()=>{
            const d = await axios.put(corsUrl + "/staff",{state: logData.currentState})
            setLogData(
              {
                ...logData,
                currentState: d.data
              }
            )

          }
        }
        _hover={
          {
            bgColor: 'none'
          }
        }
        >
        {logData.currentState ? "Turn server online" : "Shut down server"}
      </Button>
      </Box>
    ) 
  }

  return (
    <>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in For Staff Members</Heading>
              <Text fontSize={'lg'} color={'red.400'}>
                Sign in for staff members only
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required('Required'),
          password: Yup.string()
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          setSubmitting(true)
          makeRequest(values)
          .then(res => {
            if (res.data.logged){
              values.currentState = res.data.currentState
              setLogData(values)
              setIsLoggedIn(true);
            }
          })
          setSubmitting(true)
        }}
      >
      
        <Form>
          <MyTextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />

          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />

          <Stack spacing={10} mt={5}>
              <Button
              type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
        </Form>
      </Formik>
      </Stack>
      </Box>
      </Stack>
    </Flex>
    </>
  );
};