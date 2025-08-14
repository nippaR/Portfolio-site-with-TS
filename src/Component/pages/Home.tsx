import { Grid, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import IMG2 from "@/assets/AniationTitle.png";
import BackgroundVideo from "@/assets/bg.mp4";

type Props = {};

const MotionGrid = motion(Grid);
const MotionImg = motion.img;

const Home = (props: Props) => {

    const isSmallScreen = window.innerWidth < 600;

  // Smooth image scroll animation
    const fadeInUp = {
        initial: { x: '-100%' },
        animate: {
        x: '100%',
        transition: {
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear",
            type: "tween" as const,
            delay: 0.5,
        },
        },
    };

    // Fade and slide up animation for text
    const startAni = {
        initial: { opacity: 0, y: 120 },
        animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            delay: 0.5,
            ease: 'easeOut',
            type: 'tween',
        },
        },
    };

    return (
        <>
        {/* Moving Image */}
        {   isSmallScreen ? null : (
                <MotionImg
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    src={IMG2}
                    alt="Hero Image"
                    style={{
                    width: 450,
                    height: 'auto',
                    marginTop: 16,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    }}
                />
            )
        }

        {/* Background + Content */}
        <Grid
            container
            direction="column"
            sx={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            }}
        >
            {/* Background Video */}
            <video
            src={BackgroundVideo}
            autoPlay
            loop
            muted
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // zIndex: -1,
            }}
            />

            {/* Centered Content */}
            <MotionGrid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
            initial="initial"
            animate="animate"
            variants={startAni}
            sx={{
                flexGrow: 1,
                fontFamily: 'poppins',
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                px: 2,
            }}
            >
            <Typography
                sx={{
                color: '#fff',
                fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '4.5rem',
                },
                fontWeight: 'bold',
                }}
            >
                We make it easy
            </Typography>

            <Typography
                sx={{
                color: '#fff',
                mt: 2,
                px: 2,
                fontSize: {
                    xs: '1.2rem',
                    sm: '1.6rem',
                    md: '2rem',
                    lg: '2.5rem',
                },
                fontWeight: 'bold',
                backgroundColor: '#07298e24',
                width: {
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '50%',
                },
                borderRadius: '8px',
                }}
            >
                Create beautiful and functional <br /> websites, Easily!
            </Typography>

            <Button
                variant="contained"
                sx={{
                mt: 2,
                bgcolor: '#2137ffff',
                '&:hover': { bgcolor: '#ff068bff' },
                width: '150px',
                borderRadius: '8px',
                }}
                onClick={() =>
                window.open('https://admirable-pavlova-07fae5.netlify.app/', '_blank')
                }
            >
                Live Demo
            </Button>
            </MotionGrid>
        </Grid>
        </>
    );
};

export default Home;
