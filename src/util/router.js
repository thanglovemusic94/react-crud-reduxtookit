import React from "react";

const product = React.lazy(() => import('../feature/product'))
const createProduct = React.lazy(() => import('../feature/product/page/create'))
const editProduct = React.lazy(() => import('../feature/product/page/edit'))

const router = [
    {path: '/', name: 'product', component: product, exact: true},
    {path: '/product/create', name: 'productCreate', component: createProduct, exact: false},
    {path: '/product/edit/:id', name: 'productEdit', component: editProduct, exact: false},

]

export default router
