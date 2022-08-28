import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
import {TodoItem} from './TodoList'
interface Props {
  tag: string;
  deleteTag(toDelete: string): void;
}
const Tag = ({tag, deleteTag}: Props) => {
    return (

      <div>
          <Badge colorScheme="gray">{tag}</Badge>

          <Button textTransform="uppercase"
            fontSize="sm" size = "xs" onClick = {() => deleteTag(tag)}>x</Button>
      </div>
    )
}

export default Tag;