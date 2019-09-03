<template>
<div>
    <cat-header fixed title="固定在头部"></cat-header>
    <div class="content">
        <cat-header backIcon backText="返回" title="返回带icon很长很长很长很长很长很长很长很长很长">
            <cat-button type="text" icon="more" slot="right">更多</cat-button>
        </cat-header>
        <cat-header class="changebg" title="双方交换算法框架和烧烤聚会">
            <cat-button type="text" icon="music" slot="right"></cat-button>
        </cat-header>
    </div>
</div>
</template>
<style scoped lang="less">
.content{
    margin-top:40px;
    .changebg{
        background: red;
        color: #000;
    }
}
</style>