import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Center, Image, Flex, Badge, Text, Stack, Checkbox} from "@chakra-ui/react";
import {TodoItem} from './TodoList'
import Tag from './Tag'

interface Props {
    sortComplete: () => void,
    sortDate: () => void,
    byDate: boolean,
    byComplete: boolean,
}

const Sort = ({ byDate, byComplete, sortComplete, sortDate }: Props) => {

    const [toggleDate, setToggleDate] = useState<boolean>(byDate);
    const [toggleComplete, setToggleComplete] = useState<boolean>(byComplete);

    return (
        <div>
            <Stack spacing = {4} align= "center">
          <Button bg = "#888" maxWidth = "250px"
        onClick={() => {
            setToggleDate(!toggleDate)
            sortDate()
        }}> sort by date </Button>

          <Button bg = "#888" maxWidth = "200px" onClick={() => {
              setToggleComplete(!toggleComplete)
              sortComplete()
            }
        }
              > sort by complete </Button>
            </Stack>
        </div>
    )
}

export default Sort