<template>
    <div>
        <cube-form
                :model="model"
                :schema="schema"
                @validate="validateHandler"
                @submit="submitHandler"
                @reset="resetHandler">
        </cube-form>
        <p @click="toLogin">去登录</p>
    </div>
</template>

<script type="text/ecmascript-6">
    import {registerUser} from '../api/request'
    export default {
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                },
                schema: {
                    fields: [
                        {
                            type: 'input',
                            modelKey: 'username',
                            label: '用户名',
                            props: {
                                placeholder: "请输入用户名"
                            },
                            rules: {
                                required: true
                            },
                            messages: {
                                required: '必填项'
                            }
                        },
                        {
                            type: 'input',
                            modelKey: 'password',
                            label: '密码',
                            props: {
                                type: 'password',
                                placeholder: "请输入密码",
                                eye: {open: false}
                            },
                            rules: {
                                required: true
                            },
                            messages: {
                                required: '必填项'
                            }
                        },
                        {
                            type: 'input',
                            modelKey: 'password2',
                            label: '确认密码',
                            props: {
                                type: 'password',
                                placeholder: "请再次输入密码",
                                eye: {open: false}
                            },
                            rules: {
                                required: true
                            },
                            messages: {
                                required: '必填项'
                            }
                        },
                        {
                            type: 'submit',
                            label: "注册"
                        }
                    ]
                }
            }
        },
        created() {
        },
        methods: {
            async submitHandler(e) {
                e.preventDefault();
                const params = {
                    username: this.model.username,
                    password: this.model.password,
                    password2: this.model.password2
                }
                let res =await registerUser(params)
                console.log(res);
                const {code, token, message} = res.data
                if(code == 0){
                    localStorage.setItem('token', token)
                    this.$store.commit('setToken', token)
                    const redirect = this.$route.query.redirect || ''
                    this.$router.push(redirect)
                }else {
                    const toast = this.$createToast({
                        time: 2000,
                        txt: message || '注册失败',
                        type: 'error'
                    });
                    toast.show();
                }
            },
            validateHandler() {
            },
            resetHandler(e) {
                console.log(e);
            },
            toLogin(){
                const redirect = this.$route.query.redirect
                this.$router.push({path:'/login', query:{redirect}})
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    p
        text-align :right
        padding-right :40px
        font-size :50px

</style>