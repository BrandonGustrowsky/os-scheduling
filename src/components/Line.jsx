import { useTheme, useMediaQuery } from "@mui/material"

const Line = (props) => {
    const { rotation, width, height, color } = props
    const theme = useTheme();
    
    return (
        <hr style={{
            width,
            // height,
            background: color,
            transform: `rotate(${(rotation)})`,
            borderBottom: `${height} solid ${color}`,
        }}/>
    )
}

export default Line