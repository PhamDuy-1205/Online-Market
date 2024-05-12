<template>
    <div>
        <headerForm />
    </div>
    <div>
        <slot />
    </div>
    <div>
        <footerForm />
    </div>
</template>


<style lang="scss">
.header-layout{
    width: 100%;
}

.body-layout{
    width: 100%;
    height: fit-content;
    // padding: 0px 3rem;
    background-color: #F5F5F5;
}
</style>