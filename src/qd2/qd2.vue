
<template>
  <div class="qd2">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <h2 id="todo-title" v-html="title"></h2>
    <button id="clear-item" @click="clearItem">Clear</button>
    <input id="add-input" v-model="newItem"
           @keyup.enter="addNew" placeholder="do what?">
    <ul>
      <li v-for="item in items">
        <h3 @mouseenter="itemEnter(item)" @mouseleave="itemLeave(item)">
          <input type="checkbox" @click="itemCheck(item)">
          <p class="item-label" v-bind:class="{'line-through': item.checked}">
            {{ item.index }} . {{ item.label }}
          </p>
          <p class="item-status" v-if="item.checked">finished</p>
          <p class="item-delete" v-if="item.showDelete" @click="deleteClick(item)">Delete</p>
        </h3>
      </li>
    </ul>

    <button @click="toggle">Back To Catagory</button>
			
  </div>
</template>

<script>
//import Store from './Store'
export default {
  name: 'HelloWorld',
  data: function() {
    return{
      title: 'Todo lists hha',
      items: [],
      newItem: '',
      index: 0
    }
  },

  methods:{
    addNew: function() {
      this.items.push({
        label: this.newItem,
        checked: false,
        showDelete: false,
        index: this.index
      });
      this.newItem = '';
      this.index += 1
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
      this.items.$remove(item);
      this.index -= 1
    },
    clearItem(){
      localStorage.clear();
      this.index = 0;
    },
    toggle:function () {
      this.$router.push('/');
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#qd2 {
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
  #clear-item{

  }
  #add-input{
    width: 750px;
    height: 35px;
    padding: 0 5px;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  li{
    height: 30px;
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
  #todo-title{

  }
</style>
