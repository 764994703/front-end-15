<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class = "text-primary">{{'我要当学霸'}}</h1>
    <h4>{{'制作人：王子阳，王鑫伟，李嘉昊'}}</h4>
    <h2>{{'这是一个用来控ji住你ji己的app！'}}</h2>
    <h4>{{'在这个app里，你可以通过各种蜜汁操作提高复习效率，走上人生巅峰'}}</h4>
    <h3>{{'选择一种蜜汁操作'}}</h3>

    <div>
      <select class="select-list" v-model="selected">  
        <option v-for="item in items" v-bind:value="item.value">{{item.text}}</option>  
      </select>  

    </div>
    <button class = "btn" @click="toggle">进入</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        info : '',
        items:[{text:'愧疚学习法',value:'\qd2'},{text:'放松一下，冷知识',value:'\qd4'},{text:'我要当学霸',value:'\qd3'}],
        selected:'',
        styles:{ color : 'white', backgroundColor: 'blue'}
      }
    },
    methods:{
      toggle:function(){
        this.$router.push(this.selected);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
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
  .select-list {
    background: transparent;
    border-color: grey;
    padding-left: 10px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
  }
</style>
