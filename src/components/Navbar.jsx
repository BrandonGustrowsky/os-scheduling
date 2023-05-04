import { Box, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub, Person } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import Icon from "./Icon";

const Navbar = () => {
    const theme = useTheme()
    const resizeIcons = useMediaQuery(theme.breakpoints.down(600));

    return (
        <Box sx={{
            width: "100%",
            height: "max-content",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start"
        }}>
            <div style={{ width: "190px"}}></div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                color: theme.palette.primary.main,
            }}>
                <Typography variant="h1">MLFQ Scheduler</Typography>
                <Typography variant="h2">Brandon Gustrowsky</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                gap: (resizeIcons ? "5px" : "20px"),
                marginTop: "20px",
                justifyContent: "right"
            }}>
                <Icon
                    link="https://www.brandongustrowsky.com/"
                    tooltip="https://www.brandongustrowsky.com/"
                    icon={<PersonIcon sx={{
                        fontSize: (resizeIcons ? "35px" : "50px"),
                        color: theme.palette.primary.main
                    }}/> }
                />
                <Icon
                    link="https://www.linkedin.com/in/brandon-gustrowsky/"
                    tooltip="https://www.linkedin.com/in/brandon-gustrowsky/"
                    icon={<LinkedInIcon sx={{
                        fontSize: (resizeIcons ? "35px" : "50px"),
                        color: theme.palette.blue.main
                    }} />}
                />
                {/* https://github.com/BrandonGustrowsky */}
                <Icon
                    link="https://github.com/BrandonGustrowsky"
                    tooltip="https://github.com/BrandonGustrowsky"
                    icon={
                        <GitHub sx={{
                            fontSize: (resizeIcons ? "35px" : "50px"),
                            color: theme.palette.primary.main
                        }} />
                    }
                />
            </Box>
        </Box>
    )
}

export default Navbar