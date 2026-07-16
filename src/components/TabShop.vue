<script setup></script>

<template>
  <div class="text-content">
    <h1>Shop</h1>
    <p>For stickers, prints, and more, check out my shop!</p>
    <div class="shop-banner">
      <hr />
      <a href="https://paperfoxmakesart.etsy.com" target="_blank" rel="noopener noreferrer" class="btn-outline"
        >VISIT ETSY SHOP</a
      >
      <hr />
    </div>
    <img src="/shop-ad.jpg" alt="Image of stickers, greeting cards, and prints on a desk." />
  </div>
</template>

<style lang="css" scoped>
.btn-outline {
  width: fit-content;
  display: inline-block;
  white-space: nowrap;
}

.shop-banner {
  display: flex;
  margin-bottom: var(--sm-spacing);

  @media (max-width: 768px) {
    hr {
      display: none;
    }
    .btn-outline {
      width: 100%;
      text-align: center;
    }
  }
}

@media (min-width: 1151px) {
  #etsy-iframe {
    width: 102%;
    margin-inline: -1%;
  }
}
</style>
