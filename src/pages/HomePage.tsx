import Posts from "../components/Posts";
import { useAppDispatch } from "../hooks/hooks";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Skeleton } from "../components/Skeleton";
import { mock } from "../mock";

const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    // const exit = () => {
    //     Cookies.remove('user')
    //     dispath(checkAutorization())
    // }

    return (
        <Box >
            <Container sx={{ width: '980px' }}>
                <Header/>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '24px' }}>
                    <Posts/>
                    <Box>
                       <Box sx={{ width: '300px', padding: '30px 0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '50%',
                                            backgroundColor: '#C4C4C4'
                                        }}
                                    >
                                    </Box>
                                    <Box sx={{ marginLeft: '12px' }}>
                                        <Box
                                            component='p'
                                            sx={{
                                                color: '#000000',
                                                fontWeight: 500,
                                                margin: 0
                                            }}
                                        >
                                            johndoe
                                        </Box>
                                        <Box
                                            component='span'
                                            sx={{
                                                color: '#8E8E8E'
                                            }}
                                        >
                                            John Doe
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{ fontSize: '12px', color: '#0095F6' }}>Change</Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ color: '#8E8E8E' }} component='p'>Suggestions for you</Box>
                                <Box sx={{ fontSize: '12px', color: '#262626' }} component='p'>See all</Box>
                            </Box>
                            <Box>
                                {mock.map(skeleton => (
                                    <Skeleton key={skeleton.id} username={skeleton.username}/>
                                ))}
                            </Box>
                            <Box component='p' sx={{ color: '#8E8E8E', fontSize: '12px', mt: '32px' }}>
                                Information · Help · Prisoner · API · Job · Privacity · Conditions · Locations · Trending accounts · Hashtags · Language
                            </Box>
                            <Box sx={{ color: '#8E8E8E', fontSize: '12px', mt: '18px' }} component='p'>© 2022 INSTAGRAM FROM SIMMXS</Box>
                       </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default HomePage;