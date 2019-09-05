<template>
  <div>
    <cat-header backIcon></cat-header>
    <cat-cell title="标题文字"></cat-cell>
    <cat-cell title="标题文字" value="说明文字"></cat-cell>

    <cat-cell title="标题文字" to="//github.com" is-link value="带链接">可点击的链接</cat-cell>

    <cat-cell title="标题文字" icon="ctrl" value="带 icon">带图标</cat-cell>

    <cat-cell title="标题文字">
      <span>icon 是图片</span>
      带自定义图标
      <img slot="icon" src="../assets/logo.png" alt width="24" height="24" />
    </cat-cell>

    <cat-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
      自定义内容
    </cat-cell>

    <cat-cell title="标题" label="描述信息" is-link>带备注信息</cat-cell>
    <cat-cell title="带icon" value="说明文字">
      <img slot="icon" src="../assets/logo.png" alt />
    </cat-cell>
  </div>
</template>