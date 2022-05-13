<template>
  <div class="wrapper">
    <h1>CARD NUMBER {{id}} </h1>
    <h2>TITLE : {{cardInfos.title}} </h2>

    <h2 v-if="cardInfos.theme">THEME : {{cardInfos.theme}} </h2>

    <div v-if="cardInfos.tags.length > 0 ">
      <h2>TAGS :</h2>
      <ul v-for="(tag, index) in cardInfos.tags" 
          :key="index">
        <li 
          v-if="typeof tag === 'string'" 
          class="tag"> 
          {{tag}}
        </li>
        <li 
          v-if="typeof tag === 'object'" 
          class="tag"> 
          {{tag.tag}} 
        </li>
      </ul>
    </div>
    <p v-if="cardInfos.tags === null ">No tags</p>

    <div v-if="cardInfos.creators.length > 0">
      <h2>CREATORS :</h2>
      <ul v-for="(creator, index) in cardInfos.creators" 
          :key="index">
        <li> {{creator.lastName}}  ({{creator.creatorType}})</li>
      </ul>
    </div>

    <a  v-if="cardInfos.url" 
        href="http://" 
        target="_blank" 
        rel="noopener noreferrer">URL : {{cardInfos.url}}</a>

    <h3>Description : </h3>

    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet iusto repudiandae illum repellat veritatis. Accusamus nisi adipisci repellendus enim expedita ratione veritatis labore, ipsum beatae quaerat, itaque, facilis doloribus!</p>

    <button v-on:click="navigateToHomepage">Retour à la liste</button>
  </div>
</template>


<script>

export default {
  name: 'CardView',
  data(){
    return{
      id : this.$route.params.id,
      cardInfos : {
        title : '',
        theme : null,
        tags : null,
        filteredTags : [],
        challenge : null,
        creators : [],
        url : null,
      }
    }
  },

  async mounted(){
    const response = await fetch('https://api.zotero.org/users/475425/collections/BX9965IJ/items/top?v=3')
    let data = await response.json()
    data = data[this.id]
    console.log(data)
    this.cardInfos.title = data.data.title
    this.cardInfos.theme = data.data.conferenceName
    this.cardInfos.tags =  data.data.tags
    this.cardInfos.creators = data.data.creators
    this.cardInfos.url = data.data.url
  },

  methods : {
    navigateToHomepage : function(){
      this.$router.push('/zotero')
    }
  }

}
</script>

<style scoped>
  .wrapper{
    border: 1px solid grey;
    width: 50%;
    margin: 5% auto;
    padding: 1%;
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

