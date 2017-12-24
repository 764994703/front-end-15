<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{'这是一个用于与他人分享冷知识的app！'}}</h2>
    <h3>{{'选择你要去哪'}}</h3>
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
        items:[{text:'冷知识',value:'\qd2'},{text:'查询网址',value:'\qd3'}],  
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
