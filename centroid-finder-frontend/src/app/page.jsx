import { Box, Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';

export default function Home() {
  return (
    <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }} sx={{ padding:4}}>
      <Grid size={3}>
        <Image src="/icon.ico" width="200" height="200" alt="logo"></Image>
        <br />
        <Typography variant="subtitle1" component="h6">
            <em>Inveniamus Ensantinas</em>
            <br/>
            (Let's find Salamanders)
        </Typography>
      </Grid>
      <Grid size={9}>
          <Typography variant="h4" component="h1">
            Instructions
          </Typography>
          <Button variant="contained" color="primary" href="/videos">Select a Video</Button>
        <br />
      </Grid>
    </Grid>
  );
}
