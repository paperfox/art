<script setup></script>

<template>
  <!-- this should use v-show and should take in the instance of the image that was clicked -->
  <div class="modal" id="art-modal">
    <div class="modal-dialog">
      <header class="modal-header">
        <h2 class="modal-title">Modal Title</h2>
        <button class="close-modal" aria-label="close modal" data-close="">
          ×
        </button>
      </header>
      <section class="modal-content">
        <p>Modal content</p>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
