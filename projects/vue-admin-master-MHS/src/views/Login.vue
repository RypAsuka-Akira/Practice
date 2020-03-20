<template>
    <div id="con">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-radio-group v-model="ruleForm2.identity" style="display: flex;justify-items: center;justify-content: space-around;">

                <el-radio  label="学生"></el-radio>
                <el-radio  label="教师"></el-radio>
                <el-radio  label="外聘工"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="text-align: center">
            <el-button type="primary" style="width:85%;" id="TencentCaptcha" data-appid="2097422533" data-cbfn="callbackTX" >验证</el-button>
<!--            <el-button type="primary" style="width:85%;" id="TencentCaptcha" data-appid="2097422533"  @click.native.prevent="loginAssfun">验证</el-button>-->
        </el-form-item>
        <el-form-item style="width:100%; text-align: center" >
            <el-button id="loginButton" type="primary" style="width:40%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
            <el-button style="width:40%;" @click.native.prevent="handleReset2">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>
<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>
<script>
    import {requestLogin} from '../api/api';
    var loginAss=false;


    //import NProgress from 'nprogress'
    export default {
        data() {
            return {
                logining: false,
                ruleForm2: {
                    account: 'admin',
                    checkPass: '123456',
                    identity: 0,
                },
                rules2: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'blur'},
                        //{ validator: validaePass }
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            };
        },
        methods: {
            // 数据重置
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            //验证
            loginAssfun(res){
                if(res.ret === 0){
                    // alert(res.ticket)   // 票据
                    this.ruleForm2.loginAss=true;
                }
            },
            //  登录
            handleSubmit2(ev) {
                var _this = this;
                if (loginAss){
                    this.disabled = false;
                    this.$refs.ruleForm2.validate((valid) => {
                        if (valid) {
                            //_this.$router.replace('/table');
                            this.logining = true;
                            //NProgress.start();页面加载进度条使用
                            //  传入登录的参数 帐号username，密码password。
                            var loginParams = {username: this.ruleForm2.account, password: this.ruleForm2.checkPass};
                            requestLogin(loginParams).then(data => {
                                this.logining = false;
                                //NProgress.done();
                                let {msg, code, user} = data;
                                if (code !== 200) {
                                    this.$message({
                                        message: msg,
                                        type: 'error'
                                    });
                                } else {
                                    sessionStorage.setItem('user', JSON.stringify(user));
                                    // 动态路由 页面跳转
                                    this.$router.push({path: '/table'});
                                }
                            });
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                }else {
                    this.$alert('未通过验证，请点击“验证”按钮完成验证！', '未验证', {confirmButtonText: '确定'});
                };


            }
        }
    }
    window.callbackTX = function(res){

        // res（用户主动关闭验证码）= {ret: 2, ticket: null}
        // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
        if(res.ret === 0){
            // alert(res.ticket)   // 票据
           loginAss=true;
           document.getElementById("TencentCaptcha").type="success";
        }
    }
</script>

<style lang="scss" scoped>
    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        -webkit-border-radius: 55px;
        border-radius: 35px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: rgba(174, 198, 255, 0.6);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0px 0px 35px 0px;
        }
    }
</style>