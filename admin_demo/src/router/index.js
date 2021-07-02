import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../page/home.vue'),
        redirect:"home",
        children: [
            {
                path: 'home',
                name: 'index',
                component: () => import('../page/index.vue'),
            },
            {
                path: 'child',
                name: 'child',
                component: () => import('../page/homeChild.vue'),
                children: [
                    {
                        path: '/Basic',
                        name: 'Basic',
                        component: () => import('../page/child/Basic.vue'),
                        children: [

                        ]
                    },
                    {
                        path: '/BasicDetail',
                        name: 'BasicDetail',
                        component: () => import('../page/child/BasicDetail.vue'),
                    },
                    {
                        path: '/form',
                        name: 'form',
                        component: () => import('../page/child/form.vue'),
                    },
                    {
                        path: '/Container',
                        name: 'Container',
                        component: () => import('../page/child/Container.vue'),
                    },
                    {
                        path: '/Layout',
                        name: 'Layout',
                        component: () => import('../page/child/Layout.vue'),
                    }, {
                        path: '/Color',
                        name: 'Color',
                        component: () => import('../page/child/Color.vue'),
                    }, {
                        path: '/Border',
                        name: 'Border',
                        component: () => import('../page/child/Border.vue'),
                    }, {
                        path: '/Icon',
                        name: 'Icon',
                        component: () => import('../page/child/Icon.vue'),
                    }, {
                        path: '/Button',
                        name: 'Button',
                        component: () => import('../page/child/Button.vue'),
                    }, {
                        path: '/Link',
                        name: 'Link',
                        component: () => import('../page/child/Link.vue'),
                    }, {
                        path: '/Space',
                        name: 'Space',
                        component: () => import('../page/child/Space.vue'),
                    }, {
                        path: '/Scrollbar',
                        name: 'Scrollbar',
                        component: () => import('../page/child/Scrollbar.vue'),
                    }, {
                        path: '/Typography',
                        name: 'Typography',
                        component: () => import('../page/child/Typography.vue'),
                    }, {
                        path: '/editor',
                        name: 'editor',
                        component: () => import('../page/child/editor.vue'),
                    }
                ]
            }
        ]
    },
    {
        path: '/visualization',
        name: 'visualization',
        component: () => import('../page/visualization.vue'),
    }
]
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes
})
export default router