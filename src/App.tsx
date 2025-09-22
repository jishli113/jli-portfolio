
import { AppBar, Box, Toolbar, Button, Stack} from '@mui/material'
import './App.css'
import Work from './Work';

function App() {
  const workPlaces: string[] = ["aws", "rimini street", "uc santa cruz"];
  const workTitles: string[] = ["sde intern", "swe intern", "undergraduate student researcher"];
  const workDates: string[] = ["june 2025 - sep 2025"];
  const descriptions: string[] = ["q business", "ai-powered email summarizations", "differentiable simulators with prof. razvan marinescu"];

  const start = 0;
  const end = workPlaces.length;
  const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);

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
        <Stack direction="row" spacing={1} className="menu-right-bar">
          <Button disableRipple><h3>resume</h3></Button>
          <Button disableFocusRipple disableTouchRipple><h3>about me</h3></Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
    <Box className="intro-section">
      <p className="intro-text">
        <span className='intro-hi'>hi! </span>
        <span className='intro-middle-text'>my name is </span>
        <span className="intro-name">josh.</span>
      </p>
    </Box>
    <Box className="work-section">
      <Stack direction={'row'} spacing={2}>
        <h4>work</h4>
        <div className="horizontal-line"></div>
      </Stack>
      <Stack direction={'column'} spacing={3}>
        
      </Stack>
    </Box>

    <Box className="about-me">
      <img src='../public/images/portrait.png' className='portrait-img'></img>
      {range.map((num) => (
        <Work/>
      ))}
    </Box>
    </>
  )
}

export default App
