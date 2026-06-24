<script setup>
import { onMounted, ref } from 'vue';

const galleryFrame = ref(null);
const windowWidth = ref(window.innerWidth);

const galleryLayout = ref('3, 3, 0');

if (window.innerWidth < 768) {
  galleryLayout.value = '2, 6, 0';
} else if (window.innerWidth >= 768 && window.innerWidth <= 900) {
  galleryLayout.value = '3, 3, 0';
} else if (window.innerWidth >= 901 && window.innerWidth <= 1150) {
  galleryLayout.value = '4, 2, 0';
} else {
  galleryLayout.value = '5, 2, 0';
}

onMounted(() => {
  const iframe = galleryFrame.value;
  if (iframe) {
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <script type="text/javascript" src="https://www.etsy.com/assets/js/etsy_mini_shop.js"><\/script>
      <script type="text/javascript">
        new Etsy.Mini(5714221, 'gallery', ${galleryLayout.value}, 'https://www.etsy.com');
      <\/script>
    `);
    doc.close();
  }
});
</script>

<template>
  <div class="text-content">
    <h1>Shop</h1>
    <div class="owo">
      <hr />
      <a href="https://www.etsy.com/shop/PaperfoxMakesArt" target="_blank" rel="noopener noreferrer" class="btn-outline"
        >VISIT ETSY SHOP</a
      >
      <hr />
    </div>
    <iframe ref="galleryFrame" id="etsy-iframe"></iframe>
  </div>
</template>

<style lang="css" scoped>
#etsy-iframe {
  width: stretch;
  height: 60vh;
  border: none;
  /* margin-inline: -2%; */

  * {
    box-sizing: border-box;
    /* width: 10px; */
    margin-inline: auto !important;
  }
}

.btn-outline {
  width: fit-content;
  display: inline-block;
  white-space: nowrap;
}

.owo {
  display: flex;
  margin-bottom: var(--sm-spacing);
}

@media (min-width: 1151px) {
  #etsy-iframe {
    width: 102%;
    margin-inline: -1%;
  }
}
</style>
