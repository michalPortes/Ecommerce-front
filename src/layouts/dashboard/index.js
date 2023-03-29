// @mui material components
import Grid from '@mui/material/Grid'
import { Card } from '@mui/material'

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox'

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar'
import Footer from '../../examples/Footer'
import ComplexStatisticsCard from '../../examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Data
import reportsBarChartData from '../../layouts/dashboard/data/reportsBarChartData'
import reportsLineChartData from '../../layouts/dashboard/data/reportsLineChartData'
// Dashboard components
import Projects from '../../layouts/dashboard/components/Projects'
import OrdersOverview from '../../layouts/dashboard/components/OrdersOverview'

import MDTypography from '../../components/MDTypography'
import DefaultProjectCard from '../../examples/Cards/ProjectCards/DefaultProjectCard'
import camisa_teste from '../../assets/images/camisas/camisa_teste.jpg'
import camisa_teste1 from '../../assets/images/camisas/camisa_teste1.jpg'

function Dashboard() {
  const { sales, tasks } = reportsLineChartData

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <MDBox pt={4} px={4} lineHeight={1.25}>
          <MDTypography variant="h3" fontWeight="medium">
            Camisas
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={camisa_teste}
                alt="calisa vermelha manga longa"
                title="Camisa vermelha"
                label="Camisa de alogao"
                price="250,00"
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'Add to car'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={camisa_teste1}
                alt="calisa vermelha manga longa"
                title="Camisa vermelha"
                label="Camisa de alogao"
                price="250,00"
                action={{
                  type: 'internal',
                  route: '/pages/profile/profile-overview',
                  color: 'info',
                  label: 'Add to car'
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Card>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: 'success',
                  amount: '+55%',
                  label: 'than lask week'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: 'success',
                  amount: '+3%',
                  label: 'than last month'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: 'success',
                  amount: '+1%',
                  label: 'than yesterday'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: 'success',
                  amount: '',
                  label: 'Just updated'
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}></MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}></MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}></MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  )
}

export default Dashboard
