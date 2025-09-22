
import { AppBar, Box, Toolbar, Button, Stack, Link} from '@mui/material'
import Work from './Work'
import './App.css'
import works from "./values/work.json"
import {type workInterface} from "./json-interfaces/workInterface"
import { Email, LinkedIn, GitHub } from '@mui/icons-material'

function App() {
  const worksStore: workInterface[] = works.works;
  // const workPlaces: string[] = ["aws", "rimini street", "uc santa cruz"];
  // const workTitles: string[] = ["sde intern", "swe intern", "undergraduate student researcher"];
  // const workDates: string[] = ["june 2025 - sep 2025"];
  // const descriptions: string[] = ["q business", "ai-powered email summarizations", "differentiable simulators with prof. razvan marinescu"];

  // const start = 0;
  // const end = workPlaces.length;
  // const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);

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
    <Box className="intro-section" position="relative" marginBottom="38%" marginTop="5%">
      <Box position="absolute" left="10%">
        <Stack direction="column" spacing="3%" textAlign="start">
          <Box>
            <p className="intro-text">
              <span className='intro-hi'>hi! </span>
              <span className='intro-middle-text'>my name is </span>
              <span className="intro-name">josh.</span>
            </p>
          </Box>
          <Stack direction="column" spacing="1%">
            <h5>uc santa cruz '26</h5>
            <h5>san jose, ca</h5>
          </Stack>

          <h5 className=''>
            links:
          </h5>

          <Stack direction="row" spacing="3%">
            <Link href="https://www.linkedin.com/in/joshua-li-8489771b2/" target="_blank" rel="noopener noreferrer">
              <LinkedIn/> 
            </Link>
            <Link href="https://github.com/jishli113" target="_blank" rel="noopener noreferrer">
              <GitHub/>
            </Link>
            <Email/>
          </Stack>
        </Stack>
      </Box>
      <Box position="absolute" right="10%">
      <img src='../public/images/portrait.png' className='portrait-img'></img>
    </Box>
    </Box>
    <Box className="work-section">
      <Stack direction={'row'} spacing={2} className="work-section-title">
        <Box className="work-section-work-div">
          <h4>work</h4>
        </Box>
        <Box className="work-section-title-line-div">
          <div className="horizontal-line"></div>
        </Box>
      </Stack>
      <Stack direction={'column'} spacing={3} className='work-stack'>
        {worksStore.map((work) => (
        <>
          <Work description={work.description} workDates = {work.workDates}
            workplace = {work.workplace} workTitle={work.workTitle} location={work.location} className="work-card"/>
        </>
      ))}
      </Stack>
    </Box>
    </>
  )
}

export default App
