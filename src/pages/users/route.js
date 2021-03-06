import AppLayout from "@/layouts/AppLayout";

const routes = [
    {
        path: '/shop',
        component: AppLayout,
        name: 'shop',
        meta: {
            title: 'Shop',
            icon: 'shopping'
        },
        children: [
            {
                path: 'products',
                component: () => import('./List'),
                name: 'products',
                meta: {
                    title: 'Products',
                    icon: 'unordered-list'
                }
            },
            {
                path: 'cart',
                component: () => import('./Cart'),
                name: 'cart',
                meta: {
                    title: 'Cart',
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