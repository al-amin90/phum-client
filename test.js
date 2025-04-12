 const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: '<AdminDashboard />',
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: '<CreateAdmin />',
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: '<CreateFaculty />',
      },
      {
        name: "Create Student",
        path: "create-student",
        element: '<CreateStudent />',
      },
    ],
  },
];

// const newArr = adminPaths2.reduce((acc, item) => {
//     if(item.name && item.path){
//         acc.push({
//             key: item.name,
//             label: 'navlivk'
//         })
//     }

//     if(item.children){
//         acc.push({
//             key: item.name,
//             label: item.name,
//             children: item.children.map(child => ({
//                 key: child.name,
//                 label: 'navlink'
//             }))
//         })
//     }

//     return acc
// }, [])

console.log('final', newArr);