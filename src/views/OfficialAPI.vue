<template>
  <div class="wrapper">
    <h1> {{dataName}} </h1>
    <h2>Membres : {{numberOfMembers}} </h2>

    <!-- ONGLETS  -->
    <div class="vues">
      <h2 class="vue liste" 
          v-on:click="activateVueListe">
        PAR TITRE
      </h2>
      <h2 class="vue carte" 
          v-on:click="activateVueCarte">
        PAR CARTE
      </h2>
    </div>

    <!--------------- VUE CARTE -------------->
    <div v-if="vueCarte" 
         class="cards">
      <ul v-for="(card, index) in dataItems.titles"
          :key="index">
        <li> 
          <router-link :to="`/apicard/${index}`">
            <apiCardItem :keyItem="dataItems.keys[index]"/> 
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import apiCardItem from '@/components/apiCardItem.vue'
export default {
  name: 'officialApi',
  components : { apiCardItem },

  data(){
    return {
      dataItems : {
        titles : [],
        keys : [],
        addedBy : '',
        dataModified : '',
        vueListe: true,
        vueCarte: false,
        currentIndex : null,
        displayed : true,
      },

      numberOfMembers : 0,
      dataName : '',
      vueListe: true,
      vueCarte: false,
      currentIndex : null
    }
  },
  async mounted() {
    //Getting general infos (title and number of members): 
    let response = await fetch('https://api.zotero.org/groups/4571976?token=g5mqcdecr82jl2a21t2j4xbo45xt4z7aur9leyoz')
    response = await response.json()
    this.dataName = response.data.name
    this.numberOfMembers = response.data.members.length
    //GET items' infos : 
    let items = await fetch('https://api.zotero.org/groups/4571976/items?token=g5mqcdecr82jl2a21t2j4xbo45xt4z7aur9leyoz')
    items = await items.json()
    //GET items keys : 
    this.dataItems.keys = items.map(item => item.data.key)
    console.log('items:::',items)
    //GET items titles : 
    this.dataItems.titles = items.map(item => item.data.title)

    //Initial style onglets: 
    document.querySelector('.liste').style.backgroundColor = 'cadetblue'
    document.querySelector('.liste').style.color = 'white'
  },

  methods : {
    activateVueCarte : function(){
      this.vueCarte = true
      this.vueListe = false
      // Card Style 
      const cardOnglet =  document.querySelector('.carte')
      cardOnglet.style.backgroundColor = 'cadetblue'
      cardOnglet.style.color = 'white'
      document.querySelector('.liste').style.backgroundColor = 'transparent'
      document.querySelector('.liste').style.color = 'black'
    },
    activateVueListe : function(){
      this.vueListe = true
      this.vueCarte = false
      // List Style 
      document.querySelector('.liste').style.backgroundColor = 'cadetblue'
      document.querySelector('.liste').style.color = 'white'
      document.querySelector('.carte').style.backgroundColor = 'transparent'
      document.querySelector('.carte').style.color = 'black'
    },
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

.vues{
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue{
  border: 1px solid black;
  margin-right: 1%;
  padding: 1%;
  border-radius: 5px;
}

.vue:hover{
  background-color: cadetblue;
  color: black;
}

ul{
  list-style-type: none;
}

.cards{
  display: flex;
  flex-wrap: wrap
}

.link{
  text-decoration: none;
  /* color: black; */
}

li{
  font-size: 1.5rem;
    margin-bottom: 3%;
    color: black;
    text-decoration: none; 
}

li a {
  text-decoration: none;
}
</style>