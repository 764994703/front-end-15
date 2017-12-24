<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class = "text-primary">{{'我要当学霸'}}</h1>
    <h4>{{'制作人：王子阳，王鑫伟，李嘉昊'}}</h4>
    <h2>{{'这是一个用来控ji住你ji己的app！'}}</h2>
    <h4>{{'在这个app里，你可以通过各种蜜汁操作提高复习效率，走上人生巅峰'}}</h4>
    <h3>{{'选择一种蜜汁操作'}}</h3>
    <!-- <input type="text" v-model="info">-->
    <p>
    <select v-model="selected">  
    <option v-for="item in items" v-bind:value="item.value">{{item.text}}</option>  
    </select>  

    </p>
    <button class = "btn btn-primary btn-lg"@click="toggle">进入</button>
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
</style>
