<template>
  <div class="wrapper">
    <h1>Votre bibliographie : </h1>
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
    <!--------------- VUE LISTE -------------->
    <div v-if="vueListe">
      <ul v-for="(title, index) in titles" 
          :key="index">
        <li> 
          <router-link 
            style="text-decoration: none"
            :to="`/card/${index}`" 
            class="link">
            {{ title }}
          </router-link>
        </li>
      </ul>
    </div>

    <!--------------- VUE CARTE -------------->
    <div v-if="vueCarte" 
         class="cards">
      <ul v-for="(card, index) in titles"
          :key="index">
        <li> 
          <router-link :to="`/card/${index}`">
            <Card :infos='allData[index]'/> 
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: "ZoteroView",

  components: { Card },

  data() {
    return {
      allData : [],
      titles: [],
      vueListe: true,
      vueCarte: false,
      currentIndex : null
    }
  },
  async mounted() {
    const response = await fetch("https://api.zotero.org/users/475425/collections/BX9965IJ/items/top?v=3");
    const data = await response.json()
    this.titles = data.map(doc => doc.data.title)
    this.allData = data
    console.log(this.allData)
    document.querySelector('.liste').style.backgroundColor = 'cadetblue'
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
    width: 70%;
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

.cards{
  display: flex;
  flex-wrap: wrap
}

ul{
  list-style-type: none;
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

.search{
  border: 1px solid black;
  padding: 1%;
  width: 8rem;
  border-radius: 5px;
  margin: auto;
  margin-top: 5%;
}

.search:hover{
  background-color: cadetblue;
  color: white;
  font-weight: bold;
}
</style>