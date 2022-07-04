<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">POS</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/finance">Finance</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/refunds">Refunds</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/policy">Policy</router-link>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li> -->
                <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li> -->
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    
    export default {
        name: "navbar",
        data: function() {
            return {
                activeNav: "home"
            }
        },
        computed: {
            username() {
                return this.$route.params.username;
            }
        }
    }
</script>

<style scoped>
nav {
    background-color: #0066bf;
}

.navbar-brand, a.nav-link {
    color: white;
}
.navbar-brand:focus, a.nav-link:focus, a.nav-link.active {
    color: black;
}
</style>