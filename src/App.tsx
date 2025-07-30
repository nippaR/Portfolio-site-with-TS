import Navbar from "@/Component/Navbar"
import {Button, Grid} from '@mui/material'

function App() {

  return (
      <Grid>

        <Navbar/>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Grid>
  )
}

export default App
