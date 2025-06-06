import { Box, Button, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from 'next/image';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

export default function Home() {
  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      <Grid size={3} sx={{ padding: 4 }}>
        <Image src="/icon.ico" width="200" height="200" alt="logo"></Image>
        <br />
        <Typography variant="subtitle1" component="h6">
            <em>Inveniamus Ensantinas</em>
            <br/>
            (Let's find Salamanders)
        </Typography>
      </Grid>
      <Grid size={9} sx={{ padding: 4 }}>
          <Typography variant="h4" component="h1">
            Instructions
          </Typography>
          <List>

            <ListItem>
              <ListItemIcon>
                <LooksOneIcon color="primary" />
              </ListItemIcon>
              <ListItemText>
                Step 1
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LooksTwoIcon color="primary" />
              </ListItemIcon>
              <ListItemText>
                Step 2
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Looks3Icon color="primary" />
              </ListItemIcon>
              <ListItemText>
                Step 3
              </ListItemText>
            </ListItem>

          </List>
          <Button variant="contained" color="primary" href="/videos">Select a Video</Button>
        <br />
      </Grid>
    </Grid>
  );
}
