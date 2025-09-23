import { Card, CardContent, Stack } from '@mui/material'
import './Work.css'
function Work(props: any) {
    return (
        <>
        <Card className="work-card" sx={{backgroundColor: "#282828"}}>
            <CardContent>
                <Stack direction={"row"} style={{position:'relative'}}>
                    <Stack direction={'column'} textAlign="left">
                        <h1 className='work-card-workplace'>
                        {props.workplace}
                        </h1>
                        <h3 className="work-card-worktitle">
                            {props.workTitle}
                        </h3>
                    </Stack>
                    <Stack style={{position:"absolute",right:0}} direction={"column"} spacing={2} textAlign="end">
                        <h2>
                            {props.workDates}
                        </h2>
                        <h2>{props.location}</h2>
                    </Stack>
                </Stack>
                <h5 style={{"fontSize":"14px"}}>
                    {props.description}
                </h5>
            </CardContent>
        </Card>
        </>
    )
}
export default Work