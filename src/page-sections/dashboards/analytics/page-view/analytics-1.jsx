import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// CUSTOM PAGE SECTION COMPONENTS

import { AuthContext } from '@/contexts/firebaseContext';
import { useContext } from 'react';

export default function Analytics1PageView() {

  const { user } = useContext(AuthContext);

  const { role, organization, services } = user;

  // console.log(services);

  if(role === 'client') {
    return <div className="pt-2 pb-4">
      <h1>{organization}</h1>
      <h2>Tus servicios</h2>
      <Grid container spacing={2}>
        {
          services.chat && <Grid item xs={12} md={6}> Chat </Grid>
        }
        {
          services.email && <Grid item xs={12} md={6}> Email </Grid>
        }
        {
          services.sms && <Grid item xs={12} md={6}> SMS </Grid>
        }
      </Grid>

    </div>;
  } else if (role === 'super-admin') {
    return <div className="pt-2 pb-4">
      <h1>Admin Dashboard</h1>
    </div>;
  }
}