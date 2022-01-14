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
                path: 'create',
                component: () => import('./Form'),
                name: 'userCreate',
                meta: {
                    title: 'Create user'
                }
            },
            {
                path: 'edit/:id',
                component: () => import('./Form'),
                name: 'userEdit',
                meta: {
                    title: 'Edit user',
                    hidden: true
                }
            }
        ]
    }
]

export default routes;