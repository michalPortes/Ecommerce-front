import Dashboard from './layouts/dashboard'
import Tables from './layouts/tables'
import Billing from './layouts/billing'
import Notifications from './layouts/notifications'
import Profile from './layouts/profile'
import SignIn from './layouts/authentication/sign-in'
import SignUp from './layouts/authentication/sign-up'
import Camisas from './layouts/camisas/index'
// @mui icons
import Icon from '@mui/material/Icon'

const routes = [
  {
    type: 'collapse',
    name: 'Home',
    key: 'dashboard',
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: '/dashboard',
    component: <Dashboard />
  },
  {
    type: 'collapse',
    name: 'Ternos',
    key: 'tables',
    icon: <Icon fontSize="small">table_view</Icon>,
    route: '/tables',
    component: <Tables />
  },
  {
    type: 'collapse',
    name: 'Blazers',
    key: 'billing',
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: '/billing',
    component: <Billing />
  },
  {
    type: 'collapse',
    name: 'Camisetas',
    key: 'Camisetas',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/camisas',
    component: <Camisas />
  },
  {
    type: 'collapse',
    name: 'Camisas',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Polos',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Blusas',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Calcas',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Bermudas',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Sapatos',
    key: 'notifications',
    icon: <Icon fontSize="small">notifications</Icon>,
    route: '/notifications',
    component: <Notifications />
  },
  {
    type: 'collapse',
    name: 'Profile',
    key: 'profile',
    icon: <Icon fontSize="small">person</Icon>,
    route: '/profile',
    component: <Profile />
  },
  {
    type: 'collapse',
    name: 'Sign In',
    key: 'sign-in',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/authentication/sign-in',
    component: <SignIn />
  },
  {
    type: 'collapse',
    name: 'Sign Up',
    key: 'sign-up',
    icon: <Icon fontSize="small">assignment</Icon>,
    route: '/authentication/sign-up',
    component: <SignUp />
  }
]

export default routes
