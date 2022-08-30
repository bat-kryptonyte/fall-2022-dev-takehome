import React, { ChangeEvent, useState } from 'react';

import { Box, Button, Switch, Center, Image, Flex, Badge, Text, Input, Stack, InputGroup, InputLeftAddon, Heading} from "@chakra-ui/react";


import Task from './Task'
import Tag from './Tag'
import FinishedTask from './FinishedTask';
/**
 * Thank you for applying to Bits of Good. You are free to add/delete/modify any 
 * parts of this project. That includes changing the types.ts, creating css files, 
 * modifying import statements, using contexts, etc. We do recommend to keep it simple. 
 * You will not be judged based on complexity. We also recommend using 
 * multiple components instead of coding everything on this file :)
 * 
 * Have fun! Please reach out to hello@bitsofgood.org or amz@gatech.edu if you
 * have any questions!
 * 
 * Bits of Good Engineering Team
 * 
 */
// TODO: Start coding from here

// Here's a baseline todo item type. 
// Feel free to extend or create your own interface!
export type TodoItem = {
  title: string,
  dueDate: string,
  tagList: string[],
  completed: boolean,
}


export default function TodoList() {
  const [title, setTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState(new Date().toLocaleDateString());
  const [tagList, setTagList] = useState<string[]>([]);
  const [todo, setTodoList] = useState<TodoItem[]>([]);
  const [finished, setFinishedList] = useState<TodoItem[]>([]);
  const [tag, setTag] = useState<string>("");
  const [byDate, setByDate] = useState<boolean>(false);
  const [byFinished, setByFinished] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    }
    if (event.target.name === "duedate") {
      
      setDueDate(new Date(event.target.value).toLocaleDateString());
    }
    if (event.target.name === "tagList") {
      setTag(event.target.value);
    }
  };

  const createTask = ():void => {
    const newTodo = {title: title, dueDate: dueDate, tagList: tagList, completed: false};

    if (newTodo.title !== "" && newTodo.dueDate !== new Date().toLocaleDateString()){

      setTodoList([...todo, newTodo]);

      setTitle("");
      setDueDate((new Date().toLocaleDateString()));
      setTagList([]);
    } 
      

    setTitle("");
    setDueDate(new Date().toLocaleDateString());
    setTagList([]);

  }
  const createTag = ():void => {
    if (tag !== "") {  
      setTagList([...tagList, tag])
    }
    setTag("");
  }

  const completeTask = (toDelete: string):void => {
    todo.forEach(task => {
      if (task.title == toDelete) {
        const newItem = finished;
        newItem.push(task);
        setFinishedList(newItem);
      }
    })
    setTodoList(todo.filter((task) => {
      return task.title !== toDelete
    }))
  }

  const deleteTag = (toDelete: string):void => {
    setTagList(tagList.filter((tag) => {
      return tag !== toDelete
    }))
  }

  return (
    <div>
        <div>
        <Box p="5" maxW="600px" borderRadius='lg' borderWidth="1px" >
        <Stack spacing={4}>
          <InputGroup>
            <Input type = "text"  placeholder = "Title..." name = "title" value = {title} onChange={handleChange} />
          </InputGroup>
          <InputGroup>

            <Input type = "text"  placeholder = "Tags..."  name = "tagList" value = {tag} onChange={handleChange} />

            <Button onClick={createTag}>Add Tag</Button>
          </InputGroup>

          <Flex align="baseline" mt={2}>
            <Stack direction='row'>

              {tagList.map((tag: string, key: number) => {
                return <Tag key = {key} tag = {tag} deleteTag = {deleteTag}></Tag>;
              })}
            </Stack>
          </Flex>
          
          <InputGroup>

            <Input placeholder="Select Date and Time"  size="md" type="date" name = "duedate" value = {dueDate} onChange={handleChange} />
          </InputGroup>

          <Button onClick={createTask}>Create Task</Button>

        </Stack>
        
        
        </Box>
      
      
    </div>
    
    <div>
      {todo.map((task: TodoItem, key: number) => {
        return <Task key = {key} task = {task} completeTask = {completeTask} deleteTag = {deleteTag}/>;
      })}
    </div>
    <div>
      Finished List:
      {finished.map((task: TodoItem, key: number) => {
        return <FinishedTask key = {key} finished = {task} />;
      })}
    </div>
    </div>
    
  )
}

