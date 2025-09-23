import { Stack, Grid, Card} from '@mui/material'
import './Project.css'
function Project(props: any) {
    return (
        <>
        <Card className="project-card" sx={{borderRadius: "16px", padding:"2px", backgroundColor:"#282828"}}>
                <Stack direction="column" spacing="6%" textAlign="start" sx={{margin:"4px"}}>
                    <h3 className="project-title-text">
                        {props.title}
                    </h3>
                    <h2>
                        {props.description}
                    </h2>
                    <Grid container spacing={2}>
                        {props.tools.map((tool: any) => {
                            return (<Card sx={{backgroundColor:"#282828", width:"fit-content", padding:"2px"}}>
                                <h1 className="tool-text">{tool}</h1>
                            </Card>)
                        })}
                    </Grid>
                </Stack>
        </Card>
        </>
    )
}
export default Project