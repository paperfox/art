<script setup>
import { inject, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  activeElement: {
    type: String,
    default: null,
  },
});

const isModalVisible = inject('isModalVisible');
const modalImage = inject('modalImage');
const closeModal = inject('closeModal');

const modal = ref(null);

const closeModalWithFocus = async () => {
  closeModal();

  const modalFocus = document.getElementById(props.activeElement);
  if (modalFocus) {
    modalFocus.focus();
  }

  props.activeElement = null;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isModalVisible.value) {
    closeModalWithFocus();
  }
};

onClickOutside(modal, () => {
  closeModalWithFocus();
});

watch(
  () => props.activeElement,
  (newVal) => {
    console.log('activeElement updated in Modal:', newVal);
    props.activeElement = newVal;
  },
);
</script>

<template>
  <div :class="`${isModalVisible ? 'modal is-visible' : 'modal'}`" id="art-modal" v-show="isModalVisible">
    <div class="modal-dialog" ref="modal" tabindex="-1" id="view-modal">
      <header class="modal-header">
        <h2 class="modal-title">{{ modalImage?.title }}</h2>
        <button class="close-modal" aria-label="close modal" @click="closeModalWithFocus">×</button>
      </header>
      <section class="modal-content">
        <img :src="`./art/${modalImage?.link}`" :alt="modalImage?.desc" />
        <div>
          <p>
            {{ modalImage?.date }} &nbsp; | &nbsp;
            {{ modalImage?.media.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(', ') }}
          </p>
          <!-- <button
            aria-label="next button"
            @click="gotoNext"
            style="margin: 0 auto; display: block; font-size: 2.4rem; color: var(--link)"
          >
            See next art piece ({{ artPieces[currentIndex]?.title || 'First Art Piece' }})
          </button> -->
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background: rgba(var(--black), 0.8);
  cursor: pointer;
  display: none;
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
  }
}

.modal.is-visible {
  display: flex;
}

.modal-dialog {
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

  .modal-title {
    margin-inline: auto;
    padding-left: 5.6rem; /* accomodates the close button */
  }

  .close-modal {
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
}
</style>
