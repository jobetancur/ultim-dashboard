import Grid from '@mui/material/Grid';
// CUSTOM COMPONENTS
import InfoCard from '../InfoCard';
import RecentOrders from '../RecentOrders';
import EarningReport from '../EarningReport';
import ProjectStatus from '../ProjectStatus';
import LeadVSCustomer from '../../crm-2/LeadVsCustomer';
import PopularProducts from '../../sales/PopularProducts';
import { Footer } from '@/page-sections/dashboards/_common';
// CUSTOM DATA
import { CARD_LIST } from '@/__fakeData__/dashboards/sales';
export default function SalesV2PageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {/* DIFFERENT ANALYTICS DATA */}
        <Grid container item spacing={3} xs={12} lg={6}>
          {CARD_LIST.map((item, index) => <Grid key={index} item xs={12} sm={6} md={3} lg={6}>
              <InfoCard trend={item.trend} title={item.title} amount={item.amount} percentage={item.percentage} />
            </Grid>)}
        </Grid>

        {/* EARNING REPORT DATA VISUAL CHART */}
        <Grid item xs={12} lg={6}>
          <EarningReport />
        </Grid>

        {/* LEAD & CUSTOMER DATA VISUAL CHART */}
        <Grid item lg={8} md={7} xs={12}>
          <LeadVSCustomer />
        </Grid>

        {/* PROJECT STATUS DATA VISUAL CHART */}
        <Grid item lg={4} md={5} xs={12}>
          <ProjectStatus />
        </Grid>

        {/* POPULAR PRODUCTS DATA TABLE */}
        <Grid item lg={8} md={7} xs={12}>
          <PopularProducts />
        </Grid>

        {/* RECENT ORDER LIST CARD */}
        <Grid item lg={4} md={5} xs={12}>
          <RecentOrders />
        </Grid>

        {/* FOOTER CARD */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}