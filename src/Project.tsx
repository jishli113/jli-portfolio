import { Stack, Grid, Card, CardActionArea,CardContent} from '@mui/material'
import './Project.css'
function Project(props: any) {
    const openGithubLink = (link:string) =>{
        window.open(link, '_blank');
    }
    return (
        <>
        <Card className="project-card" sx={{borderRadius: "16px", padding:"2px", backgroundColor:"#282828", '&:hover': {
          boxShadow: 8,cursor:"pointer"}}}>
            <CardActionArea onClick={() => openGithubLink(props.github)}>
  <CardContent>
    <Stack direction="column" spacing={1} textAlign="start" sx={{ m: "4px" }}>
      <h3 className="project-title-text">{props.title}</h3>
      <h2>{props.description}</h2>

      <Grid container spacing={1}>
        {props.tools?.map((tool: string) => (
            <Card sx={{ backgroundColor: "#282828", width: "fit-content", px: 1, py: 0.5 }}>
              <h1 className="tool-text">{tool}</h1>
            </Card>
        ))}
      </Grid>
    </Stack>
  </CardContent>
</CardActionArea>

        </Card>
        </>
    )
}
export default Project