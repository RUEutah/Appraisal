export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Admin Dashboard',
        icon: 'home',
        type: 'link',
        path: `${process.env.PUBLIC_URL}`,
        
      },{
        title: 'Employees',
        icon: 'user',
        type: 'link',
        path: `${process.env.PUBLIC_URL}/pages/employees-page`,
        
      }/*,{
        title: 'System Reports',
        icon: 'sample-page',
        type: 'sub',
        children: [
          {
            active: false,
            path: `${process.env.PUBLIC_URL}/pages/charts`,
            title: 'charts',
            type: 'link',
          },
        ],
      },*/
      
    ],
  },
];
