import types from '../types.js'
import axios from 'axios'

// 数据管理
const state={
	seller:{},
	detailShow:false
}

// 导出数据
const getters={
	seller(state){
		return state.seller;
	},
	detailShow(state){
		return state.detailShow;
	}
}

// 处理ajax等状态
const actions={
	getSeller({commit,state}){
		axios.get('/api/seller').then(resp => {
			// console.log(resp);
			if(resp.data.errno==0){
				commit(types.GET_SELLER,resp.data.data);
			}
		});
	},
	showDetail({commit}){
		commit(types.SHOW_DETAIL);
	},
	hideDetail({commit}){
		commit(types.HIDE_DETAIL);
	}
}

// 处理数据
const mutations={
	[types.GET_SELLER](state,data){
		state.seller=data;
	},
	[types.SHOW_DETAIL](state){
		state.detailShow=true;
	},
	[types.HIDE_DETAIL](state){
		state.detailShow=false;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}