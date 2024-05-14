import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return{
        // events: [
        //     { title: ' event 1',subtitle:'pla' ,date: '2024-04-18',duration: '02:00' ,color: '#ff9f89',active:false,id:1 },
        //     { title: 'event 2',subtitle:'pla2' , date: '2024-04-18',duration: '02:00' ,active:false,id:2 }
        //   ],
         events : JSON.parse(localStorage.getItem("tasks")) || [],

          items: [
            { title: 'Today', icon: 'mdi-format-list-bulleted',to:'/ToDoApp/Today',id:1 },
            { title: 'Calendar', icon: 'mdi mdi-calendar',to:'/ToDoApp/Calendar',id:2},
            // { title: 'Stick Wall', icon: 'mdi-sticker-outline',to:'/Stickwall' ,id:3 ,},
          ],
          
        // items2: [
        //   { title: 'Parsonal', icon: 'mdi mdi-square',color:"#761479",id:1 },
        //   { title: 'Work', icon: 'mdi mdi-square' ,id:2,color:"#6dd6e9"},
        // ],
        items2 : JSON.parse(localStorage.getItem("Lists")) || [
          { title: 'Parsonal', icon: 'mdi mdi-square',color:"#761479",id:1 },
          { title: 'Work', icon: 'mdi mdi-square' ,id:2,color:"#6dd6e9"},
        ],

        // Stickwall:[
        //   {id:1,title:'Collge',text:'-study to the exam',color:'#6dd6e9', overlay: false,},
        //   {id:2,title:'School',text:'In publishing and graphic design,\n Lorem ipsum is ahe text influencing the design.',color:'purple-darken-2',overlay: false, },
        //   {id:3,title:'Work',text:'-study to the exam',color:'#ff9f89',overlay: false, },
        //   // 426 ما بتسع الكارد اكتر من حروف
        // ],
        Stickwall : JSON.parse(localStorage.getItem("Stickwall")) || [],

        notfication:{
          display:false,
          text:"pla",
          timeout:2000,
          class:'success',
        },
        username:JSON.parse(localStorage.getItem("username")) || "Person",
        drawer:false,
      }
    },
    getters:{
        EVENTS : state =>state.events,
        Items : state =>state.items,
        StickWall: state => state.Stickwall,
        Notification : state => state.notfication
    },
    mutations: {
      ADD_EVENT: (state , event) =>{
        state.events.push(event)
      },
      ADD_list:(state , list) =>{
        state.items2.push(list)
      },
      ADD_Stickwall:(state,stick)=>{
        state.Stickwall.push(stick)
      },
      ADD_Notfication:(state , {display , text , color})=>{
        state.notfication.class = color
        state.notfication.display = display
        state.notfication.text = text
      },
    
    },
    actions: {
       Login({commit},payload){
        return new Promise ((resolve,reject) =>{
          axios.post('https://reqres.in/api/login',payload)
          .then(({data , status})=>{
            if(status === 200){
              let token = data.token
              console.log(token)
              console.log("true")

              resolve(true)
            }
          }).catch(er =>{
              reject(er)
              console.log(er.response.data.error)
          })
        })
       },
       register({commit},p){
        return new Promise((resolve , reject) =>{
          axios.post('https://reqres.in/api/register',p)
          .then(({data,status}) =>{
          if(status ===200){
              resolve (true);
              
            }
          }).catch(error =>{
            reject(error)
          })
        })
      },
    }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
export default store
app.use(store)