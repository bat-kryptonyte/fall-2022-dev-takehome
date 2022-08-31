import React, { ChangeEvent, useState, useEffect} from 'react';
import { Box, Button, Center, Image, Flex, Badge, Text, Stack, Checkbox} from "@chakra-ui/react";
import {TodoItem} from './TodoList'
import Tag from './Tag'
import { truncate } from 'fs';
interface Props {
  task: TodoItem;
  completeTask(toDelete: string): void;
  deleteTag(toDelete: string): void;
}
const Task = ({task, completeTask}: Props) => {
    const [finished, setFinished] = useState<boolean>(task.completed);

    const [show, setShow] = useState(true);

    useEffect(() => {
      setFinished(task.completed)
    },[task])
    return (

      <div>
        <Box p="5" maxW="600px" borderRadius='lg' borderWidth="1px" bg = {finished ? "success" : "#888"}>

        <Text
              ml={2}
              textTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
            >
              {task.title} {task.completed && <Text>(Done)</Text>}
            </Text>
        <Flex align="center" mt={2}>
          <Stack direction = "row">
          {task.tagList.map((tag: string, key: number) => {
            return <Badge colorScheme="gray">{tag}</Badge>;
          })}
          </Stack>
        </Flex>
        <Text mt={2} align="right">BY {task.dueDate}</Text>
        
        <Flex mt={2} align="center">
           {!task.completed && 
            <Button ml = {2} textTransform="uppercase"
            fontSize="sm" onClick = {() => {
              completeTask(task.title)
              setFinished(!finished)
            }
            }>Mark as Complete</Button>}
             
           
        </Flex>
      </Box>
      
      </div>
    )
}

export default Task;