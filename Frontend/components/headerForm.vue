<script setup>
import commonVisual from '@/common/image';
import commonStyle from '@/common/css';
import variable from '@/common/variable';

</script>

<template>
    <div class="header" id="navbar">
        <div class="header-bar-background">
            <div class="first-floor">
                <div class="left">
                    <img :src="commonVisual.yellow_position_marker" alt="yellow_position_marker" class="icons">
                    <p class="content nav-bar-hover">123 Street, New York</p>
                    <img :src="commonVisual.yellow_email" alt="yellow_email" class="icons">
                    <p class="content nav-bar-hover">Email@Example.com</p>
                </div>
                
                <div class="right">
                    <p class="nav-bar-hover">Privacy Policy</p>
                    <p class="content">/</p>
                    <p class="nav-bar-hover">Terms of Use</p>
                    <p class="content">/</p>
                    <p class="nav-bar-hover">Sales and Refunds</p>
                </div>
            </div>
        </div>
        <div class="header-navbar">
            <p class="web-name nav-bar-hover">{{ variable.webName }}</p>
            <div class="navbar-menu">
                <p class="nav-items nav-bar-hover">Home</p>
                <p class="nav-items nav-bar-hover">Shop</p>
                <p class="nav-items nav-bar-hover">Shop Details</p>
            </div>
            <div :style="{ display: 'flex' }">
                <img :src="commonVisual.green_search" alt="Green Search" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_cart" alt="Green Cart" class="navbar-icons nav-bar-hover">
                <img :src="commonVisual.green_user_profile" alt="Green User Profile" class="navbar-icons nav-bar-hover">
            </div>
        </div>
    </div>
</template>


<style lang="scss">

.header {
    font-family: "Open Sans",sans-serif;
    height: 100%;
    width: 100vw;
    border: 1px solid blue;
    color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header-bar-background {
        display: flex;
        justify-content: center;
        width: 69.5vw;
        height: 3.25rem;
        border-radius: 120px 45px;
        background-color: var(--mainGreen);

        .first-floor {
            color: white;
            font-size: 0.875em;
            margin: 0 30px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            .left {
                display: flex;
                justify-content: center;
                align-items: center;
    
                .content {
                    margin-right: 10px;
                }
            }
    
            .right {
                display: flex;
                justify-content: center;
                align-items: center;
    
                .content {
                    margin: 5px;
                }
            }
        }
    }

    .header-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        height: 8.1rem;

        .web-name {
            font-size: 2.5rem;
            font-weight: 800;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            color: var(--mainGreen);
        }

        .navbar-menu {
            display: flex;
            justify-content: space-between;

            .nav-items {
                margin: 0 15px;
                display: flex;
                align-items: end;
                font-size: 16px;
                font-weight: 600;
                color: var(--gray);
            }
        }

        .navbar-icons {
            margin-right: 1.5rem;
            width: 2rem;
            display: flex;
            align-items: center;
        }

    }
    
    .icons{
        width: 1rem;
        height: 1rem;
        margin: 0 5px;
    }

    .nav-bar-hover:hover {
        cursor: pointer;
        color: var(--mainYellow) !important;
        transition: .5s;
        transform: translateY(-0.25rem) !important;
    }

}

.header:hover {
    cursor: default;
}
</style>