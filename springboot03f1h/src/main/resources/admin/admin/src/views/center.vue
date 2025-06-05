<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                              <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="用户账号" prop="yonghuzhanghao">
          <el-input v-model="ruleForm.yonghuzhanghao" readonly              placeholder="用户账号" clearable></el-input>
        </el-form-item>
      </el-col>
                                          <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="用户姓名" prop="yonghuxingming">
          <el-input v-model="ruleForm.yonghuxingming"               placeholder="用户姓名" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='yonghu'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yonghuxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="24">  
        <el-form-item v-if="flag=='yonghu'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="yonghutouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="用户手机" prop="yonghushouji">
          <el-input v-model="ruleForm.yonghushouji"               placeholder="用户手机" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="近期旅居史" prop="jinqilvjushi">
          <el-input v-model="ruleForm.jinqilvjushi"               placeholder="近期旅居史" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="健康状况" prop="jiankangzhuangkuang">
          <el-input v-model="ruleForm.jiankangzhuangkuang"               placeholder="健康状况" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="地区" prop="diqu">
          <el-input v-model="ruleForm.diqu"               placeholder="地区" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="目前所在地" prop="muqiansuozaidi">
          <el-input v-model="ruleForm.muqiansuozaidi"               placeholder="目前所在地" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yonghu'"  label="身份证号" prop="shenfenzhenghao">
          <el-input v-model="ruleForm.shenfenzhenghao"               placeholder="身份证号" clearable></el-input>
        </el-form-item>
      </el-col>
                                                <el-col :span="12">
        <el-form-item   v-if="flag=='yihurenyuan'"  label="医护工号" prop="yihugonghao">
          <el-input v-model="ruleForm.yihugonghao" readonly              placeholder="医护工号" clearable></el-input>
        </el-form-item>
      </el-col>
                                          <el-col :span="12">
        <el-form-item   v-if="flag=='yihurenyuan'"  label="医护姓名" prop="yihuxingming">
          <el-input v-model="ruleForm.yihuxingming"               placeholder="医护姓名" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='yihurenyuan'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in yihurenyuanxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='yihurenyuan'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="24">  
        <el-form-item v-if="flag=='yihurenyuan'" label="医护照片" prop="yihuzhaopian">
          <file-upload
          tip="点击上传医护照片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.yihuzhaopian?ruleForm.yihuzhaopian:''"
          @change="yihurenyuanyihuzhaopianUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
                                                <el-col :span="12">
        <el-form-item   v-if="flag=='putongguanliyuan'"  label="管理员账号" prop="guanliyuanzhanghao">
          <el-input v-model="ruleForm.guanliyuanzhanghao" readonly              placeholder="管理员账号" clearable></el-input>
        </el-form-item>
      </el-col>
                                          <el-col :span="12">
        <el-form-item   v-if="flag=='putongguanliyuan'"  label="管理员姓名" prop="guanliyuanxingming">
          <el-input v-model="ruleForm.guanliyuanxingming"               placeholder="管理员姓名" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='putongguanliyuan'"  label="备注" prop="beizhu">
          <el-input v-model="ruleForm.beizhu"               placeholder="备注" clearable></el-input>
        </el-form-item>
      </el-col>
                                                                                                                                          <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
                                                                  yonghuxingbieOptions: [],
                                                                                                                                                                                    yihurenyuanxingbieOptions: [],
                                                                                                                                                                                                                                        };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
                                            this.yonghuxingbieOptions = "男,女".split(',')
                                                                                                                        this.yihurenyuanxingbieOptions = "男,女".split(',')
                                                                                                                                                          },
  methods: {
                                                                                                                                                                                                                                                                                                                                                                        yonghutouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
                                                                                                                        yihurenyuanyihuzhaopianUploadChange(fileUrls) {
        this.ruleForm.yihuzhaopian = fileUrls;
    },
                                                                                                                                            onUpdateHandler() {
                              if((!this.ruleForm.yonghuzhanghao)&& 'yonghu'==this.flag){
        this.$message.error('用户账号不能为空');
        return
      }
                                                                  if((!this.ruleForm.mima)&& 'yonghu'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
                                                                                                                                                                                                                                                                                                                  if( 'yonghu' ==this.flag && this.ruleForm.yonghushouji&&(!isMobile(this.ruleForm.yonghushouji))){
        this.$message.error(`用户手机应输入手机格式`);
        return
      }
                                                                                                                                                                                                                                                                                                      if( 'yonghu' ==this.flag && this.ruleForm.shenfenzhenghao&&(!checkIdCard(this.ruleForm.shenfenzhenghao))){
        this.$message.error(`身份证号应输入身份证格式`);
        return
      }
                                                      if((!this.ruleForm.yihugonghao)&& 'yihurenyuan'==this.flag){
        this.$message.error('医护工号不能为空');
        return
      }
                                                                  if((!this.ruleForm.mima)&& 'yihurenyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
                                                                                                                                                                                    if( 'yihurenyuan' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }
                                                                                                                                          if((!this.ruleForm.guanliyuanzhanghao)&& 'putongguanliyuan'==this.flag){
        this.$message.error('管理员账号不能为空');
        return
      }
                                                                  if((!this.ruleForm.mima)&& 'putongguanliyuan'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
                                                                                                                                                                                                                                                                                                this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
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
</style>
