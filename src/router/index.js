import Vue from 'vue'
import Router from 'vue-router'


import Nav from '@/nav/nav.vue'
import Index from '@/index/index.vue'
import News from '@/news/news.vue'
import Newsinfo from '@/news/newsinfo.vue'
import Cart from '@/cart/cart.vue'
import Sum from '@/cart/sum.vue'

import Culture from '@/culture/culture.vue'
import Call from '@/call/call.vue'
import Login from '@/login/login.vue'
import Register from '@/register/register.vue'
import Detail from '@/detail/detail.vue'
import Help from '@/help/help.vue'
import Usercenter from '@/usercenter/usercenter.vue'
import Myorder from '@/usercenter/MyOrder.vue'
import Comment from '@/usercenter/comment.vue'
import Message from '@/usercenter/message.vue'
import Address from '@/usercenter/address.vue'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
        children:[
          
          {
 path:'/nav/index/detail',
        name:Detail,
        component:Detail,
       
          },
          {
              path:'/nav/news',
        name:News,
        component:News
      },
         {
           path:'/nav/news/newsinfo',
        name:Newsinfo,
        component:Newsinfo,
         },
        
          {
              path:'/nav/cart',
        name:Cart,
        component:Cart,
          },
          {
              path:'/nav/cart/sum',
        name:Sum,
        component:Sum,

       
          }, 
          {
              path:'/nav/culture',
        name:Culture,
        component:Culture,
          },
          {
              path:'/nav/call',
        name:Call,
        component:Call,
          },
          {
              path:'/nav/help',
        name:Help,
        component:Help,
          }, 
           {
              path:'/nav/index',
        name:Index,
        component:Index,

       
          }, 
          {
              path:'/nav/usercenter',
        name:Usercenter,
        component:Usercenter,
              children:[
                {
                  path:'/nav/usercenter/myorder',
                  name:Myorder,
                  component:Myorder,
                },
                {
                  path:'/nav/usercenter/comment',
                  name:Comment,
                  component:Comment,
                },
{
                  path:'/nav/usercenter/message',
                  name:Message,
                  component:Message,
                },
{
                  path:'/nav/usercenter/address',
                  name:Address,
                  component:Address,
                },

              ]
       
          }, 
        ]
    },
    
         
          {
              path:'/',
        name:Login,
        component:Login,
          },
           {
              path:'/register',
        name:Register,
        component:Register,
          },
    
  ]
})