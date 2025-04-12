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

const newArr = adminPaths2.reduce((acc, item) => {
    if(item.path && item.element){
        acc.push({
            path: item.path,
            element: item.element
        })
    }

    return acc
}, [])

console.log('final', newArr);