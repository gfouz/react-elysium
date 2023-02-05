import { lazy } from 'react';
import './routes.css';

const Homepage = lazy(() => import('./homepage/index'));
const About = lazy(() => import('./about/index'));
const Work = lazy(() => import('./work/index'));
//const Blog = lazy(() => import('./blog/Blog'));
//const Post = lazy(() => import('./blog/Post'));
const NotFound = lazy(() => import('./notFound/index'));

export default [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'work',
    element: <Work />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
