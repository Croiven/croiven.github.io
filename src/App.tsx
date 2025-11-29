import './App.css'
import { Grid } from '@mui/material'
import { CoreDetails } from './components/core-details'
import { ContentSection } from './components/content-section'

function App() {

  return (
    <>
      <Grid container sx={{ width: '100%', margin: 0 }}>
        <Grid size={12}>
          <CoreDetails />
        </Grid>
        <Grid size={12}>
          <ContentSection />
        </Grid>
      </Grid>
    </>
  )
}

export default App
