<template>
    <v-navigation-drawer  v-model="Sidedrawer"
      absolute
      :width="350"
     location="right" style="
    border-radius: 20px;background-color: #f4f4f4;border: none;padding: 20px;
">

  <h3>Task :</h3>
    <v-text-field
   variant="outlined" 
    label="Rename tesk"
    class="pt-2"
    ></v-text-field>

    <v-textarea
         variant="outlined" 
          name="input-7-4"
          label="Description"
        ></v-textarea>
       
        <v-menu>
      <template v-slot:activator="{ props }">
        <div><span class="pr-4">List</span>
          <v-btn
          v-bind="props"
          variant="plain"
        >
           slot
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
        </div>
       
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemss"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="flatpickrP pt-4">
      <span class="pr-4">Date</span>
      <input class="flatpickr" type='datetime-local'  placeholder="Select Date.." >
    </div>
    <div class="flatpickrP pt-4">
      <span class="pr-4">Time</span>
      <input class="flatpickr2" type='time-local'  placeholder="Select Time.." >

    </div>


    <template v-slot:append>
          <div class="pa-2"  style="display: flex;width: 100%;">
<v-btn  variant="plain" >
 Delete task
</v-btn>
<v-btn style="background-color: #ffd43a;" >
  Save changes
</v-btn>
          </div>
        </template>
    </v-navigation-drawer>


  
</template>

<script>
import store from '@/store/index.js'
export default {
    
data:() =>({
    Sidedrawer: store.state.Sidedrawer
})
}
</script>

<style>

</style>