
import { AppBar, Box, Toolbar, Button, Stack} from '@mui/material'
import { useRef } from 'react';
import './App.css'

function App() {

  return (
    <>
    <Box className="app-bar">
    <AppBar className="menu-bar" position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Stack direction="row" spacing={1} className='menu-options-stack'>
          <Button disableRipple><h3>home</h3></Button>
          <Button disableRipple><h3>experience</h3></Button>
          <Button disableRipple><h3>projects</h3></Button>
          <Button disableRipple><h3>skills</h3></Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button disableRipple><h3>resume</h3></Button>
          <Button disableFocusRipple disableTouchRipple><h3>about me</h3></Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
    </>
  )
}

export default App
