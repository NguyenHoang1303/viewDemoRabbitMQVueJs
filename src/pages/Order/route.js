import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/order',
        component: AppLayout,
        name: 'order',
        meta: {
            title: 'Order',
            icon: 'unordered-list'
        },
        children: [
            {
                path: 'list',
                component: () => import('./List'),
                name: 'orders',
                meta: {
                    title: 'List',
                    icon: 'unordered-list'
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