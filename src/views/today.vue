<template >
        <div class="space-on-top"></div>
        <v-container >
  <h1>{{ this.$store.state.items[0].title }}</h1>
  <div >
    <v-form @submit.prevent="submit(mytext)">
      <v-text-field
            label="Add New Task"
            prepend-inner-icon="mdi-plus"
            variant="outlined"
            class="pt-3 pr-4"
            @click:prepend-inner="submit(mytext)"
            v-model="mytext"
            :rules="rules.required2"
          ></v-text-field>
          
    </v-form>
  
    <v-expansion-panels class="mb-1">
      <v-expansion-panel
      >
        <v-expansion-panel-title collapse-icon="mdi-filter-minus-outline" expand-icon="mdi-filter-plus-outline">
          Fillter
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div style="display: flex;">
          <div style="width: 30%;">
          <v-responsive max-width="244">
          <v-text-field
        append-inner-icon="mdi-magnify"
        label="Search"
        variant="outlined"
        v-model="searchTF"
        hide-details
        single-line
      ></v-text-field>
    </v-responsive>
  </div>
  <div style="width: 70%;">
    <div style="display: flex;align-items: center;width: 100%;"><span class="pr-4">List</span>
         
         <v-select
 clearable
 label="Select"
 :items="itemss"
 item-title="title"
 v-model="Fillterlist"
 variant="underlined"
></v-select>
       </div>
  </div>
</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-list lines="three" select-strategy="classic" class="list-in">
      <div v-for="event in Fillter"
      :key="event.id">
      <v-list-item 
      :class="{done2: event.active}"
         >
        <div  @click="doneEvent(event.id)"
        >
          <v-list-item-action start>
            <v-checkbox-btn  :model-value="event.active" color="primary"></v-checkbox-btn>
          </v-list-item-action>
        </div >
        <div       @click="doneEvent(event.id)"
        :class="{done: event.active}">
        <v-list-item-title
        >{{event.title}}</v-list-item-title>
       <v-list-item-subtitle>
        {{event.subtitle}}
       </v-list-item-subtitle>
       <v-list-item-subtitle class="pt-1">
        <small><v-icon>mdi mdi-calendar-check-outline</v-icon>{{ event.date }}</small><small class="pl-3"><v-icon>mdi mdi-calendar-clock-outline</v-icon>{{ event.duration }}</small><small  class="pl-3"><v-icon v-bind:color="event.colorIconList">{{event.iconList}}</v-icon>{{ event.Mylist }}</small>
       </v-list-item-subtitle>
      </div>

      <v-avatar >
        <v-btn
            icon="mdi-chevron-right"
            variant="text"
            style="float: right;font-size: large;padding-bottom: 7px;"
            size="large"
            @click.stop="Sidedrawer = !Sidedrawer"
            @click="PassData(event.id)"
            :to="{name:'details',params:{id:event.id}}"
          ></v-btn>
        </v-avatar>
         
      </v-list-item>
      
      <v-divider style="width: 95%;"></v-divider>   
       
    </div>
   
<v-list-item 
      v-if="anyTask"
         >
        <div  
        >
          <v-list-item-action start>
            <v-avatar><v-icon>mdi-playlist-remove</v-icon></v-avatar>
          </v-list-item-action>
        </div >
        <div     
        >
        <v-list-item-title>
          You dont have task!
        </v-list-item-title>
       <v-list-item-subtitle>
        Enter your task above
      </v-list-item-subtitle>
       <v-list-item-subtitle class="pt-1">

      </v-list-item-subtitle>
      </div>

         
      </v-list-item>

    </v-list>
  </div>

     <v-navigation-drawer  v-model="Sidedrawer"
     v-if="Sidedrawer"
      :width="350"
     location="right" style="
    border-radius: 20px;background-color: #f4f4f4;border: none;padding: 20px;transition: all 3s ease-in-out 3s;
