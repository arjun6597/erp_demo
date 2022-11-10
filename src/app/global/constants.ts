export const constants = {
    DASHBOARD_LOGO: '../../assets/images/logo.png',
    DEFAULT_USERS: '../../assets/images/defaultuser.png',
    PASSWORD_TYPE_SHOW: 'text',
    PASSWORD_TYPE_HIDE: 'password',
    MENUS: [
        {
          id: 1,
          url: '/home',
          image: '',
          icon: 'fa fa-building',
          name: 'Company',
        },
        {
          id: 2,
          url: '/company',
          image: '',
          icon: 'fa fa-users',
          name: 'Users',
        },
        {
          id: 3,
          url: '/products',
          image: '',
          icon: 'fa fa-cubes',
          name: 'Products',
        }
    ],
    NAV_ITEMS: [
      {
        id: 2,
        name: 'Logout'
      }
    ]
};


export const companies = [
  {id:1,name:'Google', place:"BLR"},
  {id:2,name:'Meta', place:"HYD"},
  {id:3,name:'Apple', place: "AHM"},
]

export const usersList = [
  {id:1,name:'John', email:"john@gmail.com",phone: '784879214578'},
  {id:2,name:'Mat', email:"mt@gmail.com",phone: '484879214558'},
  {id:3,name:'Amie', email: "ami@gmail.com",phone: '584879214538'},
]

export const products = [
  {id:1,name:'PR1', type:"software",owner:'John'},
  {id:2,name:'PR2', type:"hardware",owner: 'Mat'},
  {id:3,name:'PR3', type: "software", owner:'Amie'},
]