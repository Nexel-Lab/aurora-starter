import {
  TbGraph,
  TbActivity,
  TbWallet,
  TbMessageChatbot,
  TbFolder,
} from 'react-icons/tb'
import { CgWorkAlt, CgShoppingBag } from 'react-icons/cg'

const Routes = [
  {
    name: 'Dashboard',
    Icon: () => <TbGraph />,
    path: 'dashboard',
  },
  {
    name: 'Activity',
    Icon: () => <TbActivity />,
    path: 'dashboard/activity',
  },
  {
    name: 'Wallet',
    Icon: () => <TbWallet />,
    path: 'dashboard/wallet',
  },
  {
    name: 'Projects',
    Icon: () => <CgWorkAlt />,
    path: 'dashboard/projects',
  },
  {
    name: 'Chat',
    Icon: () => <TbMessageChatbot />,
    path: 'dashboard/chat',
  },
  {
    name: 'Space',
    Icon: () => <TbFolder />,
    path: 'dashboard/space',
  },
  {
    name: 'Shop',
    Icon: () => <CgShoppingBag />,
    path: 'dashboard/shop',
  },
]

export { Routes }
