import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/account',
        component: AppLayout,
        name: 'account',
        meta: {
            title: 'Account',
            icon: 'user'
        },
        children: [
            {
                path: 'profile',
                component: () => import('./Profile'),
                name: 'profile',
                meta: {
                    title: 'Profile',
                    icon: 'user'
                }
            },

        ]
    },
    // {
    //     path: '/shop',
    //     component: () => import('./List'),
    //     name: 'shop',
    //     meta: {
    //         title: 'Shop',
    //         icon: 'shopping'
    //     }
    // }
]

export default routes;