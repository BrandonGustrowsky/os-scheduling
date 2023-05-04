import { Box, Tooltip, Typography, useTheme } from "@mui/material"

const Process = (props) => {
    const { processDs, contextSwitchTime } = props
    const theme = useTheme();

    return (
        <Tooltip
            arrow={true}
            placement="top"
            followCursor
            title={
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    <Typography variant="p">Process name: {processDs?.name}</Typography>
                    <Typography variant="p">Process length: {processDs?.length}</Typography>
                    <Typography variant="p">Time Until Process Finishes: {processDs?.timeLeft}</Typography>
                    <Typography variant="p">Remaining Time Quantum: {processDs?.untilContextSwitch}</Typography>
                    <Typography variant="p">{processDs?.isExecuting ? "Is" : "Not"} currently executing</Typography>
                </Box>

            }>
            <Box sx={{
                background: `rgb(${processDs?.RGB.red}, ${processDs?.RGB.green}, ${processDs?.RGB.blue})`,
                width: "100px",
                height: "100%",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: `1px solid ${theme.palette.black.main}`
            }}>
                <Typography variant="processTitle">{processDs?.name}</Typography>
            </Box>
        </Tooltip>


    )
}

export default Process