<script setup>
import variable from '@/common/variable';

</script>


<template>
    <div class="footer">
        <div class="first-floor">
            <div class="first-room">
                <h1 class="web-name">{{ variable.webName }}</h1>
                <p class="second-main-color">All Product</p>
            </div>

            <div class="second-room"></div>

            <div class="third-room"></div>
        </div>
        <div class="second-floor"></div>

    </div>
</template>

<style lang="scss">
.footer {
    min-height: 60vh;
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: start; 
    padding: 6rem 19rem 0 19rem;
    color: var(--gray);
    background-color: #45595b;

    .first-floor {
        .first-room {
            .web-name {
                color: var(--firstMainColor);
            }   
        }
    }

    .second-main-color {
        color: var(--secondMainColor);
    }
}

</style>