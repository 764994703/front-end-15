
<template>
  <div class="qd4">
    <h2>{{'这是一个用于与他人分享冷知识的app'}}</h2>
    <button class="btn" id="back-btn" v-if="!isCountDown" @click='toggle'>Back to catagory</button>
    <footer>你位于——<cite title="Source Title" style="font-size: 30px">冷知识</cite></footer>

    <!-- <input type="text" v-model="info">-->
    <input type="text" v-model="mytip">
    <button class = "btn"  @click="share">我要分享我的冷知识</button>
    <h3 :style="styles3">————注意！如果like<-5将会被取消展示</h3>
    <div class = "container col-md-12">
      <div class = "tip">
        <h1><cite title="Title">Shared</cite></h1>
        <blockquote class = "tipp" v-for="item in tips">
          <div v-if="item.allshow">
            <div class = "tipinfo">
              <h2 class="text">{{item.text}}</h2>
              <h2 class="text">——likes:{{item.like}}</h2>
              <div v-if="item.btnshow">
                <button class = "btn" :style="styles1" @click="like(item.id)">哈哈哈哈哈哈好玩++</button>
                <button class = "btn" :style="styles2" @click="notlike(item.id)">无聊</button>
              </div>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        info : '',
        mytip : '',
        styles1:{ color : 'black', backgroundColor: 'green'},
        styles2:{ color : 'black', backgroundColor: 'red' },
        styles3:{ color : 'red', backgroundColor: 'black' },
        tips:[
          {
            id : 0,
            text : '· 软院头发最茂密的是院长',
            like : 10,
            btnshow : true,
            allshow : true
          },
          {
            id : 1,
            text : '· vue真好用',
            like : 9,
            btnshow : true,
            allshow : true
          },
          {
            id : 2,
            text : '· hhhhhhhh',
            like : -5,
            btnshow : true,
            allshow : true
          },
          {
            id : 3,
            text : '· 怕怕怕怕怕怕怕',
            like : 0,
            btnshow : true,
            allshow : true
          }
        ]
      }
    },
    methods:{
      like:function(id){
        this.tips[id].like++,
          this.tips[id].btnshow = false
      },
      notlike:function(id){
        this.tips[id].like--,
          this.tips[id].btnshow = false
        if(this.tips[id].like<-5){
          this.tips[id].allshow = false
        }
      },
      share:function(){
        if(this.mytip!=''){
          this.tips.push({
            id : this.tips.length,
            text : this.mytip,
            like : 0,
            btnshow : true,
            allshow : true,
          }),
            this.mytip = '',
            alert('分享成功')
        }
      },
      toggle:function () {
        this.$router.push('/');
      }
    }
  }

</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .btn{
    background-color: whitesmoke;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: large;
    cursor: pointer;
    border-radius: 15px;
    padding: 10px 22px;
  }
  .btn:hover{
    background-color: grey;
    color: white;
  }
  .btn:active {
    background-color: grey;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
</style>
