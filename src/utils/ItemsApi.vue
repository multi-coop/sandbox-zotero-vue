<template>
  <div>
    <h1>API CALL</h1>
  </div>
</template>


<script>
export default{
  name:'ApiItems',
  data(){
    return{

    }
  },

  async mounted(){
    //GET items' infos : 
    let items = await fetch('https://api.zotero.org/groups/4571976/items?token=g5mqcdecr82jl2a21t2j4xbo45xt4z7aur9leyoz')
    items = await items.json()
    items = items[this.id]
    console.log(items)
    this.title = items.data.title
    this.author = items.meta.createdByUser.username
    this.url = items.data.url
    this.date = items.data.dateAdded
    this.tags = items.data.tags
    this.abstractNote = items.data.abstractNote
  }
}
</script>