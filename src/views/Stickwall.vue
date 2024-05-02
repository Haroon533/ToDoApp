<template>
  <v-container>
    <v-row>
      <v-tooltip text="Tap to Edit or Delete" >
        <template v-slot:activator="{ props }">
        <v-card
  elevation="6"
  v-for="item in Stickwall" :key="item.id"
  :color="item.color"
  style="width: 18rem;height: 18rem;white-space: pre-wrap;"
  class="mr-2 ml-2 mb-3"
  @click="overlaycard(item.id)"
  v-bind="props"
>
<v-overlay
          v-model="item.overlay"
          contained
          class="align-center justify-center"
        >
          <v-avatar @click="deleteStick(item.id)"><v-icon size="x-large">mdi mdi-delete-outline</v-icon></v-avatar ><v-avatar  @click="editStick(item.id)"><v-icon size="x-large">mdi mdi-note-edit-outline</v-icon></v-avatar>
        </v-overlay>
<v-card-title>{{ item.title }}</v-card-title>
<v-card-text>{{ item.text }}</v-card-text>
</v-card>
</template>
</v-tooltip>
    <v-card
class="mr-2 ml-2"
color="#ddd"
style="width: 18rem;height: 18rem;display: flex;align-items: center;"
@click.stop="openDialog(),empt()"
>
    <v-card-text style="display: flex;">
    <v-img
    src="../assets//plus.png"
    height="100"
    width="100"
    
    ></v-img>
</v-card-text>
</v-card>
<v-dialog v-model="dialog" width="500">
  <template v-slot:default="{ isActive }">
    <v-card title="Add New Stick Wall">
      <v-divider></v-divider>
      <v-card-text>
        <v-text-field  label="Title" clearable  v-model="TitleStickwall"  variant="outlined"></v-text-field>

        <v-textarea  clearable :rules="rules" label="Description" v-model="DescStickwall" variant="outlined"></v-textarea>
      </v-card-text>

      <v-card-actions >
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
        <v-btn   @click.prevent="savestick(),isActive.value = false" style="background-color: #ffd43a;" >
  Save changes
</v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
    </v-row>
    <notfication></notfication>
  </v-container>
  <rightNav></rightNav>
</template>

<script>
    import store from '@/store/index.js'
    import notfication from '../components/notfication.vue'
    import rightNav from '../components/right-nav.vue'



export default {
  components:{notfication,rightNav},

data:()=>({
    Stickwall:store.state.Stickwall,
    TitleStickwall:"",
    DescStickwall:"",
    dialog:false,
    IsitEditCard:false,
    PassIdOfCard:"",
    rules:[v => (v || '' ).length <= 200 || 'Description must be 200 characters or less'],
}),
methods:{
    
    savestick(){
        

        let n=  this.DescStickwall.replace("/n",'&#13;&#10;')
        
        if(this.IsitEditCard){

            let e = this.Stickwall.filter(ev=>ev.id==this.PassIdOfCard)[0]
         e.title =this.TitleStickwall 
         e.text = this.DescStickwall 
         localStorage.setItem("Stickwall",JSON.stringify(this.Stickwall))

         store.commit("ADD_Notfication",{
           display:true,
            text:"StickWall was successfully updated",
            color:"success"

          })
 

        }else{
            store.commit("ADD_Stickwall",{
            title:this.TitleStickwall,
            id:(store.state.Stickwall.length)+1,
            text:n,
            color:`${"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}`,
        })
        localStorage.setItem("Stickwall",JSON.stringify(this.Stickwall))

        store.commit("ADD_Notfication",{
           display:true,
            text:"StickWall was successfully added",
            color:"success"

          })
        }
        console.log(this.Stickwall)
        this.TitleStickwall=""
        this.DescStickwall=""

            console.log("false")
            console.log(this.IsitEditCard)
    },
    overlaycard(id){
        let card = this.Stickwall.filter(ev=>ev.id == id)[0]
        this.IsitEditCard = true
        this.PassIdOfCard = id
        try {
            card.overlay = !card.overlay
} catch (err) {
}

console.log(this.PassIdOfCard)
    },
    deleteStick(id){
        // this.Stickwall= this.Stickwall.filter(ev=>ev.id !== id)
        const Index = this.Stickwall.findIndex(
                res => res.id === id
            );

            this.Stickwall.splice(Index, 1);
            localStorage.setItem("Stickwall",JSON.stringify(this.Stickwall))

            store.commit("ADD_Notfication",{
           display:true,
            text:"StickWall was successfully Deleted",
            color:"error"

          })        
    },
    editStick(id){
        let e = this.Stickwall.filter(ev=>ev.id==id)[0]
        this.TitleStickwall = e.title
        this.DescStickwall = e.text
        
        this.openDialog()
    },
    openDialog() {
      this.dialog = true
      this.IsitEditCard=false
      console.log(this.IsitEditCard)
    },
    empt(){
        this.TitleStickwall=""
            this.DescStickwall=""

    }
}
}
</script>

<style>

</style>