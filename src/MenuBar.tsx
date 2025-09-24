import { AppBar, Box, Toolbar, Button, Stack} from '@mui/material'
import "./MenuBar.css"
function MenuBar() {
    const handleScrollClick = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
  };
    return (
<Box className="app-bar" position="fixed" zIndex={1000}>
    <AppBar className="menu-bar" position="static" style={{backgroundColor:'#282828'}} elevation={0}>
      <Toolbar>
        <Stack direction="row" spacing={1} className='menu-options-stack'>
          <Button disableRipple><h3 className="appbar-text">home</h3></Button>
          <Button disableRipple onClick={()=>handleScrollClick("work-section")}><h3 className="appbar-text">experience</h3></Button>
          <Button disableRipple><h3 className="appbar-text">projects</h3></Button>
          <Button disableFocusRipple disableTouchRipple><h3 className="appbar-text">about me</h3></Button>
        </Stack>
        <Stack direction="row" spacing={1} className="menu-right-bar">
          <Button disableRipple><h3 className="appbar-text">resume</h3></Button>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>)
}
export default MenuBar;