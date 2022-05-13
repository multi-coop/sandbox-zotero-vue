<template>
  <div class="container">
    <h2>Title : {{infos.data.title}} </h2>
    <h2 v-if="infos.data.conferenceName">Theme : {{infos.data.conferenceName}} </h2>

    <div v-if="infos.data.tags.length > 0 ">
      <h2>TAGS :</h2>
      <ul v-for="(tag, index) in infos.data.tags" 
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

    <div v-if="infos.data.creators.length > 0">
      <h2>CREATORS :</h2>
      <ul v-for="(creator, index) in infos.data.creators" 
          :key="index">
        <li> {{creator.lastName}}  ({{creator.creatorType}})</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name : 'CardItem',
  props : ['infos'],
  data(){
    return {

    }
  },
}
</script>

<style scoped>
    .container{
        border: 1px solid black;
        padding: 3%;
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