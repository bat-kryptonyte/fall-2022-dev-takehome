import logo from './logo.svg';

import React, { useContext } from 'react';


import { Box, Button, Center, Image, Flex, Badge, Text, Input, Stack, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Head from 'next/head'
import { useTheme, ThemeProvider } from "next-themes"
import './App.css';
import TodoList from './components/TodoList';
import { ChakraProvider } from '@chakra-ui/react'

import { ThemeContext } from './components/ThemeProvider';


const App: React.FC = () => {

const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ChakraProvider>
    <div className="App">
    <ThemeProvider>
    <Stack margin = {4} spacing = {4}>
    <button onClick={toggleTheme}>
    {theme === 'dark' ? (
              <SunIcon w={6} h={6} />
            ) : (
              <MoonIcon w={6} h={6} />
            )}
      </button>
    <Text align = "center" fontSize = "2xl">
      choses à faire
    </Text>
    
    <TodoList/>
       
    </Stack>
    
    </ThemeProvider>
     
    </div>
    </ChakraProvider>
  );
}

export default App;
