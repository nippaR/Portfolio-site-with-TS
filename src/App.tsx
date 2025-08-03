import { Navbar } from "@/Component/Navbar"
import {Grid} from '@mui/material'
import Hero from "./Component/Hero"

function App() {

  return (
      <Grid>
        <Navbar/>
        <Grid>
          <Hero/>
        </Grid>
      </Grid>
  )
}

export default App
