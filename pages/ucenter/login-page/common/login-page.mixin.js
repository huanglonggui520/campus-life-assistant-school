import {mapMutations} from 'vuex';
import loginSuccess from './loginSuccess.js';
let mixin = {
	methods:{
		...mapMutations({
			setUserInfo: 'user/login'
		}),
		loginSuccess(result){
			loginSuccess(result)
			delete result.userInfo.token
			if (result.type == "register") {
				result.userInfo._id = result.uid  
			}
			this.setUserInfo(result.userInfo)
		}
	}
}
export default mixin