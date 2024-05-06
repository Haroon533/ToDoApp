<template>
    <v-container class="fill-height">
        <v-layout class="align-center justify-center" >
            <v-col cols="12" xs="12" sm="8" md="8">
                <v-form>
                    <v-card class="elevation-12" >
                        <v-toolbar  dark color="blue">
                            <v-toolbar-title>
                                Login Form
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-alert
                        color="error"
                        v-model="error"
                        icon="mdi-close"
                        >  please use this email :"eve.holt@reqres.in",<br>
                            and this password :"pistol",<br>
                            beacuse the fake api (reqres.in)
</v-alert>
                    <v-card-text>
                        <v-text-field
                        name="Login"
                        prepend-icon="mdi-email"
                        label="Email"
                        type="text"
                        v-model="username"
                        >

                        </v-text-field>
                        <v-text-field
                        name="Password"
                        prepend-icon="mdi-lock"
                        label="Password"
                        type="text"
                        v-model="password"
                        >

                        </v-text-field>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-card-actions>
                        <v-btn to="/ToDoApp/Signup" rounded="xl" color="indigo" variant="flat">Sign up</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn @click.prevent="login()" rounded="xl" color="primary" variant="flat">
                            Login
                        <v-icon>mdi-arrow-right</v-icon>
                        </v-btn>
                        
                    </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'Login',
    data:()=> ({
        password:"",
        username:"",
        error:false 
    }),
    methods:{
        login(){
            this.$store.dispatch("Login",{
                username: this.username,
                password : this.password,
            }).then(success =>{
                this.$store.commit("ADD_Notfication",{
                        display:true,
                        text :"Your account has been Login succufully",
                        color: "success"
                    });

                this.$router.push('/ToDoApp/Today')

            }).catch(error =>{
                this.error = true;
                alert(error.response.data.error)
            })
        },
    }
}
</script>