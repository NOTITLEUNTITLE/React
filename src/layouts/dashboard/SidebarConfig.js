import { Icon } from '@iconify/react';
import { ReactComponent as House } from '../../svg/home-outline.svg';
import { ReactComponent as Bus } from '../../svg/bus-outline.svg';
import { ReactComponent as Ticket } from '../../svg/ticket-outline.svg';
import { ReactComponent as Card } from '../../svg/card-outline.svg';
import { ReactComponent as Trending } from '../../svg/trending-up-outline.svg';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '홈',
    path: '/home',
    icon: <House />
  },
  {
    title: '교통',
    path: '/dashboard/transportation',
    icon: <Bus />
  },
  {
    title: '문화',
    path: '/dashboard/culture',
    icon: <Ticket />
  },
  {
    title: '소비',
    path: '/dashboard/consumption',
    icon: <Card />
  },
  {
    title: '생활',
    path: '/dashboard/living',
    icon: <Trending />
  }
];

export default sidebarConfig;
