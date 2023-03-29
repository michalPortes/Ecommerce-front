import { Card, Grid } from '@mui/material'
import MDBox from '../../components/MDBox'
import MDTypography from '../../components/MDTypography'
import DefaultProjectCard from '../../examples/Cards/ProjectCards/DefaultProjectCard'
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar'
import camisa_teste from '../../assets/images/camisas/camisa_teste.jpg'
import camisa_teste1 from '../../assets/images/camisas/camisa_teste1.jpg'

const Camisas = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="h3" fontWeight="medium">
        Camisas
      </MDTypography>
      <Card>
        <MDBox>
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
        </MDBox>
      </Card>
    </DashboardLayout>
  )
}

export default Camisas
