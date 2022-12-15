import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks'
import { selectUser, User } from '../userinfo/userSlice';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: "pointer"
}));

const user: User = {
    username: "pdrojack",
    instagram: "pdrojack",
    links: [{
        website: "spotify",
        url: "http://spotify.com/pdrojac"
    }],
    email: "pdro@jack.com",
    profile: "profile.photo"
}

const Links = () => {

    // const user: User = useAppSelector(selectUser);

    return (
        <Grid lg={6} container justifyContent="center" marginTop={2}>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    {
                        user.links.map( (l,i) => {
                            return <Item key={i} ><Typography>{l.website}</Typography></Item>
                        })
                    }
                </Stack>
            </Box>
        </Grid>
    )
}

export default Links;