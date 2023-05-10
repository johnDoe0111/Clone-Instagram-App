import { ChatBubbleOutline, FavoriteBorder, SentimentVeryDissatisfied, Telegram, TurnedInNot } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";

const Posts = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ducimus commodi placeat pariatur reprehenderit sint at quas repellat libero saepe vitae ea et. Deleniti, reiciendis? Consequatur quisquam nisi aliquid facere.'

    return(

        <Box sx={{ width: '600px' }}>
            <Box sx={{ padding: '14px 20px', backgroundColor: '#EFEFEF' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '32px', height: '32px', backgroundColor: '#C4C4C4', borderRadius: '50%' }}></Box>
                    <Box component='p' sx={{ margin: '0px', ml: '14px' }}>johndoe</Box>
                </Box>
            </Box>
            <Box sx={{  backgroundColor: '#C4C4C4', height: '600px' }}></Box>
            <Box sx={{ padding: '15px 20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <FavoriteBorder/>
                        <ChatBubbleOutline sx={{ ml: '20px' }}/>
                        <Telegram sx={{ ml: '20px' }}/>
                    </Box>
                    <Box><TurnedInNot/></Box>
                </Box>
                <Box>
                    <Box sx={{ fontWeight: 500, mt: '15px' }}>9.999 likes</Box>
                    <Box>
                        <Box component='p' sx={{ fontWeight: 500, m: 0, mt: '8px' }}>
                            johndoe
                            <Box component='span' sx={{ fontWeight: 400, ml: '5px', lineHeight: '16px' }}>
                                {isExpanded ? text : `${text.slice(0,20)}...`}
                                <Box component='button' onClick={toggleExpand} sx={{ border: 'none', cursor: 'pointer', color: '#8E8E8E' }}>
                                    {isExpanded ? 'less' : 'more'}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box component='p' sx={{ m: 0, mt: '10px', color: '#8E8E8E', fontSize: '14px' }}>See 99 comments</Box>
                        <Box component='p' sx={{ m: 0, mt: '10px', color: '#8E8E8E', fontSize: '12px', textTransform: 'uppercase' }}>9 hours ago</Box>
                    </Box>
                    <Box sx={{ width: '559px', display: 'flex', padding: '20px 20px 20px 0', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <SentimentVeryDissatisfied/>
                            <Box sx={{ border:' none', outline: 'none',  width: '105px', ml: '12px'}} component='input' placeholder="Add a comment..."></Box>
                        </Box>
                        <Box component='p' sx={{ color: 'rgba(0, 149, 246, 0.25)', margin: 0, fontWeight: 500, cursor: 'pointer'}}>Post</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Posts;