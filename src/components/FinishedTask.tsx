import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Center, Image, Flex, Badge, Text, Stack} from "@chakra-ui/react";
import {TodoItem} from './TodoList'
import Tag from './Tag'
interface Props {
  finished: TodoItem;
}
const FinishedTask = ({finished}: Props) => {
    return (

      <div>
        <Box p="5" maxW="600px" borderRadius='lg' borderWidth="1px">

        <Text
              ml={2}
              textTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
            >
              {finished.title}
            </Text>
        <Flex align="center" mt={2}>
          <Stack direction = "row">
          {finished.tagList.map((tag: string, key: number) => {
            return <Badge colorScheme="gray">{tag}</Badge>;
          })}
          </Stack>
        </Flex>
        <Text mt={2} align="right">BY {finished.dueDate}</Text>
      </Box>
      
      </div>
    )
}

export default FinishedTask;