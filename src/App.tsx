
import {Box, Stack, Link, Grid, AppBar, Button, Toolbar} from '@mui/material'
import Work from './Work'
import './App.css'
import works from "./values/work.json"
import projects from './values/projects.json'
import {type workInterface} from "./json-interfaces/workInterface"
import { type projectInterface} from './json-interfaces/projectInterface'
import { Email, LinkedIn, GitHub } from '@mui/icons-material'
import Project from './Project'
import { useRef } from 'react'
import portrait from "../public/images/portrait.png"

function App() {
  const workRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const worksStore: workInterface[] = works.works;
  const projectStore: projectInterface[] = projects.projects;
  const handleWorkScrollClick = () =>{
        workRef.current?.scrollIntoView({"behavior":"smooth"});
  };
  const handleHomeScrollClick = () =>{
        homeRef.current?.scrollIntoView({"behavior":"smooth"});
  };
  const handleProjectScrollClick = () =>{
        projectsRef.current?.scrollIntoView({"behavior":"smooth"});
  };
  return (
    <>
    <Box className="app-bar" position="fixed" zIndex={1000}>
    <AppBar className="menu-bar" position="static" style={{backgroundColor:'#282828'}} elevation={0}>
      <Toolbar>
        <Stack direction="row" spacing={1} className='menu-options-stack'>
          <Button disableRipple onClick={handleHomeScrollClick}><h3 className="appbar-text">home</h3></Button>
          <Button disableRipple onClick={handleWorkScrollClick}><h3 className="appbar-text">experience</h3></Button>
          <Button disableRipple onClick={handleProjectScrollClick}><h3 className="appbar-text">projects</h3></Button>
          <Button disableFocusRipple disableTouchRipple><h3 className="appbar-text">about me</h3></Button>
        </Stack>
        <Stack direction="row" spacing={1} className="menu-right-bar">
          <Button disableRipple><h3 className="appbar-text">resume</h3></Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
    <Box className="intro-section"  ref = {homeRef} position="relative" marginBottom="38%" marginTop="5%">
      <Box position="absolute" left="10%">
        <Stack direction="column" spacing="3%" textAlign="start">
          <Box>
            <span className="intro-text">
              <span className='intro-hi'>hi! </span>
              <span className='intro-middle-text'>my name is </span>
              <span className="intro-name">josh.</span>
            </span>
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
      <img src={portrait} className='portrait-img'></img>
    </Box>
    </Box>
    <Box className="work-section" ref={workRef}>
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
    <Box className="project-section" ref={projectsRef}>
      <Stack direction={'row'} spacing={2} className="work-section-title">
        <Box className="work-section-work-div">
          <h4>projects</h4>
        </Box>
        <Box className="work-section-title-line-div">
          <div className="horizontal-line"></div>
        </Box>
      </Stack>
      <Box alignItems="center">
        <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(projectStore).map((project) => (
              <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                <Project title = {project.title} description = {project.description} tools={project.tools} github={project.github} className="project"/>
              </Grid>
            ))}
</Grid>
      </Box>
    </Box>
    </>
  )
}

export default App
