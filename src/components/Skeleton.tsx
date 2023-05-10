import { Box } from "@mui/material";
import { ISkeleton } from "../types/ISkeleton";

export const Skeleton: React.FC<ISkeleton> = ({username}) => {
    
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ":not(:first-of-type)": { mt: '12px' }}}>
            <Box sx={{ width: '150px', display: 'flex', justifyContent: 'space-between'}}>
                <Box
                    sx={{
                        width: `37px`,
                        heigth: `37px`,
                        backgroundColor: '#C4C4C4',
                        borderRadius: '50%'
                    }}
                >
                </Box>
                <Box>
                    <Box sx={{
                        margin: 0
                    }} component='p'>{username}</Box>
                    <Box sx={{
                        margin: 0,
                        color: '#8E8E8E',
                        fontSize: '12px'
                    }} component='p'>Suggestion for you</Box>
                </Box>
            </Box>
            <Box sx={{ color: '#0095F6', fontSize: '12px' }} component='p'>Follow</Box>
        </Box>
    )
}