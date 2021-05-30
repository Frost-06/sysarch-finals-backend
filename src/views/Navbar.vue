<template>
    <nav>
        <router-link to = "/homeUsers"><button class = "btn btn-primary" id = "home">Home</button></router-link>
        <span style="width:60px"></span>
       <router-link to = "/addCustomer"><button class = "btn btn-primary">Add Customer</button></router-link>      
        <span style="width:60px"></span>
       <router-link to = "/Borrow"><button class = "btn btn-primary">Borrow</button></router-link>      
        <span style="width:60px"></span>
        <dropdown class = "btn btn-primary" :items="services" />
        <span style="width:60px"></span>
       <router-link to = "/"><button class = "btn btn-primary" id="signout">Sign out</button></router-link>
        
        
    </nav>
    
</template>

<script>
import dropdown from '../views/Dropdown'
export default {
    name: 'navbar',
    components: {
        dropdown
    },
    data() {
        return {
            services: [
               {
                    title: 'Add Stock',
                    link: '/addStock'
               },
               {
                    title: 'View Stock',
                    link: '/viewStock'
               },{
                    title: 'Stock Flow',
                    link: '/stockflow'
               }
            ]
        }
    },
    methods: {
        // AddCustomer(){
        //     $router.push('/addCustomer')
        // }
    }
}
</script>

<style scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: #FFF;
    padding: 10px 60px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover{
    background-color: #444;
    border-bottom-color: #FF5858;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
}

#nav .menu-item a:last-child {
 float:right;
}
#signout
{
    float:left;
}

</style>