">

  <h3>Task</h3>
    <v-text-field
   variant="outlined" 
    label="Rename tesk"
    class="pt-2"
    v-model="titleTask"
    ></v-text-field>

    <v-textarea
         variant="outlined" 
          name="input-7-4"
          label="Description"
          v-model="subtitleTask"
                  ></v-textarea>
       
        <div style="display: flex;align-items: center;"><span class="pr-4">List</span>
         
          <v-select
  clearable
  label="Select"
  :items="itemss"
  item-title="title"
  v-model="mylist"
  variant="underlined"
  :rules="rules.required"
></v-select>
        </div>
       

    <div class=" pt-4">
      <span class="pr-4">Date</span>
      <input  type="date" v-model="DateTask" placeholder="Select Date..">
    </div>
    <div class=" pt-4">
      <span class="pr-4">Time</span>
      <input  type="time"  v-model="TimeTask" placeholder="Select Time.." >

    </div>


    <template v-slot:append>
          <div class="pa-2"  style="display: flex;width: 100%;">
<v-btn @click="DeleteTask(), Sidedrawer=false"  variant="plain" >
 Delete task
</v-btn>
<v-btn style="background-color: #ffd43a;" @click="SaveChanges() , Sidedrawer=false">
  Save changes
</v-btn>
          </div>
        </template>
    </v-navigation-drawer>
<v-btn @click="dialog = true" id="DeleteBtn" :class="this.$store.state.drawer?'DeleteBtn1':'DeleteBtn2'" color="#db3024" icon="mdi-delete">
</v-btn>

<template>
  <div class="text-center pa-4">

    <v-dialog
      v-model="dialog"
      width="auto"
    >
    <v-card title="Are you sure you want to delete?">
      <v-divider></v-divider>
      <v-card-text>
        This will delete all completed tasks , Are you sure?
      </v-card-text>

      <v-card-actions >
        <v-spacer></v-spacer>

        <v-btn
          text="Cancel"
          @click="this.dialog = false"
        ></v-btn>
        <v-btn   @click.prevent="DeleteAllTask(),this.dialog = false" style="background-color:#db3024;color: white;">
  Delete
</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
  </div>
</template>
<div style="width: 100%;">
<notfication></notfication>
</div>
</v-container>

<rightNav></rightNav>
</template>

<script>
import store from '@/store/index.js'
import notfication from '../components/notfication.vue'
import rightNav from '../components/right-nav.vue'
import { watch } from 'vue'


