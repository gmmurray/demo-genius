type RouteDefinition = {
    path: string;
    name: string;
};

export const routeMap: { [key: string]: RouteDefinition } = {
    home: {
        path: '/',
        name: 'Home',
    },
    services: {
        path: '/services',
        name: 'Services',
    },
    about: {
        path: '/about',
        name: 'About',
    },
    contact: {
        path: '/contact',
        name: 'Contact',
    },
};

export const routeArray: RouteDefinition[] = Object.keys(routeMap).map(key => ({
    ...routeMap[key],
}));
