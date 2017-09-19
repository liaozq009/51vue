import Vue from 'Vue'
import Vuex from 'Vuex'
import getters from './getters'
import actions from './actions'
import seller from './modules/seller.js'
import goods from './modules/goods.js'
import ratings from './modules/ratings.js'

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		seller,
		goods,
		ratings
	}
})

