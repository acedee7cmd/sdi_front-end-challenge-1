/* eslint-disable no-prototype-builtins */
import { createApp } from 'vue'
import { createStore } from 'vuex'
import Vuex from 'vuex'
import { axiosInstance } from 'src/utilities/axios'
import _ from 'lodash'

Vuex.Store.prototype.$axios = axiosInstance
Vuex.Store.prototype.$_ = _

const app = createApp({})
app.use(createStore)

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      Author: require('./NewsRoom').default
    },


    strict: process.env.DEV
  })

  return Store
}
