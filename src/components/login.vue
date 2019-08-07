<template>
    <div>
        <h2>登录</h2>
        <button @click="show">点击</button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "login",
        data(){
            return{
                msg:'哈哈',
                closeToast:null
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.show();
                setTimeout( () => {
                    this.closeToast.close();
                },4000)
            },
          show(){
              this.closeToast=Toast({
                  message:'消息',
                  position:'top',
                  duration:-1,
                  iconClass:'glyphicon glyphicon-ok',
                  className:'myToast'
              })
          }
        }
    }
</script>

<style scoped>
    h2{
        color: lightcoral;
    }
</style>