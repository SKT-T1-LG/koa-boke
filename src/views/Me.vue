<template>
    <div>
        <p>欢迎你{{name}}</p>
        <cube-button :primary="true" @click="logout">注销</cube-button>

    </div>
</template>

<script>
    import {logout} from '../api/request'
    export default {
        name: "me",
        data(){
            return {
                name:'',
                id:''
            }
        },
        created() {
            this.name = this.$store.state.name
            this.id = this.$store.state.id
        },
        methods:{
            async logout(){
                let params = {id: this.id}
                let res = await logout(params)
                console.log(res);
                const {code, message} = res.data
                if(code === 0){
                    localStorage.removeItem("token")

                    const toast = this.$createToast({
                        time: 2000,
                        txt: message,
                        type: 'correct',
                        $events: {
                            timeout: () => {
                                console.log('Timeout')
                                this.$router.push({path:'/login', query:{redirect:'/Me'}})
                            }
                        }
                    });
                    toast.show();
                }
            }
        }
    }
</script>

<style scoped lang="styl">

</style>