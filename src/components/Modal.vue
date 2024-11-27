<script setup>
import { ref } from "vue";
const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};
</script>

<template>
  <!-- this should use v-show and should take in the instance of the image that was clicked -->
  <div class="modal is-visible" id="art-modal" v-show="modalVisible">
    <div class="modal-dialog">
      <header class="modal-header">
        <h2 class="modal-title">Modal Title</h2>
        <button
          class="close-modal"
          aria-label="close modal"
          data-close=""
          @click="closeModal"
        >
          ×
        </button>
      </header>
      <section class="modal-content">
        <p>Modal content</p>
      </section>
    </div>
  </div>
  <button @click="openModal">Open Modal</button>
</template>

<style scoped>
/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--base-spacing);
  background: rgba(var(--black), 0.8);
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: all 0.35s ease-in;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
}

.modal-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: var(--xs-spacing) 2.4rem var(--base-spacing);
  * {
    margin: var(--base-spacing) auto;
  }
  div:has(img) {
    max-width: 70rem;
  }

  img {
    max-width: 100%;
    max-height: 65vh;
    /* margin-inline: var(--xs-spacing); */
  }
}

.modal.is-visible {
  visibility: visible;
  opacity: 1;
}

.modal-dialog {
  position: relative;
  /* width: 100%;
  height: 100%; */
  max-width: 90%;
  max-height: 90%;
  border-radius: 0.4rem;
  background: var(--main-bg);
  overflow: auto;
  cursor: default;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--xs-spacing);
  /* background-color: var(--tertiary-bg); */

  .modal-title {
    margin-inline: auto;
    padding-left: 5.6rem; /* accomodates the close button */
  }
}

.modal-header .close-modal {
  color: var(--link);
  float: right;
  font-size: 4.2rem;
  background: none;
  border: 0.1rem solid transparent;
  cursor: pointer;
  padding: 0 var(--base-spacing);

  &:hover,
  &:focus-visible {
    color: var(--text-body);
  }
}

/* stop background scrolling  */
.no-scroll {
  overflow: hidden;
}
</style>
