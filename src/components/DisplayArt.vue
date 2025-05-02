<script setup>
import { ref } from 'vue';
import Filters from './Filters.vue';
import inProgress from '../data/sketchData';
import ArtLists from './ArtLists.vue';
import Footer from './Footer.vue';

let sketches = inProgress;

const tab = ref('art');
</script>

<template>
  <main class="main">
    <nav class="navbar">
      <div class="nav-brand">
        <a href="" target="_blank" rel="noreferrer" class="nav-logo">
          <picture>
            <source :srcset="`./logos/paperfoxlogo-semibold-update.svg`" media="(prefers-color-scheme: dark)" />
            <img
              src="./logos/paperfoxlogo-semibold-update.svg"
              alt="Paperfox Logo: A fox face in geometric lines with rounded corners"
              media="(prefers-color-scheme: light)"
            />
          </picture>
        </a>
        <div>
          <h1>Paperfox</h1>
          <h2>Art by Nathalie Garfinkle</h2>
        </div>
      </div>
      <div class="nav-tabs">
        <button @click="tab = 'art'" :class="`${tab === 'art' ? 'tab-control active' : 'tab-control'}`" id="tab-art">
          Work
        </button>
        <!-- <button
          @click="tab = 'sketch'"
          :class="`${tab === 'sketch' ? 'tab-control active' : 'tab-control'}`"
          id="tab-sketch"
        >
          Shop
        </button> -->
        <button
          @click="tab = 'events'"
          :class="`${tab === 'events' ? 'tab-control active' : 'tab-control'}`"
          id="tab-events"
        >
          Events
        </button>
        <button
          @click="tab = 'about'"
          :class="`${tab === 'about' ? 'tab-control active' : 'tab-control'}`"
          id="tab-about"
        >
          About
        </button>
        <button
          @click="tab = 'contact'"
          :class="`${tab === 'contact' ? 'tab-control active' : 'tab-control'}`"
          id="tab-contact"
        >
          Contact
        </button>
      </div>
    </nav>

    <div class="tab-content" id="artTab" v-show="tab === 'art'">
      <div class="artwork">
        <Filters />
      </div>
    </div>
    <div class="tab-content" id="sketchTab" v-show="tab === 'sketch'">
      <div class="artwork">
        <ArtLists :images="sketches" />
      </div>
    </div>
    <div class="tab-content" id="eventTab" v-show="tab === 'events'">
      <div class="text-content">
        <h3>Events</h3>
        <p>If you're in New England, drop by and say hi at some of the events I'm taking part in.</p>
        <a href="https://www.natickartassociation.org/2025-events" target="_blank" class="naa-link">
          <picture> <img :src="`./logos/NAA_Logo_Final_C2.png`" alt="Natick Art Association" /></picture>
          <span>Natick Art Association Events</span>
        </a>
        <ul>
          <li>
            <strong>Art in the Park</strong><br />

            June 8, 2025 10:00 am to 3:00 pm Shaw Park, South Natick, MA
          </li>
          <li>
            <strong>Natick Open Studios</strong><br />
            October 18/19, 2025 in Downtown Natick, MA
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'about'">
      <div class="text-content">
        <picture> <img :src="`./nathalie-naos.jpg`" alt="Photo of Nathalie at her booth at an art market" /></picture>
        <div>
          <h3>About</h3>
          <p>
            A lifetime creative, Nathalie sticks to painting the things that bring her joy. This leads her across the
            map of wildlife to fantasy creatures, figures to landscapes, and most definitely some pet portraits. Her
            illustrative, but varied, style draws inspiration from animation and the Japanese woodblock printing
            tradition, particularly the Shin Hanga movement. While she occasionally dabbles in other media, most of her
            work is in watercolor and ink. If she's not creating artwork or adding something new to her
            <a href="https://paperfox-tarot.netlify.app/" target="_blank">Tarot App</a>, you'll likely find her playing
            with her dog, out in her garden, or rebuilding parts of this site.
          </p>
          <p>
            Looking for a piece of art not listed here? Recently the build of older work was moved to an archive. If
            it's a piece of Nathalie's work that was posted online, it's almost guaranteed to be listed there.
            <br />
            <a href="https://paperfox.github.io/art-archive" target="_blank">Browse the Archives</a>
          </p>
        </div>
      </div>
    </div>
    <div class="tab-content" id="aboutTab" v-show="tab === 'contact'">
      <div class="text-content">
        <h3>Contact</h3>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" class="btn-submit">Send</button>
        </form>
        <p>
          You can find me on the web at these places, or drop me an email at
          <a href="mailto:art.paperfox+webcontact@gmail.com">art.paperfox@gmail.com</a> if you have specific questions.
        </p>
        <Footer :showSocialTitles="true" />
      </div>
    </div>
    <footer>
      <Footer />
    </footer>
  </main>
</template>

<style scoped>
footer {
  width: 100%;
  margin: var(--xs-spacing) auto;
  max-width: 400px;
}
.naa-link {
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: auto;
    margin-right: var(--xs-spacing);
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: var(--xs-spacing);
  margin: var(--base-spacing) auto;
  max-width: 400px;
}
</style>
