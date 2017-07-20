/*var $ = require("jquery")
var angular = require("angular")
console.log(angular)

var app = angular.module("ngApp", []);

require("./controller.js")(app);

angular.bootstrap(document.body, ["ngApp"])

window.$ = window.jQuery = $;
console.log("abc");*/

//引入weui
/*require("weui");
var Vue = require("vue");
//import Vue from "vue";
console.log(Vue);

Vue.component("xheader",{
	template:require("./template/xheader.html"),
	data(){
		return {
			name:"laoxie",
			src:require("./images/2.jpg")
		}
	}
})

	//import "./index.css"
new Vue({
	el: "#demo",
	template: require("./template/index.html")
})*/
const a = 1;
class people {
	constructor(name,age) {
		this.name = name;
		this.age = age
	}
}

setInterval(()=>{
	console.log("a")
},1000)

let laoyao = new people("laoyao",18);
console.log(laoyao)
