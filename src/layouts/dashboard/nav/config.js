// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`./assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Sale',
    path: '/dashboard/sale',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Items',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Parties',
    path: '/dashboard/parties',
    icon: icon('ic_cart'),
  },
  {
    title: 'purchase',
    path: '/dashboard/purchase',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
