<template>
    <div class="screen">
        <div class="headerForm">
            <headerForm />
        </div>
        <div class="bodyForm">
            <slot />
        </div>
        <div class="footerForm">
            <footerForm />
        </div>
    </div>
</template>


<style lang="scss">
.screen{
    width: 100%;
    height: 100%;
    user-select: none;
}
.headerForm {
    height: 9.3rem;
    width: 100vw;
}

.bodyForm {
    width: 100%;
    // height: calc(100vh - 17vh - 17vh);
    // height: 100rem;
    border: 1px solid black;
}

.footerForm {
    width: 100%;
}
</style>