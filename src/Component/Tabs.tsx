import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Cards from '@/Component/Cards';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    }

    function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 4 }}>
            <Typography sx={{ color: 'white' }}>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

    function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }

    export default function CleanTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width:{md:'55%', sm:'100%'}, bgcolor: '#16141E', minHeight: 'auto', mt:5 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs example"
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: 'rgba(64, 0, 255, 0.25)' } }}
            variant="fullWidth"
            >
            <Tab label="Sites" {...a11yProps(0)} sx={{ color: 'white', fontFamily: 'poppins', fontWeight: 'bold' }} />
            <Tab label="Mobile Apps" {...a11yProps(1)} sx={{ color: 'white', fontFamily: 'poppins', fontWeight: 'bold' }} />
            <Tab label="Version Control" {...a11yProps(2)} sx={{ color: 'white', fontFamily: 'poppins', fontWeight: 'bold' }} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}><Cards/></TabPanel>
        <TabPanel value={value} index={1}>Content for Page Two</TabPanel>
        <TabPanel value={value} index={2}>Content for Page Three</TabPanel>
        </Box>
    );
}
