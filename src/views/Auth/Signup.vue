<template>
    <v-container class=" fill-height">
        <v-layout class="align-center justify-center">
            <v-col cols="12" xs="12" sm="8" md="8">
                <v-card class="elevation-12">
                    <v-toolbar color="blue">
                        <v-toolbar-title>Sign Up</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert
                            v-model="Iserror"
                            type="error"
                            icon="$error"
                            class="mb-2"
                            >
                            please use this email :"eve.holt@reqres.in",<br>
                            and this password :"pistol",<br>
                            beacuse the fake api (reqres.in)
                            </v-alert>
                            <v-text-field
                            name="Name"
                            label="Name"
                            prepend-icon="mdi-account"
                            :rules="[rules.required]"
                            v-model="username"
                            >

                            </v-text-field>
                            <v-text-field
                            name="email"
                            label="Email"
                            v-model="email"
                            prepend-icon="mdi-email"
                            :rules="[rules.required,rules.email]"

                            >

                            </v-text-field>
                            
                            <v-text-field
                            name="password"
                            label="Password"
                            prepend-icon="mdi-lock"
                            type="password"
                            :rules="[rules.required]"
                            v-model="password"
                            >

                            </v-text-field>

                            
                            <v-text-field
                            name="password"
                            label="Confirm Password"
                            prepend-icon="mdi-lock"
                            :rules="[rules.required]"
                            type="password"
                            v-model="confirm_password"
                            :error="!valid()"
                            >
                         </v-text-field>
                        
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                         <v-card-actions>
                            <v-btn to="/" rounded="xl" color="indigo" variant="flat">Login</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn @click.prevent="register()" rounded="xl" color="success" variant="flat">Register<v-icon>mdi-arrow-up</v-icon></v-btn>
                         </v-card-actions>
                </v-card>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
import store from '@/store/index.js'

export default {
   
    data:() =>({
        confirm_password:'',
         password:'',
         username:"",
         email :'',
         Iserror:false,
        rules:{
            required:value=>!!value || "Required",
            email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
        }
       
    }),
    methods:{
         register(){
            if(this.valid()){
                this.$store.dispatch('register',{
                    email : this.email,
                    password : this.password


                }).then(({status}) =>{
                    this.$store.commit("ADD_Notfication",{
                        display:true,
                        text :"Your account has been created succufully",
                        color: "success"
                    });
                    store.state.username = this.username
                    localStorage.setItem("username",JSON.stringify(this.username))
                    sessionStorage.setItem("login",true)
                    this.$router.push('/ToDoApp/Today')
                }).catch(error =>{
                    this.Iserror = true
                    // this.Whaterror = error.response.data.error
                    // console.log(error.message)
                    // console.log(error.response.data.error)
                    // console.log(this.Whaterror)
                    alert(error.response.data.error)

                })
            }
        },
        valid(){
            return this.password=== this.confirm_password;
        }
    },
}
</script>