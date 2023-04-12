import { Card, Grid } from '@mui/material'
import MDBox from '../../components/MDBox'
import MDTypography from '../../components/MDTypography'
import DefaultProjectCard from '../../examples/Cards/ProjectCards/DefaultProjectCard'
import DashboardLayout from '../../examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from '../../examples/Navbars/DashboardNavbar'
import { CAMISAS } from '../../JSON_TESTE'

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
              {CAMISAS.map(item => {
                return (
                  <Grid item xs={12} md={6} xl={3}>
                    <DefaultProjectCard
                      key={item.id}
                      image={item.image}
                      alt="calisa vermelha manga longa"
                      title={item.name}
                      label={item.label}
                      price={item.price}
                      action={{
                        type: 'internal',
                        route: '/pages/profile/profile-overview',
                        color: 'info',
                        label: 'Add to car'
                      }}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  )
}

export default Camisas
