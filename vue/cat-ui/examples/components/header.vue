<template>
<div>
    <cat-header fixed title="固定在头部"></cat-header>
    <div class="content">
        <cat-header title="返回带icon很长很长很长很长很长很长很长很长很长">
            <router-link to="/" slot="left">
            <cat-button icon="circle-left" type="text">返回</cat-button>
            </router-link>
            <cat-button type="text" icon="more" slot="right">更多</cat-button>
        </cat-header>
    </div>
</div>
</template>
<style scoped>
.content{
    margin-top:40px;
}
</style>