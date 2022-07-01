<template>
    <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/refunds">Refunds</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/policy">Policy</router-link>
            </li>
        </ul>
        <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
</template>

<style scoped>
footer {
    background-color: white;
    color:black;
}
</style>