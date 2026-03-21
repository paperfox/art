<script setup>
import { inject, onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  activeElement: {
    type: String,
    default: null,
  },
  goToNext: {
    type: Function,
    default: null,
  },
  goToPrev: {
    type: Function,
    default: null,
  },
});

const isModalVisible = inject('isModalVisible');
const modalImage = inject('modalImage');
const closeModal = inject('closeModal');

const modal = ref(null);

const closeModalWithFocus = async () => {
  closeModal();
  console.log('activeElement in closeModalWithFocus:', props.activeElement);
  const modalFocus = document.getElementById(props.activeElement);
  if (modalFocus) {
    modalFocus.focus();
  }

  // props.activeElement = null;
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
    props.activeElement = newVal;
  },
);
</script>

<template>
  <dialog id="my-dialog" class="modal" ref="modal">
    <header class="modal-header">
      <h2 class="modal-title">{{ modalImage?.title }}</h2>
      <button
        class="close-modal"
        aria-label="close modal"
        @click="closeModalWithFocus"
        commandfor="my-dialog"
        command="close"
      >
        <svg viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9999 2.00004L1.99994 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M2.00006 2.00003L12.0001 12"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </header>
    <section class="modal-content">
      <img :src="`./art/${modalImage?.link}`" :alt="modalImage?.desc" />
      <div>
        <p>
          {{ modalImage?.date }} &nbsp; | &nbsp;
          {{ modalImage?.media.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(', ') }}
        </p>
        <div class="modal-nav">
          <button aria-label="previous button" @click="goToPrev">< Previous</button>
          <button aria-label="next button" @click="goToNext">Next ></button>
        </div>
      </div>
    </section>
  </dialog>
</template>

<style scoped>
dialog.modal {
  display: none;
  background: var(--main-bg);
  border: none;
  backdrop-filter: blur(3px);
  color: var(--text-body);
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 4rem);
  z-index: 1000;
  box-shadow: 0 0 4rem rgba(var(--black), 0.6);
}

dialog.modal[open] {
  display: flex;
}

.modal-nav {
  display: flex;
  justify-content: space-between;
  margin-top: var(--base-spacing);

  button {
    margin: 0;
  }
}

.modal-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2.4rem var(--base-spacing);

  * {
    margin: var(--base-spacing) auto;
  }

  img {
    max-width: 100%;
    max-height: 70vh;
  }

  div {
    width: 100%;
  }

  p {
    text-align: center;
  }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--xs-spacing);
  margin-top: 0.5rem;

  * {
    font-size: 2.5rem;
  }

  .modal-title {
    margin-inline: auto;
    padding-left: 5.6rem; /* accomodates the close button */
  }

  .close-modal {
    color: var(--link);
    float: right;
    background: none;
    border: 0.1rem solid transparent;
    cursor: pointer;
    padding: calc(var(--base-spacing) * 1.5) var(--base-spacing) var(--base-spacing);

    svg {
      height: 2rem;
      width: 2rem;
    }

    &:hover,
    &:focus-visible {
      color: var(--text-body);
    }

    &:visited {
      color: var(--link);
    }
  }

  @media (max-width: 767.98px) {
    * {
      font-size: 2.1rem;
    }

    .modal-title {
      margin-inline: 0;
      padding-left: 0.8rem;
    }
  }
}
</style>
