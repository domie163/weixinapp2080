<template>
  <div>
    <div class="container">
      <div class="login-form" style="backgroundColor:rgba(255,255,255,.5);borderRadius:10px">
        <h1 class="h1" style="color:rgba(252, 252, 252, 1);fontSize:30px;">医院核酸检测服务系统注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm" label-width="120px">
															<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">用户账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yonghuzhanghao" class="input" type="text" placeholder="用户账号">
			   </div>
			 </div> -->
			<el-form-item label="用户账号" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.yonghuzhanghao" autocomplete="off" placeholder="用户账号" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">用户姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yonghuxingming" class="input" type="text" placeholder="用户姓名">
			   </div>
			 </div> -->
			<el-form-item label="用户姓名" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.yonghuxingming" autocomplete="off" placeholder="用户姓名" type="text" />
			</el-form-item>
																					<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄" type="text" />
			</el-form-item>
																					<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">用户手机</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yonghushouji" class="input" type="text" placeholder="用户手机">
			   </div>
			 </div> -->
			<el-form-item label="用户手机" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.yonghushouji" autocomplete="off" placeholder="用户手机" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">近期旅居史</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jinqilvjushi" class="input" type="text" placeholder="近期旅居史">
			   </div>
			 </div> -->
			<el-form-item label="近期旅居史" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.jinqilvjushi" autocomplete="off" placeholder="近期旅居史" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">健康状况</div>
			   <div class="input-container">
			     <input v-model="ruleForm.jiankangzhuangkuang" class="input" type="text" placeholder="健康状况">
			   </div>
			 </div> -->
			<el-form-item label="健康状况" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.jiankangzhuangkuang" autocomplete="off" placeholder="健康状况" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">地区</div>
			   <div class="input-container">
			     <input v-model="ruleForm.diqu" class="input" type="text" placeholder="地区">
			   </div>
			 </div> -->
			<el-form-item label="地区" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.diqu" autocomplete="off" placeholder="地区" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">目前所在地</div>
			   <div class="input-container">
			     <input v-model="ruleForm.muqiansuozaidi" class="input" type="text" placeholder="目前所在地">
			   </div>
			 </div> -->
			<el-form-item label="目前所在地" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.muqiansuozaidi" autocomplete="off" placeholder="目前所在地" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yonghu'" class="input-group">
			   <div class="label">身份证号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.shenfenzhenghao" class="input" type="text" placeholder="身份证号">
			   </div>
			 </div> -->
			<el-form-item label="身份证号" class="input" v-if="tableName=='yonghu'">
			  <el-input v-model="ruleForm.shenfenzhenghao" autocomplete="off" placeholder="身份证号" type="text" />
			</el-form-item>
																								<!-- <div v-if="tableName=='yihurenyuan'" class="input-group">
			   <div class="label">医护工号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yihugonghao" class="input" type="text" placeholder="医护工号">
			   </div>
			 </div> -->
			<el-form-item label="医护工号" class="input" v-if="tableName=='yihurenyuan'">
			  <el-input v-model="ruleForm.yihugonghao" autocomplete="off" placeholder="医护工号" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yihurenyuan'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='yihurenyuan'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='yihurenyuan'" class="input-group">
			   <div class="label">医护姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yihuxingming" class="input" type="text" placeholder="医护姓名">
			   </div>
			 </div> -->
			<el-form-item label="医护姓名" class="input" v-if="tableName=='yihurenyuan'">
			  <el-input v-model="ruleForm.yihuxingming" autocomplete="off" placeholder="医护姓名" type="text" />
			</el-form-item>
																					<!-- <div v-if="tableName=='yihurenyuan'" class="input-group">
			   <div class="label">年龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.nianling" class="input" type="text" placeholder="年龄">
			   </div>
			 </div> -->
			<el-form-item label="年龄" class="input" v-if="tableName=='yihurenyuan'">
			  <el-input v-model="ruleForm.nianling" autocomplete="off" placeholder="年龄" type="text" />
			</el-form-item>
																																	<!-- <div v-if="tableName=='putongguanliyuan'" class="input-group">
			   <div class="label">管理员账号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.guanliyuanzhanghao" class="input" type="text" placeholder="管理员账号">
			   </div>
			 </div> -->
			<el-form-item label="管理员账号" class="input" v-if="tableName=='putongguanliyuan'">
			  <el-input v-model="ruleForm.guanliyuanzhanghao" autocomplete="off" placeholder="管理员账号" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='putongguanliyuan'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='putongguanliyuan'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='putongguanliyuan'" class="input-group">
			   <div class="label">管理员姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.guanliyuanxingming" class="input" type="text" placeholder="管理员姓名">
			   </div>
			 </div> -->
			<el-form-item label="管理员姓名" class="input" v-if="tableName=='putongguanliyuan'">
			  <el-input v-model="ruleForm.guanliyuanxingming" autocomplete="off" placeholder="管理员姓名" type="text" />
			</el-form-item>
												<!-- <div v-if="tableName=='putongguanliyuan'" class="input-group">
			   <div class="label">备注</div>
			   <div class="input-container">
			     <input v-model="ruleForm.beizhu" class="input" type="text" placeholder="备注">
			   </div>
			 </div> -->
			<el-form-item label="备注" class="input" v-if="tableName=='putongguanliyuan'">
			  <el-input v-model="ruleForm.beizhu" autocomplete="off" placeholder="备注" type="text" />
			</el-form-item>
																																																																					<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
              },
      tableName:"",
      rules: {}
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
    // 注册
    login() {
                              if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
        this.$message.error(`用户账号不能为空`);
        return
      }
                                                                  if((!this.ruleForm.mima) && `yonghu` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
                                                                                                                                                                                                                                                                                                                  if(`yonghu` == this.tableName && this.ruleForm.yonghushouji&&(!this.$validate.isMobile(this.ruleForm.yonghushouji))){
        this.$message.error(`用户手机应输入手机格式`);
        return
      }
                                                                                                                                                                                                                                                                                                      if(`yonghu` == this.tableName && this.ruleForm.shenfenzhenghao&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
                                                      if((!this.ruleForm.yihugonghao) && `yihurenyuan` == this.tableName){
        this.$message.error(`医护工号不能为空`);
        return
      }
                                                                  if((!this.ruleForm.mima) && `yihurenyuan` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
                                                                                                                                                                                    if(`yihurenyuan` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
        this.$message.error(`年龄应输入整数`);
        return
      }
                                                                                                                                          if((!this.ruleForm.guanliyuanzhanghao) && `putongguanliyuan` == this.tableName){
        this.$message.error(`管理员账号不能为空`);
        return
      }
                                                                  if((!this.ruleForm.mima) && `putongguanliyuan` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
                                                                                                                                                                                                                                                                                                this.$http({
        url: `${this.tableName}/register`,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}
	
	.container {
		background-image: url("http://codegen.caihongy.cn/20210223/8f8d1158257649aaa57af29dc1c278f0.png");
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	
		.login-form {
			right: 50%;
			top: 50%;
			height: auto;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			width: 420px;
			padding: 30px 30px 40px 30px;
			font-size: 14px;
			font-weight: 500;
			
			.h1 {
				margin: 0;
				text-align: center;
				line-height: 54px;
			    font-size: 24px;
			    color: #000;
			}
				
			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				.input {
					width: 100%;
					
					& /deep/ .el-form-item__label {
						line-height: 40px;
						color: rgba(24, 2, 1, 0.99);
						font-size: #606266;
					}
					
					& /deep/ .el-input__inner {
						height: 40px;
						color: rgba(30, 144, 255, 1);
						font-size: 15px;
						border-width: 2px;
						border-style: inset;
						border-color: rgba(5, 254, 187, 1);
						border-radius: 15px;
						background-color: rgba(251, 250, 250, 1);
					}
				}
				
				.btn {
					margin: 0 10px;
					width: 90px;
					height: 40px;
					color: rgba(1, 9, 17, 1);
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(1, 12, 23, 1);
					border-radius: 4px;
					background-color: rgba(245, 248, 181, 1);
				}

				.close {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: rgba(13, 14, 14, 1);
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: rgba(15, 15, 16, 1);
					border-radius: 4px;
					background-color: rgba(245, 248, 181, 1);
				}

			}
		}
	}
</style>
