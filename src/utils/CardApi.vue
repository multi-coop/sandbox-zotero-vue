<template>
  <div>
    <h1>API CALL</h1>
  </div>
</template>


<script>
export default{
  name:'CardAPI',
  data(){
    return{

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