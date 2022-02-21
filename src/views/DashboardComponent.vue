<template>
  <div class="container">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      

      <v-layout row class="my-6">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortby('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortby('person')" slot="activator">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
        <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-4 project ${project.status}`">
          <v-flex xs12 sm4 md6>
            <div class="caption grey--text">Projects Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`simple ${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
            
          </v-flex>
        </v-layout>
        
      </v-card>
    </v-container>
  </div>
</template>

<script>



export default {
  data(){
    return{
      projects: [
        {title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2022', status: 'onGoing'},
        {title: 'Design a new site', person: 'Net Ninja', due: '2st Jan 2022', status: 'complete'},
        {title: 'Design a new website', person: 'Ninja', due: '3st Jan 2022', status: 'onGoing'},
        {title: 'Design a new site', person: 'The Net', due: '4st Jan 2022', status: 'overdue'},
      ]
    }
  },
  methods: {
    sortby(prop){
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
    }
  },
  
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.onGoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.simple.complete{
  background: #3cd1c2;
}
.simple.onGoing{
  background: orange;
}
.simple.overdue{
  background: tomato;
}
</style>
