import Router from 'vue-router';
import Login from '@/components/Login';
import Notes from '@/components/Notes';
import MidiMonitor from '@/components/MidiMonitor';
import TestComp from '@/components/TestComp';
import Auth from '@/auth.js';

let loginPath = '/login';
let router = new Router({
    routes: [
        { path: loginPath, component: Login },
        { path: '/notes', component: Notes },
        { path: '/midi', component: MidiMonitor },
        { path: '/tests', component: TestComp }
    ]
});

router.beforeEach(function (to, from, next) {
    if (to.path !== loginPath && !Auth.authenticated) {
        next(loginPath);
    } else {
        next();
    }
});

export default router;
