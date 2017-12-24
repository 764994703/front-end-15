
<template>
  <div class="qd2">
    
    <div class="picture">
      <img src="../assets/tag.jpg">
    </div>

    <h1 id="todo-title" v-html="title"></h1>

    <div id="parent">
      <select class="select-list" id="setSubject">
        <option class="option" value="ICS">ICS</option>
        <option class="option" value="大物">大物</option>
        <option class="option" value="算法">算法</option>
        <option class="option" value="基电">基电</option>
        <option class="option" value="数电">数电</option>
        <option class="option" value="电工">电工</option>
        <option class="option" value="数据结构">数据结构</option>
        <option class="option" value="数理方法">数理方法</option>
        <option class="option" value="马原">马原</option>
      </select>
      <input id="add-input" v-model="newItem"
             @keyup.enter="addNew" placeholder="do what?">
      <button class="btn" id="btn-confirm" @click="addNew">添加</button>
    </div>

    <ul>
      <blockquote v-for="item in items">
        <div v-if="item.allshow">
          <h3 @mouseenter="itemEnter(item)" @mouseleave="itemLeave(item)" >
            <input type="checkbox" @click="itemCheck(item)" >
            <p class="item-label" v-bind:class="{'line-through': item.checked}">
              {{ item.subject }} . {{ item.label }}
            </p>
            <p class="item-status" v-if="item.checked">finished</p>
            <p class="item-delete" v-if="item.showDelete" @click="deleteClick(item)">Delete</p>
          </h3>
        </div>
      </blockquote>
    </ul>

    <button class="btn" id="clear-item" @click="clearItem">Clear</button>
    <button class="btn" @click="toggle">Back To Catagory</button>
			
  </div>
</template>

<script>
const STORAGE_KEY_ITEM = 'todos-vuejs-items';
export default {
  name: 'HelloWorld',

  data: function() {
    return{
      title: 'Todo Lists for final-exam',
      items: JSON.parse(window.localStorage.getItem(STORAGE_KEY_ITEM) || '[]'),
      newItem: '',
      allshow: true,
      subject: '',
      totalSize: 0
    }
  },
  watch:{
    items:{
      handler: function(items){
        window.localStorage.setItem(STORAGE_KEY_ITEM, JSON.stringify(items))
      },
      deep: true
    }
  },
  methods:{
    addNew: function() {
      this.items.push({
        label: this.newItem,
        checked: false,
        showDelete: false,
        allshow: true,
        subject: document.getElementById("setSubject").value,
      });
      this.newItem = '';
      this.totalSize += 1
    },
    itemCheck(item){
      item.checked = !item.checked
    },
    itemEnter(item){
      item.showDelete = true
    },
    itemLeave(item){
      item.showDelete = false
    },
    deleteClick(item){
      item.allshow = false;
      this.totalSize -= 1;
    },
    clearItem(){
      localStorage.clear();
      var i = 0;
      this.items = [];
      this.totalSize = 0
    },
    toggle:function () {
      this.$router.push('/');
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qd2 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 800px;
    margin: 30px auto;
  }
 body{
    font-family: Helvetica, sans-serif;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  li{
    height: 30px;
  }
  a {
    color: #42b983;
  }
  #add-input{
    width: 250px;
    height: 35px;
    padding: 0 5px;
    font-size: 17px;
    font-family: Helvetica, sans-serif;
  }
  .item-status{
    display: inline;
    background: red;
    color: white;
    padding: 0 5px;
    font-size: 12px;
  }
  .item-delete{
    display: inline;
    text-decoration: underline;
    font-size: 12px;
    color: grey;
    cursor: pointer;
  }
  .item-label{
    display: inline;
  }
  .line-through{
    text-decoration: line-through;
  }
  .picture{
    width: 500px;
    height: 300px;
  }
  #parent{
    width: 800px;
    height: 50px;
  }
  .select-list {
    background: transparent;
    border-color: grey;
    padding-left: 10px;
    width: 120px;
    height: 40px;
    cursor: pointer;
    border-radius: 5px;
  }
  .option{
    font-size: 17px;
    font-family: Helvetica, sans-serif;
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
