<!-- 暂时不用 -->
<template>
	<section class="content-wrap">

		
		<div class="from-wrap">
			<div class="ipunt-wrap">
				<label for="">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="如：张三" v-show="isReadOnly" v-model="username" autofocus>
			</div>
			<div class="ipunt-wrap">
				<label for="">身份证号:</label>
				<label for="" v-show="!isReadOnly">421XXX19970626XXXX</label>
				<input type="text" placeholder="请填17位有效身份证号" v-show="isReadOnly" v-model="idcard">
			</div>
			<div class="ipunt-wrap">
				<label for="">出生日期:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="如：1995-09-26" v-show="isReadOnly" v-model="bdate">
			</div>
			<div class="ipunt-wrap">
				<label for="">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="男 或 女" v-show="isReadOnly" v-model="sex">
			</div>
			<div class="ipunt-wrap">
				<label for="">电子邮件:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="请填有效的电子邮箱" v-show="isReadOnly" v-model="email">
			</div>
			<div class="ipunt-wrap">
				<label for="">通信地址:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="请填正确的地址" v-show="isReadOnly" v-model="address">
			</div>
			<div class="ipunt-wrap">
				<label for="">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话:</label>
				<label for="" v-show="!isReadOnly">sx</label>
				<input type="text" placeholder="请填有效的手机号" v-show="isReadOnly" v-model="phone">
			</div>
			<transition name="pull-up">
				<div class="ipunt-button" v-show="!isReadOnly">
					<a class="gv" href="javascript:;" @click="updataInfo()">修改</a>
				</div>
			</transition>
		</div>
	</section>
</template>

<script>

export default {
	
	data() {
		return {
			username: '',
			idcard: '',
			bdate: '',
			sex: '',
			email: '',
			address: '',
			phone: '',
			isReadOnly: false,
		}
	},
	created() {
		
		
	},
	methods: {
		updataInfo() {
			var user = {
				id: sessionStorage.id,
				username: this.username,
				idcard: this.idcard,
				bdate: this.bdate,
				sex: this.sex,
				email: this.email,
				address: this.address,
				phone: this.phone
			}
		
			
		}
			
			
		
	}
}
</script>

<style>
section.content-wrap{
	position: relative;
	width: 100%;
	height: 660px;
}

section.content-wrap .button{
	position: absolute;
	top: 20px;
	left: 60%;
	width: 120px;
	height: 45px;
	line-height: 30px;
	text-align: center;
	padding: 8px 20px;
	/* margin: 30px 0; */
	font-size: 20px;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;
	cursor: pointer;
}
.gv {
	text-decoration: none;
    background: url('../assets/images/manager/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
a.gv:hover { 
	background: url('../assets/images/manager/nav_gv.png') repeat 0px -43px; 
	color:#1d7eb8;
	-webkit-box-shadow: 0 0 6px #1d7eb8;
	transition-duration: 0.5s;
}
.from-wrap{
	padding-left: 100px;
	margin-top: 20px;
}
.ipunt-wrap label{
	height:50px;
	width: 100px;
	text-align: center;
	display: inline-block;
}
.ipunt-wrap input{
	border: none;
	outline: none;
	background: none;
	border-bottom: 1px solid #fff;
	margin-bottom: 30px;
	width: 300px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	font-size: 18px;
	padding: 0 5px;
}
.ipunt-button {
    margin-left: 150px
}

.pull-up-enter-active, .pull-up-leave-active {
  	transition: all .5s
}
.pull-up-enter, .pull-up-leave-active {
  	opacity: 0;
  	transform: translateY(-100px);
}

</style>