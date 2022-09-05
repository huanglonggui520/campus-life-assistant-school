export default {
	"username": {
		"rules": [{
				required: true,
				errorMessage: '请输入用户名',
			},
			{
				minLength: 3,
				maxLength: 32,
				errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
			},
			{
				validateFunction:function(rule,value,data,callback){
					console.log(value);
					if(/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)){
						callback('用户名不能是：手机号或邮箱')
					};
					return true
				}
			}
		],
		"label": "用户名"
	},
	"password":{
		"rules": [{
				required: true,
				errorMessage: '请输入密码',
			},
			{
				minLength: 6,
				maxLength: 20,
				errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		"label": "密码"
	},
	"pwd2":{
		"rules": [{
		
				required: true,
				errorMessage: '再次输入密码',
		
			},
			{
				minLength: 6,
				maxLength: 20,
				errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
			},
			{
				validateFunction:function(rule,value,data,callback){
					console.log(value);
					if(value!=data.password){
						callback('两次输入密码不一致')
					};
					return true
				}
			}
		],
		"label": "确认密码"
	}
}