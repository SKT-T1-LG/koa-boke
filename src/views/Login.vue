<template>
    <div>
        <cube-form
                :model="model"
                :schema="schema"
                @validate="validateHandler"
                @submit="submitHandler"
                @reset="resetHandler">
        </cube-form>
        <p @click="toRegister">去注册</p>
    </div>
</template>

<script type="text/ecmascript-6">
    import {login} from '../api/request'
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
                            type: 'submit',
                            label: "登录"
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
                    password: this.model.password
                }
                let res =await login(params)
                const {code, token, message, name, id} = res.data
                if(code == 0){
                    localStorage.setItem('token', token)
                    localStorage.setItem('name', name)
                    localStorage.setItem('id', id)
                    this.$store.commit('setToken', token)
                    this.$store.commit('setName', name)
                    this.$store.commit('setId', id)
                    const redirect = this.$route.query.redirect || ''
                    this.$router.push(redirect)
                }else {
                    const toast = this.$createToast({
                        time: 2000,
                        txt: message || '登录失败',
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
            toRegister(){
                const redirect = this.$route.query.redirect
                this.$router.push({path:'/register', query:{redirect}})
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