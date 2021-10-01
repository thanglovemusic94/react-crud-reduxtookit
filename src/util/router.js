import React from "react";

const product = React.lazy(() => import('../feature/product'))

const router = [
    {path: '/', name: '/product', component: product, exact: true},
    {path: '/product', name: '/product', component: product, exact: false}
]

export default router
