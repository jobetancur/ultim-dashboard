import Grid from '@mui/material/Grid';
// CUSTOM COMPONENTS
import PricingCard from './PricingCard';
// CUSTOM DUMMY DATA
import { DATA } from '../data';
// STYLED COMPONENT
import { StyledContainer } from './styles';
export default function Section2() {
  return <StyledContainer maxWidth="lg">
      <Grid container spacing={4}>
        {DATA.map(item => <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PricingCard icon={item.icon} price={item.price} title={item.title} popular={item.popular} features={item.features} />
          </Grid>)}
      </Grid>
    </StyledContainer>;
}