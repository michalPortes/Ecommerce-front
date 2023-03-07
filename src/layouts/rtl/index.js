import { useEffect } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 React components
import MDBox from '../../components/MDBox'

// Material Dashboard 2 React example components
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar'
import Footer from '../../examples/Footer'
import ComplexStatisticsCard from '../../examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Data
import reportsBarChartData from '../../layouts/rtl/data/reportsBarChartData'
import reportsLineChartData from '../../layouts/rtl/data/reportsLineChartData'

// RTL components
import Projects from '../../layouts/rtl/components/Projects'
import OrdersOverview from '../../layouts/rtl/components/OrdersOverview'

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from '../../context/index'

function RTL() {
  const dispatch = useMaterialUIController()
  const { sales, tasks } = reportsLineChartData

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, 'rtl')

    return () => setDirection(dispatch, 'ltr')
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="أموال اليوم"
                count={281}
                percentage={{
                  color: 'success',
                  amount: '+55%',
                  label: 'من الأسبوع الماضي'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="مستخدمو اليوم"
                count="2,300"
                percentage={{
                  color: 'success',
                  amount: '+3%',
                  label: 'من الأسبوع الماضي'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="عملاء جدد"
                count="34k"
                percentage={{
                  color: 'success',
                  amount: '+1%',
                  label: 'من الشهر الماضي'
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="مبيعات"
                count="+91"
                percentage={{
                  color: 'success',
                  amount: '',
                  label: 'مقارنة بيوم أمس'
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
      <Footer />
    </DashboardLayout>
  )
}

export default RTL