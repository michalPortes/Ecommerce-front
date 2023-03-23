/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../../context/user.context'
// react-router-dom components
import { Link } from 'react-router-dom'

import { Login, Logout } from '../../../users'

// @mui material components
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'

// Material Dashboard 2 React components
import MDBox from '../../../components/MDBox'
import MDTypography from '../../../components/MDTypography'
import MDInput from '../../../components/MDInput'
import MDButton from '../../../components/MDButton'

// Authentication layout components
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar/index'
import BasicLayout from '../../../layouts/authentication/components/BasicLayout'

// Images
import bgImage from '../../../assets/images/bg-sign-in-basic.jpeg'

const defaulFormFields = {
  email: '',
  password: ''
}

function Basic() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSetRememberMe = () => setRememberMe(!rememberMe)

  const [formFields, setFormFields] = useState(defaulFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaulFormFields)
  }

  // const singInWithGoogle = async () => {
  //   await singInWithGooglePopup()
  // }

  const handleSubmit = async event => {
    event.preventDefault()

    let value = {
      email: email,
      password: password
    }

    try {
      Login(value.email, value.password).then(e => {
        const token = e.data.token

        localStorage.setItem('token', token)

        setCurrentUser(false)

        console.log(currentUser)
      })

      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('no user associated with email')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const SingOut = async event => {
    // const LogUser = localStorage.getItem('token')

    Logout().then(e => console.log(e))

    // localStorage.setItem('token', '')

    // setCurrentUser(true)
  }

  return (
    <BasicLayout image={bgImage}>
      <DefaultNavbar />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                required
                name="email"
                onChange={handleChange}
                value={email}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                required
                name="password"
                onChange={handleChange}
                value={password}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                type="submit"
                onClick={handleSubmit}
              >
                sign in
              </MDButton>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={SingOut}
              >
                sign out
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{' '}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  )
}

export default Basic
