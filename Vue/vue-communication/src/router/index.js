import Vue from 'vue'
import Router from 'vue-router'
import PropsParent from '@/components/communication/parent-son/Parent'
import ListernParent from '@/components/communication/listener-attrs/Parent'
import Bus from '@/components/communication/bus/bus'
import ProInd from '@/components/communication/provide-inject/Parent'
import ChildrenPar from '@/components/communication/children/Parent'
import Emitter from '@/components/communication/emitter/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/PropsParent',
      name: 'PropsParent',
      component: PropsParent
    },
    {
      path: '/ListernParent',
      name: 'ListernParent',
      component: ListernParent
    },
    {
      path: '/Bus',
      name: 'Bus',
      component: Bus
    },
    {
      path: '/ProInd',
      name: 'ProInd',
      component: ProInd
    },
    {
      path: '/ChildrenPar',
      name: 'ChildrenPar',
      component: ChildrenPar
    },
    {
      path: '/Emitter',
      name: 'Emitter',
      component: Emitter
    }
  ]
})
