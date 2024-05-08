<template>
          <div class="space-on-top"></div>

  <v-container>
  <FullCalendar :options="calendarOptions" ></FullCalendar>
</v-container>
<rightNav></rightNav>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import ListPlugin from '@fullcalendar/list'
import { mapGetters, mapMutations } from 'vuex'
import rightNav from '../components/right-nav.vue'

import { ref } from 'vue'

const id = ref(10)

export default {
  components: {
    FullCalendar ,// make the <FullCalendar> tag available
      rightNav
  },
  
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin,timeGridPlugin,ListPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        navLinks:true,
        selectable:true,
        events:this.$store.state.events,
        headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      eventsSet:
        // console.log(this.$store.state.events)
        this.handleEvents,
      select:(arg)=>{
        id.value = id.value +1
        // console.log(this.$store.state.events)
        const cal = arg.view.calendar
        var title = prompt('Event Title:');
        cal.unselect()
        cal.addEvent({
          id:`${(this.$store.state.events.length)+1}`,
          title : `${title}`,
          start : arg.start,
          end : arg.end,
          allDay : true

        })
        this.$store.commit("ADD_EVENT",{
          id:`${(this.$store.state.events.length)+1}`,
          title:`${title}`,
          date:arg.start,
          end:arg.end,
          allDay : true
        })
        localStorage.setItem("tasks",JSON.stringify(this.events))


      },
      
      // eventClick:(arg) =>{
        
      //   if (confirm('Are you sure you want to delete this event?')) {
      //     // console.log(arg.event.id)

      //     // arg.event.remove()
      //   }
      // },
      
      },
    }
    
  },
  methods: {
    handleDateClick: function(arg) {
      // console.log(arg)
      // this.$store.commit("ADD_EVENT",{
      //   title:'pla',
      //   start:arg.start,
      //   end:arg.end,
      //   allDay: arg.allDay

      // })
    },
    handleEvents(eventt) {

      this.events = eventt


   
    
    },
  },
  computed:{
...mapGetters(["EVENTS"]),
...mapMutations(["ADD_EVENT"]),
  }
}
</script>

<style>
.space-on-top{
  display: none;
}
@media (max-width: 1030px) {
  .space-on-top{
  display: block;
  height: 70px;
}

}
</style>