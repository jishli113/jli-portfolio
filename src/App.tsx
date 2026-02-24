import { Box, Stack, Link, Grid, AppBar, Button, Toolbar, Container, IconButton} from '@mui/material'
import Work from './Work'
import './App.css'
import works from "./values/work.json"
import projects from './values/projects.json'
import { type workInterface } from "./json-interfaces/workInterface"
import { type projectInterface } from './json-interfaces/projectInterface'
import { Email, LinkedIn, GitHub } from '@mui/icons-material'
import Project from './Project'
import { useRef } from 'react'
import portrait from "../public/images/portrait.png"
import resumePdf from "../public/static/jli-resume.pdf"

function App() {
  const workRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const worksStore: workInterface[] = works.works;
  const projectStore: projectInterface[] = projects.projects;

  const handleWorkScrollClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeScrollClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectScrollClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutMeScrollClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const displayResume = () => {
    window.open(resumePdf, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Fixed AppBar */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: '#282828', zIndex: 1000 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={1} className='menu-options-stack'>
            <Button disableRipple onClick={handleHomeScrollClick}><h3 className="appbar-text">home</h3></Button>
            <Button disableRipple onClick={handleWorkScrollClick}><h3 className="appbar-text">experience</h3></Button>
            <Button disableRipple onClick={handleProjectScrollClick}><h3 className="appbar-text">projects</h3></Button>
            <Button disableFocusRipple disableTouchRipple onClick={handleAboutMeScrollClick}><h3 className="appbar-text">about me</h3></Button>
          </Stack>
          <Stack direction="row" spacing={1} className="menu-right-bar">
            <Button disableRipple onClick={displayResume}><h3 className="appbar-text">resume</h3></Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Spacer so content isn’t hidden under fixed AppBar */}
      <Toolbar />

      {/* Intro Section (responsive, no overlap, bigger gap) */}
      <Box ref={homeRef} sx={{ position: "relative", py: { xs: 6, sm: 8, md: 10 }, bgcolor: "transparent" }}>
        <Container maxWidth="lg">
          {/* Grid guarantees no overlap; bigger columnGap for more separation */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              columnGap: { xs: 0, md: 24 },   // increased gap between text and image
              rowGap: { xs: 6, md: 0 },
              alignItems: { md: "center" },
            }}
          >
            {/* Left column: intro text */}
            <Box sx={{ minWidth: 0, maxWidth: "100%", wordBreak: "break-word" }}>
              <Box>
                <span className="intro-text">
                  <span className='intro-hi'>hi! </span>
                  <span className='intro-middle-text'>my name is </span>
                  <span className="intro-name">josh.</span>
                </span>
              </Box>

              <Stack direction="column" spacing="1%" sx={{ mt: 1 }}>
                <h5>b.s. computer science @ uc santa cruz</h5>
                <h5>san jose, ca</h5>
              </Stack>

             <h5 style={{ marginTop: 16 }}>links:</h5>
<Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
  <IconButton
    component={Link}
    href="https://www.linkedin.com/in/joshua-li-8489771b2/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    sx={{ color: "#fbf1c7", "&:hover": { color: "#fbf1c7", opacity: 0.8 } }}
  >
    <LinkedIn sx={{ fontSize: 40 }} />
  </IconButton>

  <IconButton
    component={Link}
    href="https://github.com/jishli113"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    sx={{ color: "#fbf1c7", "&:hover": { color: "#fbf1c7", opacity: 0.8 } }}
  >
    <GitHub sx={{ fontSize: 40 }} />
  </IconButton>

  <IconButton
    component={Link}
    href="mailto:your.email@example.com"
    aria-label="Email"
    sx={{ color: "#fbf1c7", "&:hover": { color: "#fbf1c7", opacity: 0.8 } }}
  >
    <Email sx={{ fontSize: 40 }} />
  </IconButton>
</Stack>
            </Box>

            {/* Right column: responsive portrait */}
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Box
                component="img"
                className="portrait-img"
                src={portrait}
                alt="portrait"
                sx={{
                  width: "100%",
                  maxWidth: { xs: 560, sm: 620, md: 680, lg: 760 },
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Work */}
      <Box className="section" ref={workRef}>
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
            <Work
              key={`${work.workplace}-${work.workTitle}-${work.workDates}`}
              description={work.description}
              workDates={work.workDates}
              workplace={work.workplace}
              workTitle={work.workTitle}
              location={work.location}
              className="work-card"
            />
          ))}
        </Stack>
      </Box>

      {/* Projects */}
      <Box className="section" ref={projectsRef}>
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
              <Grid key={project.title} size={{ xs: 2, sm: 4, md: 4 }}>
                <Project
                  title={project.title}
                  description={project.description}
                  tools={project.tools}
                  github={project.github}
                  className="project"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* About Me */}
      <Box className="section" ref={aboutMeRef}>
        <Stack direction={'row'} spacing={2} className="work-section-title">
          <Box className="work-section-work-div">
            <h4>about me</h4>
          </Box>
          <Box className="work-section-title-line-div">
            <div className="horizontal-line"></div>
          </Box>
        </Stack>
        <Box>
          <h4 className='about-me-text'>
            my name is joshua li and i am currently a junior at the university of california santa cruz majoring in computer science and minoring in mathematics. i love developing software,
            especially with new languages and frameworks. some fields that interest me are ai/ml, distributed systems, and backend development.
            outside of computer science i love exercise, more specifically basketball and running, exploring new food spots, travelling, snowboarding, and playing <a href='https://www.chess.com/member/jishhhhhhhhhh'>chess</a>.
          </h4>
        </Box>
      </Box>
    </>
  )
}

export default App
