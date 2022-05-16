<template>
  <div class="wrapper">
    <ItemsAPI/>
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
import ItemsAPI from '../utils/ItemsApi.vue'
export default{
  name : 'apiCardView',
  components : {ItemsAPI},
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
    ItemsAPI()
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