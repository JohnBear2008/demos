const sd = require('silly-datetime');
const https = require("https");
const querystring = require('querystring');
setInterval(()=>{
	const time = sd.format(new Date(), 'HH:mm');
	const myDate = new Date(); //获取系统当前时间
	const myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
	if ([1,2,3,4,5].includes(myDay) && time === '16:40') {
		// 创建异步对象
		const mobiles = [17051095060]
		const queryParams = {
		    "msgtype": "text",
     		"text": {
         		"content": "站会开始了"
     		},
     		"at": {
         		"atMobiles": mobiles, 
         		"isAtAll": true
         	}
		};
		const requestData = JSON.stringify(queryParams);
		console.log(requestData);
		const token = "df02ad004120b570b6a0980e5b30470a8ecbfde2a4282e5cf93b5b68e120f889";
		const url = 'oapi.dingtalk.com';
		const req = https.request({
		    hostname: url,
		    port: 443,
		    path: '/robot/send?access_token=' + token,
		    method: "POST",
		    json: true,
		    headers: {
		        'Content-Type' : "application/json; charset=utf-8"
		    }
		});
		req.write(requestData);
		req.on('error',function(err){
			console.error(err);
		});
		req.end();
	} else {
		console.log(myDate);
	};
},1000);