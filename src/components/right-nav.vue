<template>

      <v-navigation-drawer @click="testClick()" v-model="drawer" style="margin: 7px;
    border-radius: 20px;background-color: #f4f4f4;border: none;">
      <!--  -->
      
      <v-app-bar-nav-icon @click="drawer = !drawer" :style="drawer ?{float:'right'}:{position:'absolute',right:'-80px',top:'5px',backgroundColor:'#ddd'}"></v-app-bar-nav-icon>
      <v-menu  v-model="menu3"  :close-on-content-click="false"  :location="location">
        <template v-slot:activator="{ props }">
      <v-list-item  class="uandl">
          <v-list-item
          @click="PassNaI()"
            lines="two"
            :prepend-avatar="ImgUrl"
            :title="username"
            v-bind="props"
          ></v-list-item>
      </v-list-item>
    </template>
    <v-card class="uandl2" min-width="300">
        <v-card-title>Edit</v-card-title>
        <v-divider></v-divider>
      <v-card-item >
        <div>
        <v-file-input
    accept="image/png, image/jpeg, image/bmp"
    variant="outlined"
    label="Avatar"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    v-model="myImg"
    @change="RenderImg"
  ></v-file-input>
</div><div> <v-text-field :rules="[rules.required]" clearable v-model="MyName"  variant="outlined"></v-text-field></div>
      </v-card-item>

      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="menu3 = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="menu3 = false,SavePersonalEdit()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

      <div style="display: flex;align-items: center;width: 100%;position: relative;" class="pb-2 pl-1">
        <span class="mdi mdi-magnify iconsearch"></span>
          <input
  type="text"
  placeholder="Search"
  prepend-inner-icon="mdi-magnify"
      class="searchInput "
      v-model="SearchList"
  >
</div>

      <v-list
        dense
        nav
      >
      <v-list-item-subtitle>TASKS</v-list-item-subtitle>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          :exact="true"
          link
        >
          <v-list-item-icon style="padding-right: 15px;">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-contents style="display: flex;justify-content: space-between;" >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-action>
            {{ store.state.events.length}}
    </v-list-item-action>
          </v-list-item-contents>
        </v-list-item>
        <v-list-item to='/ToDoApp/Stickwall'>
          <v-list-item-icon style="padding-right: 15px;">
            <v-icon>mdi-sticker-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Stick wall</v-list-item-title>
          <v-list-item-action>
            {{ store.state.Stickwall.length}}
    </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
      <v-list-item-subtitle>LISTS</v-list-item-subtitle>
      
      <v-menu v-model="menu" :close-on-content-click="false"  :location="location">

<template v-slot:activator="{ props }">
  <v-list-item
          v-for="item in FillterList"
          :key="item.id"
          :exact="true"
          v-bind="props"
          @click="PassList(item.id)"
        >
        
          <v-list-item-icon style="padding-right: 15px;" >
            <v-avatar >
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-avatar>
          </v-list-item-icon>

          <v-list-item-contents style="display: flex;
    justify-content: space-between;" >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-text-field v-if="showValues" label="Age"></v-text-field>
            <v-list-item-action>
            
    </v-list-item-action>
          </v-list-item-contents>
         
        </v-list-item>

      </template>

      <v-card min-width="300">
        <v-card-title>Edit List</v-card-title>
        <v-divider></v-divider>
      <v-card-item>
        <input v-model="pickColor" type="color"> <v-text-field :rules="[rules.required]" clearable v-model="editList"  variant="outlined"></v-text-field>
      </v-card-item>

      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            variant="text"
            @click="menu = false,ListDelete()"
          >
            Delete
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="menu = false,ListEdit()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</v-menu>
       
        <div>
         <!-- <v-dialog width="500"> -->
          <v-menu v-model="menu2" :close-on-content-click="false"  :location="location">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" prepend-icon="mdi mdi-plus" class="pr-1"  variant="text" width="100%">Add New List</v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Add New List">
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field :rules="[rules.required]" clearable  v-model="newList" variant="outlined"></v-text-field>
      </v-card-text>

      <v-card-actions >
        <v-spacer></v-spacer>

        <v-btn
          text="Close"
          @click="isActive.value = false"
        ></v-btn>
        <v-btn v-bind:disabled="!newList"   @click.prevent="addNewList() ,isActive.value = false" style="background-color: #ffd43a;" >
  Save