export default{
  components:{notfication,rightNav},
data:()=>({
        events:store.state.events,
        // eventsLocal:JSON.parse(localStorage.getItem("tasks")),
        mytext:"",
        titleTask:"",
        subtitleTask:"",
        TimeTask:"",
        DateTask:"",
        Sidedrawer: false,
        PassIdofArry:"",
        mylist:"",
        iconList:"",
        searchTF:"",
        Fillterlist:"",
        colorIconList:"",
        dialog : false,
        anyTask:null,
        itemss: store.state.items2,
      closeOnContentClick: true,
      openDraw:store.state.drawer,
      rules: {
        required: [(v) =>  v.length>0 || "It is better for tasks to be in list"],
        required2: ["Add name of task"],

      },
}),

mounted(){


},
methods: {
  
    PassData(id){      
      let event = this.events.filter(ev => ev.id == id)[0]
      this.DateTask = event.date
        this.titleTask=event.title 
        this.subtitleTask=event.subtitle 
        this.TimeTask = event.duration
        this.PassIdofArry = event.id


    //   this.itemss.forEach(((element) => 
    //   {

    //   //  this.colorIconList = ele.color
    //   //  this.iconList = ele.icon
    
    
    // // console.log(this.iconList)

    // }))
      console.log(this.Sidedrawer)
    },
  
    doneEvent(id){
      let event = this.events.filter(ev =>ev.id == id)[0]
      event.active = !event.active
      localStorage.setItem("tasks",JSON.stringify(this.events))

      let r= document.querySelector("#DeleteBtn")
      if(this.events.some(e=>e.active === true)){
        r.style.visibility= "visible";
      r.style.opacity=1;
       }else{
                r.style.visibility= "hidden";
      r.style.opacity=0;

       }
    },
    
     submit(p){
      const today = new Date();
const yy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
let Hour = today.getHours();
let min = today.getMinutes();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
if (Hour < 10) dd = '0' + Hour;
if (min < 10) mm = '0' + min;
          if(this.mytext===""){
            this.rules.required2
            console.log("empty text")
          }else{
          store.commit("ADD_EVENT",{
            title:this.mytext,
            id:(store.state.events.length)+1,
            date:yy+"-"+mm+"-"+dd,
            duration: Hour+":"+min
          })
          localStorage.setItem("tasks",JSON.stringify(this.events))

          this.mytext = ""
        
          store.commit("ADD_Notfication",{
            display:true,
            text:"Task was successfully added",
            color:"success",
          })
        }
          console.log(this.events)
     },
        SaveChanges(){
          let event = this.events.filter(ev => ev.id == this.PassIdofArry)[0]
          let list = this.itemss.filter(e => e.title == this.mylist)[0]

          if(this.mylist.length ==0){
            console.log("empty")
          }else{
            this.colorIconList = list.color
            this.iconList = list.icon
          }
          event.title =this.titleTask
          event.subtitle=this.subtitleTask,
          event.date=this.DateTask,
          event.duration=this.TimeTask,
          event.Mylist=this.mylist,
          event.colorIconList = this.colorIconList
          event.iconList = this.iconList

        
          localStorage.setItem("tasks",JSON.stringify(this.events))

          store.commit("ADD_Notfication",{
           display:true,
            text:"Task was successfully updated",
            color:"success"

          })
          
        },
        DeleteTask(){
          // this.events.value.splice(this.events.value.indexOf(PassIdofArry),1)
          // this.events = this.events.filter(task => task.id !== this.PassIdofArry)
          const Index = this.events.findIndex(
                res => res.id === this.PassIdofArry
            );
            this.events.splice(Index, 1);

            localStorage.setItem("tasks",JSON.stringify(this.events))

          store.commit("ADD_Notfication",{
           display:true,
            text:"Task was successfully Deleted",
            color:"error"

          })
        },
        DeleteAllTask(){

          // let even = this.events.active = true
          // this.events = this.events.filter(task => task.active !== even)
         
         
          let t = this.events.filter(task => task.active)

            t.forEach(element => {
              this.events.splice(this.events.indexOf(element),1)
            });
         
          let r= document.querySelector("#DeleteBtn")
                r.style.visibility= "hidden";
      r.style.opacity=0;

      localStorage.setItem("tasks",JSON.stringify(this.events))

          store.commit("ADD_Notfication",{
           display:true,
            text:"Task was successfully Deleted",
            color:"error"

          })
        },
//         hideThisDetails(){
//           let r= document.querySelector(".nav-right-det")

// if(this.Sidedrawer){        r.style.display= "block";
//      }else{
//  r.style.display= "none";

//      }

//         },
},

computed:{
listit(){
  return this.$route.params.id;
},
Fillter(){
  if(this.searchTF !==""){
    return this.events.filter(i=>
    i.title.toLowerCase().includes(this.searchTF)
    );
  }
  if(this.Fillterlist !==""){
    if(this.Fillterlist !==null){
    return this.events.filter(i=>
      i.Mylist === this.Fillterlist
      // console.log(i.Mylist === this.Fillterlist)
    )
  }
  else{
    if(this.events.length ===0){
      this.anyTask = true
    }
    else{
      this.anyTask = false
      return this.events

    }
  }
  }
  if(this.events.length ===0){
      this.anyTask = true
    }
    else{
      this.anyTask = false
      return this.events

    }},
}

}
</script>


<style >

.list-in  .v-list-item--active > .v-list-item__overlay{
  background-color: transparent !important;
}
.done{
  text-decoration: line-through;
  transition: all .2s;
}
.done2{
  background-color: #ddd;

}
.v-btn__content{
  white-space: normal;
}
.DeleteBtn1{
  position: absolute;bottom: 10%;left:20%;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.DeleteBtn2{
  position: absolute;bottom: 10%;left:7%;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.space-on-top{
  display: none;
}
@media (max-width: 1030px) {
  .space-on-top{
  display: block;
  height: 50px;
}

}
</style>
