<script setup>
import commonIcons from '@/common/image';
import color from '@/common/css';


</script>

<template>
    <div class="header">
        <div class="header-bar-background" :style="{ backgroundColor: color.mainGreen }">
            <div class="first-floor">
                <div class="left">
                    <img :src="commonIcons.yellow_position_marker" alt="yellow_position_marker" class="icons">
                    <p class="content">123 Street, New York</p>
                    <img :src="commonIcons.yellow_email" alt="yellow_email" class="icons">
                    <p>Email@Example.com</p>
                </div>
                
                <div class="right">
                    <p>Privacy Policy</p>
                    <p class="content">/</p>
                    <p>Terms of Use</p>
                    <p class="content">/</p>
                    <p>Sales and Refunds</p>
                </div>

            </div>
            <div class="second-floor"></div>
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
    justify-content: center;
    
    .header-bar-background {
        display: flex;
        justify-content: center;
        width: 70%;
        height: 30%;
        border-radius: 120px 45px;
    }
    
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

    .icons{
        width: 1rem;
        height: 1rem;
        margin: 0 5px;
    }

    p:hover{
        cursor: pointer;
    }

}
</style>