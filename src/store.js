const STORAGE_KEY_ITEM = 'todos-vuejs-items'
const STORAGE_KEY_INDEX = 'todos-vuejs-index'

export default {
  fetchItem: function(){
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY_ITEM) || '[]')
  },
  saveItem: function(items){
    window.localStorage.setItem(STORAGE_KEY_ITEM, JSON.stringify(items))
  }
  /*delete: function(items){
    localStorage.removeItem(items)
  },
  fetchIndex: function(index){
    return JSON.parse(window.localStorage.getItem(index) || '[]')
  },
  saveIndex: function(index){
    window.localStorage.setItem(STORAGE_KEY_INDEX, JSON.stringify(index))
  }*/
}
