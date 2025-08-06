import { Box, Grid, Stack } from '@mui/system'
import Tabs from '@/Component/Tabs'
import { Button, Typography } from '@mui/material'
import IMG1 from '@/assets/OURS.png'

type Props = {}

const Hero = (props: Props) => {
    return (
        <Grid>

            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="flex-start" alignItems="left" spacing={2} sx={{ mt: 5, ml: 5 }}>

                <Tabs />
                <Box>
                    <Typography
                            variant='h1'
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign: 'center',
                                fontFamily: 'poppins',
                                mt: { xs: 0, sm: 2, md: 8, lg: 12 },
                                ml: { xs: 18, sm: 5, md: 10, lg: 27.5 },
                                width: "65px",
                                height: "65px",
                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                                borderRadius: '50%',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderWidth: '3px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            >
                            A+
                    </Typography>

                    <Typography sx={{
                        fontSize: { xs: '1.0rem', sm: '1.2rem', md: '1.5rem' },
                        color: 'white',
                        fontFamily: 'poppins',
                        mt: 2,
                        ml:{ xs: 6, sm: 2, md: 7 },}}>
                        Easy Your Academic Projects  With
                    </Typography>

                    <Box component="img" src={IMG1} alt="Description" sx={{ ml:13,mt:2,width: 310, height: 'auto', display: { xs: 'none', sm: 'block' }, '&:hover': { opacity: 0.8 } }} />

                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(to bottom, #3403f4ff 30%, #16141E 90%)', // Linear gradient background
                            color: 'white',
                            fontFamily: 'poppins',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            boxShadow: '0px 4px 10px rgba(87, 183, 243, 0.1)',
                            mt: 4,
                            mx:'auto',
                            display: 'block',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #070769ff 30%, #2a00e4ff 90%)',
                                transform: 'scale(1.05)',
                                transition: 'transform 0.3s ease-in-out',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
                                background: 'linear-gradient(to bottom, #ffffffff 30%, #515059ff 90%)',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Create your Own
                        </Typography>
                    </Button>
                    
                </Box>
            </Stack>
        </Grid>
    )
}

export default Hero