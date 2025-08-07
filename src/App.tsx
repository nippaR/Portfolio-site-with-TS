import { Navbar } from "@/Component/Navbar"
import {Grid} from '@mui/material'
import Hero from "./Component/Hero"
import Contact from "./Component/pages/Contact"
import Home from "./Component/pages/Home"

function App() {

  return (
      <Grid>
        <Navbar/>
        <Grid id="home">
          <Home/>
        </Grid>
        
        <Grid id="category">
          <Hero/>
        </Grid>

        <Grid id="contact">
          <Contact/>
        </Grid>
      </Grid>
  )
}

export default App
