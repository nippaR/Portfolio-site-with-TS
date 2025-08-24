import { Navbar } from "@/Component/Navbar";
import { Grid } from '@mui/material';
import Hero from "./Component/Hero";
import Contact from "./Component/pages/Contact";
import Home from "./Component/pages/Home";
import Footer from "./Component/pages/Footer";

function App() {
  return (
    <Grid sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <Grid id="home">
        <Home />
      </Grid>
      
      <Grid id="category">
        <Hero />
      </Grid>

      <Grid id="contact">
        <Contact />
      </Grid>

      <Footer />
    </Grid>
  )
}

export default App;