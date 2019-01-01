const routers = [
    {
        path: '/',
        meta: {
            title: '考试系统'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
		path: '/mypaper',
        meta: {
            title: '我的考试'
        },
        component: (resolve) => require(['./views/mypaper.vue'], resolve)
	},{
        path: '/dropdown',
        meta: {
            title: '下拉菜单'
        },
        component: (resolve) => require(['./views/dropdown.vue'], resolve)
    }
];
export default routers;