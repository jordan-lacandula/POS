<template>
    <aside>
        <h1 v-if="title !== undefined">{{title}}</h1>
        <ul class="list-unstyled ps-0">
            <li class="mb-1">
                <sidebar-button title="Overview"></sidebar-button>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Store Manager
                </button>
                <div class="collapse" id="dashboard-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><a href="#" class="link-dark rounded">Overview</a></li>
                        <li><a href="#" class="link-dark rounded">Orders</a></li>
                        <li><a href="#" class="link-dark rounded">Shipping</a></li>
                        <li><a href="#" class="link-dark rounded">Returns</a></li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                Inventory Manager
                </button>
                <div class="collapse" id="product-collapse" style="">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Overview</a></li>
                    <li><a href="#" class="link-dark rounded">Updates</a></li>
                    <li><a href="#" class="link-dark rounded">Reports</a></li>
                </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                Supply Chain Manager
                </button>
                <div class="collapse" id="orders-collapse" style="">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">Overview</a></li>
                    <li><a href="#" class="link-dark rounded">Supplier</a></li>
                    <li><a href="#" class="link-dark rounded">Logistics</a></li>
                    <li><a href="#" class="link-dark rounded">Warehouse Management</a></li>
                </ul>
                </div>
            </li>
            <li class="border-top my-3"></li>
            <li class="mb-1">
                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                Account
                </button>
                <div class="collapse" id="account-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded">New...</a></li>
                    <li><a href="#" class="link-dark rounded">Profile</a></li>
                    <li><a href="#" class="link-dark rounded">Settings</a></li>
                    <li><a href="#" class="link-dark rounded">Sign out</a></li>
                </ul>
                </div>
            </li>
        </ul>
    </aside>
</template>

<script>
    import sidebarButton from './sidebarButton'
    export default {
        name: "sidebar",
        components: {
            sidebarButton
        },
        props: {
            title: String,
            menu: Array
        }
    }
</script>

<style scoped>
    aside {
        width: 300px;
        background-color: white;
        padding: 15px;
    }
    h1 {
        margin: 0px;
    }
</style>