</v-btn>
      </v-card-actions>
    </v-card>
  </template>
<!-- </v-dialog> -->
</v-menu>
        </div>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn block prepend-icon="mdi-logout" to="/ToDoApp" variant="plain" style="justify-content: start;">
  Sign out
</v-btn>
          </div>
        </template>
    </v-navigation-drawer>

</template>

<script setup>
//   import { ref } from 'vue'

//     const myImg = ref("")
//     const ImgUrl = ref("")
//     ImgUrl.value = "https://randomuser.me/api/portraits/women/8.jpg"
//  const RenderImg =()=>{
//     if(!myImg.value[0]) {
//         ImgUrl.value ="";
//         return
//   }
//     let file = myImg.value[0]
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.addEventListener('load',()=>{
//         ImgUrl.value= reader.result
//         console.log(myImg.value)

//     })

// }
</script>


<script>
import store from '../store/index.js';
  export default {
    data: () => ({ 
        drawer: true ,
        username:store.state.username,

      items12: [
        { title: 'Edit' },
        { title: 'Delete' },
        
      ],
      location: 'end',
        right: null,
        items2:store.state.items2,
        items:store.state.items,
        events:store.state.events,
        newList:"",
        pickColor:"",
        showValues:false,
        menu:false,
        menu2:false,
        editList:"",
        PassIdList:"",
        menu3:false,
        MyName:"",
        SearchList:"",
        myImg: "",
        ImgUrl: JSON.parse(localStorage.getItem("ImgUrl")) || "https://pic.onlinewebfonts.com/thumbnails/icons_571034.svg",
        rules: {
        required: value => !!value || 'Field is required',
      },
       }),
       mounted(){
        try{
          this.ImgUrl.value
        }
catch{
  console.log("ddd")
}
},
       methods:{
        addNewList(){
          store.commit("ADD_list",{
            title:this.newList,
            id:(store.state.items2.length)+1,
            icon:'mdi mdi-square',
            color:`${"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}`,
          })
          localStorage.setItem("Lists",JSON.stringify(this.items2))

          this.newList= ""
          console.log(this.username)
        },
       
        PassList(id){
          var List = this.items2.filter(ev => ev.id ==id)[0]
          this.PassIdList =id
          this.pickColor = List.color
          this.editList = List.title
        },
        ListDelete(){
            this.items2 = this.items2.filter(list =>list.id !== this.PassIdList)
            localStorage.setItem("Lists",JSON.stringify(this.items2))

        },
        ListEdit(){
          var List = this.items2.filter(list =>list.id == this.PassIdList)[0]
          List.title = this.editList
          List.color = this.pickColor
          localStorage.setItem("Lists",JSON.stringify(this.items2))

        },
        callOnEnter() {
  console.log("Enter key pressed");
},
PassNaI(){
   
  console.log("my img"+this.myImg)
  console.log("img url"+ this.ImgUrl)

    this.MyName = store.state.username
},
SavePersonalEdit(){
    this.username= this.MyName

    localStorage.setItem("username",JSON.stringify(this.username))

},
testClick(){
  store.state.drawer =this.drawer
  // console.log(store.state.drawer)
  // console.log(this.drawer)
},
RenderImg(){
  this.ImgUrl= URL.createObjectURL(this.myImg)
  localStorage.setItem("ImgUrl",JSON.stringify(this.ImgUrl))
  


}

       },
       computed:{
       FillterList(){
        if(this.SearchList !==""){
          return this.items2.filter(i=>
          i.title.toLowerCase().includes(this.SearchList));
        }
        else{
          return this.items2

        }
       }

       },
       
  }
</script>

<style>
.v-list-item__content{
  display: contents !important
}
.searchInput{
  padding: 10px;
    border: 1px solid #ddd;
    border-radius: 7px;
    margin: 10px;
    width: 100%;
}
.iconsearch{
  position: absolute;
  right: 13px;
    font-size: x-large;
    color: #aaaaaa;
}
.v-btn--icon.v-btn--density-default{
margin-top: 10px;
}
.v-card-item__content{
  display: flex;
}
.v-card-item__content input {
  width: 30px;
    height: 55px
}
.uandl .v-list-item__content{
    display: block !important;
    border-radius:15px; 
    }
.uandl2 .v-card-item__content{
display: block;}
</style>