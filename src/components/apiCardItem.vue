<template>
  <div class="container">
    <h1> {{title}} </h1>
    <h2>Created by: {{username}} </h2>
  </div>
</template>

<script>
export default {
  name : 'apiCardItem',
  props : ['keyItem'],
  data(){
    return {
      title : '',
      username: '',
      creators : null
    }
  },

  async mounted(){
    let response = await fetch(`https://api.zotero.org/groups/4571976/items/${this.keyItem}?token=g5mqcdecr82jl2a21t2j4xbo45xt4z7aur9leyoz`)
    response = await response.json()
    this.title = response.data.title
    this.username = response.meta.createdByUser.username
    console.log(response)
  }
}
</script>

<style scoped>
    .container{
        border: 1px solid black;
        margin: auto;
        width: 30em;
        max-width: 100%;
        overflow: scroll;
        color: black;
    }

    .container:hover{
        border: 1px solid cadetblue;
        background-color:rgb(251, 251, 251);
    }

    li{
        list-style-type:none;
        color: black;
        text-decoration: none;
    }

    .tag{
        text-decoration: none;
        list-style-type: none;
        border: 1px solid black;
        padding: 1%;
        width: fit-content;
        margin: auto;
        margin-bottom: 1.5%;
  }
</style>