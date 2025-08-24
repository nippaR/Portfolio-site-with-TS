import { Box,Typography,IconButton } from '@mui/material'
import { Facebook, LinkedIn, Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import IMG1 from '@/assets/OURS.png'

type Props = {}

const Priceform = (props: Props) => {
    return (
        <Box sx={{ p: 4, background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)", borderRadius: "12px", color: "white" }}>

            {/* Footer */}
            <Box sx={{ mt: 4, p: 3, backgroundColor: "#1a1a2e", borderRadius: "12px", textAlign: "center" }}>
                {/* Logo */}
                <Box sx={{ mb: 2 }}>
                    <img src={IMG1} alt="logo" style={{ height: "50px" }} />
                </Box>

                {/* Social Media Icons */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                    <IconButton color="secondary" href="https://facebook.com" target="_blank">
                        <Facebook />
                    </IconButton>
                    <IconButton color="secondary" href="https://linkedin.com" target="_blank">
                        <LinkedIn />
                    </IconButton>
                    <IconButton color="secondary" href="https://instagram.com" target="_blank">
                        <Instagram />
                    </IconButton>
                    <IconButton color="secondary" href="https://twitter.com" target="_blank">
                        <Twitter />
                    </IconButton>
                    <IconButton color="secondary" href="https://wa.me/123456789" target="_blank">
                        <WhatsApp />
                    </IconButton>
                </Box>

                {/* Copyright */}
                <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
                    © 2025 Your Company. All rights reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default Priceform
