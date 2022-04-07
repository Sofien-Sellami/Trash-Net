
declare interface RouteInfo {
  routeLink: string;
  icon: string;
  label: string;

}
export const navbarData = [
  {
    routeLink :'.',
    icon : 'fal fa-home',
    label : 'Dashboard'
  },
  {
    routeLink :'map',
    icon : 'fal fa-map',
    label : 'Map'
  },

  {
    routeLink :'employees',
    icon : 'fal fa-address-card',
    label : 'Employees'
  },

  {
    routeLink :'trucks',
    icon : 'fal fa-truck-container',
    label : 'Trucks'
  },
  {
    routeLink :'trushs',
    icon : 'fal fa-dumpster',
    label : 'Trash'
  },
 {
    routeLink :'',
    icon : 'fal fa-sign-out',
    label : 'Logout'
  },
] ;
