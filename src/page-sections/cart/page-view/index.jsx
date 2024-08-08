import { Fragment } from 'react';
// MUI
import Grid from '@mui/material/Grid';
// CUSTOM COMPONENTS
import CartTable from '../CartTable';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
import HeaderEffect from '@/layouts/root/HeaderEffect';
// CUSTOM DEFINED HOOK
import useNavigate from '@/hooks/useNavigate';
// CUSTOM PAGE SECTION COMPONENTS
import OrderSummery from '@/page-sections/ecommerce/order-summery';
// STYLED COMPONENTS
import { Heading, StyledContainer } from './styles';
export default function CartPageView() {
  const navigate = useNavigate();
  return <Fragment>
      {/* PAGE HEADING SECTION */}
      <HeaderEffect>
        <Heading>
          <SectionTitle centered title="Cart" />
          <Paragraph fontSize={18}>Complete Your Transaction in Just a Few Clicks.</Paragraph>
        </Heading>
      </HeaderEffect>

      <StyledContainer maxWidth="lg">
        <Grid container spacing={3}>
          {/* CART LIST TABLE */}
          <Grid item md={8} xs={12}>
            <CartTable />
          </Grid>

          {/* ORDER SUMMERY SECTION */}
          <Grid item md={4} xs={12}>
            <OrderSummery showCoupon buttonText="Check Out Now" handleClick={() => navigate('/dashboards/billing-address')} />
          </Grid>
        </Grid>
      </StyledContainer>
    </Fragment>;
}