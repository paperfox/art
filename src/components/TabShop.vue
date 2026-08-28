<script setup>
const items = [
  // {
  //   title: 'Originals',
  // link: 'https://paperfoxmakesart.etsy.com?section_id=59103890',
  //   image: '/shop-ad.jpg',
  //   altText: 'Image of stickers, greeting cards, and prints on a desk.',
  // },
  {
    title: 'Art Prints',
    link: 'https://paperfoxmakesart.etsy.com?section_id=59103890',
    image: '/images/art-prints.webp',
    altText: 'Image of art prints of various watercolor paintings.',
  },
  {
    title: 'Block Prints',
    link: 'https://paperfoxmakesart.etsy.com?etsrc=sdt&section_id=59337743',
    image: '/images/block-prints.webp',
    altText:
      'Image of a woodcut print of orange snapdragons, a woodcut print of a shiba inu, and a woodcut print of jackalopes.',
  },
  {
    title: 'Stickers',
    link: 'https://paperfoxmakesart.etsy.com?etsrc=sdt&section_id=55198926',
    image: '/images/stickers.webp',
    altText: 'Image of individual animal stickers and a canidae sticker pack.',
  },
  // {
  //   title: 'Bookmarks',
  //   link: 'https://paperfoxmakesart.etsy.com',
  //   image: '/images/stickers.jpeg',
  //   altText: 'Image of individual animal stickers and a canidae sticker pack.',
  // },
  // {
  //   title: 'Greeting Cards',
  // link: 'https://paperfoxmakesart.etsy.com?section_id=59103890',
  //   image: '/images/stickers.jpeg',
  //   altText: 'Image of individual animal stickers and a canidae sticker pack.',
  // },
];
</script>

<template>
  <div class="text-content">
    <h1>Shop</h1>
    <p class="bottom-margin">
      For stickers, prints, and more, check out
      <a href="https://paperfoxmakesart.etsy.com" target="_blank">my Etsy shop!</a>
    </p>
    <div class="shop-container">
      <a class="shop-item" v-for="item in items" :key="item.title" :href="item.link" target="_blank">
        <div class="shop-image">
          <img :src="item.image" :alt="item.altText" />
        </div>
        <div class="shop-text">
          <h3>{{ item.title }}</h3>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.shop-container {
  display: flex;
  gap: var(--sm-spacing);

  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  .shop-item {
    border: 1px solid var(--link);
    min-width: 18rem;
    text-decoration: none;

    &:hover {
      border-color: var(--text-body);
    }

    .shop-image,
    .shop-text {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .shop-image {
      height: 20rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .shop-text {
      height: 100%;
      background-color: var(--secondary-bg);
      padding-bottom: var(--base-spacing);
    }
  }
}

.bottom-margin {
  margin-bottom: var(--sm-spacing);
}
</style>
