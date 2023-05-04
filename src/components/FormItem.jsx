import { Input, InputLabel, Typography, Box, useTheme, IconButton } from "@mui/material"
import { QueueDS } from "../classes/Queue.class"
import { AddBox } from "@mui/icons-material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SaveIcon from '@mui/icons-material/Save';


const FormItem = (props) => {
    const { text, width, id, queuesAndTimes, setQueuesAndTimes, newProcess, setNewProcess, objKey, isDisabled, changeFunction, statsProp, isMultipleStates, stats, setStats } = props
    const state = (queuesAndTimes ? queuesAndTimes : newProcess)
    const setState = (setQueuesAndTimes ? setQueuesAndTimes : setNewProcess)

    const theme = useTheme()
    return (
        <Box>
            <InputLabel
                htmlFor={`input-${id}`}>
                <Box sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center"
                }}>
                    <Typography
                        variant="h6"
                        sx={{ whiteSpace: "wrap", }}
                    >
                        {text}
                    </Typography>
                    <IconButton
                        sx={{
                            display: !changeFunction ? "none" : "block",
                        }}
                        onClick={ changeFunction }
                    >
                        <AddBox sx={{
                            color: theme.palette.primary.main,
                            fontSize: "30px"
                        }} />
                    </IconButton>
                </Box>
            </InputLabel>
            <Input
                id={`input-${id}`}
                disableUnderline={true}
                disabled={isDisabled}
                value={ isDisabled ? statsProp : state.objKey }
                sx={{
                    width,
                    height: "45px",
                    background: theme.palette.black.main,
                    border: `2px solid ${theme.palette.secondary.main}`,
                    color: theme.palette.primary.main,
                    paddingLeft: "10px"
                }}
                onChange={(event) => {
                    setState({
                        ...state,
                        [objKey]: (String([objKey]) === "name" ?
                            event.target.value : Number(event.target.value))
                    })
                    isMultipleStates ? setStats({...stats, untilReset: Number(event.target.value)}) : console.log("Only one state")
                }} />
        </Box>
    )
}

export default FormItem