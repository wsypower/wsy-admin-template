import full from './full'
import example from './example'
import { layoutContainer, fullContainer } from '@/layout/header-aside'
export default [
  {
    path: 'full',
    name: 'full',
    redirect: { name: 'page5' },
    meta: {
      title: '测试切换full容器',
      auth: true,
      cache: false
    },
    component: layoutContainer,
    children: [...full, ...example]
  }
]
