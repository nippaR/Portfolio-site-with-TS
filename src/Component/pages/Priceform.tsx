import { Box, Typography } from '@mui/material';

type Props = {}

const serviceItems = [
    { description: 'One CRUD', price: '2000.00', details: '(with version control)' },
    { description: 'Only Frontend part', price: '1200.00', details: '' },
    { description: 'Only Backend part', price: '1200.00', details: '' },
    { description: 'Connect Frontend and Backend', price: '1100.00', details: '' },
    { description: 'Version Control and Integration (Git)', price: '1300.00', details: '' },
    { description: 'Login Pages with validation', price: '1200.00', details: '' },
    { description: 'Registration Pages with validation', price: '1300.00', details: '' }
];

const Priceform = (props: Props) => {
    return (
        <Box sx={{ p: 4, background: "linear-gradient(to bottom, #0f0c29, #020452ff, #0e0e30ff)", borderRadius: "12px", color: "white" }}>
            {/* Title */}
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    '&:hover': {
                        color: '#FFFF00' // Change this to the color you want on hover
                    }
                }}
            >
                Price List
            </Typography>

            {serviceItems.map((item, index) => (
                <Typography key={index} variant='h6' gutterBottom sx={{ '&:hover': { color: '#ffff00', transform: 'scale(1.05)' }, mb:2  }}>
                    {item.description} : <span style={{ fontSize: '0.8em' }}>LKR</span> {item.price} {item.details}
                </Typography>
            ))}
        </Box>
    )
}

export default Priceform;