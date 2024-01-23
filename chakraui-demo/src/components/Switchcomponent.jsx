import React from 'react'
import { Switch,Stack } from '@chakra-ui/react'
function Switchcomponent() {
    return (
        <div>
            <Stack align='center' direction='row'>
                <Switch size='sm' />
                <Switch size='md' />
                <Switch size='lg' />
            </Stack>
        </div>
    )
}

export default Switchcomponent
