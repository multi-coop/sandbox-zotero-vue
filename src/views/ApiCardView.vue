<template>
  <div class="wrapper">
    <h3>SOURCE NUMBER {{id + 1}} : </h3>
    <h1> {{title}}</h1>

    <h2>Description : </h2>
    <p> {{abstractNote}} </p>

    <h2>Created By : {{author}} </h2>

    <h2>Date d'ajout : {{date}} </h2>
    <button> 
      <router-link to="/officialapi">
        Retour à la liste
      </router-link>
    </button>
  </div>
</template>

<script>
export default{
  name : 'apiCardView',
  data(){
    return{
      id : parseInt(this.$route.params.id),
      title : '',
      author : '',
      type : '',
      date : '',
      tags : [],
      abstractNote : '',
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

<style scoped>
 .wrapper{
    border: 1px solid grey;
    width: 85%;
    margin: 5% auto;
    padding: 1%;
    box-sizing: border-box;
  }
  li{
    list-style-type: none;
  }

  .tag{
    border: 1px solid black;
    padding: 1%;
    margin-bottom: 1.5%;
    width: fit-content;
    margin: auto;
  }
</style>