import {
  Home,
  Consulting,
  Technology,
  Casestudies,
  About,
  Contact,
  
} from 'pages';

export const pageRoutes = {
  private: [{}],
  public: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/consulting', component: Consulting },
    { path: '/technology', component: Technology  },
    { path: '/casestudies', component: Casestudies },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
};
