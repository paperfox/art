<script setup>
import SocialLinks from './SocialLinks.vue';
</script>

<template>
  <div class="text-content">
    <h3>Contact</h3>
    <div>
      <div>
        <p>
          You can find me on the web at these places, or drop me an email at
          <a href="mailto:art.paperfox+webcontact@gmail.com">art.paperfox@gmail.com</a> if you have specific questions.
        </p>
        <SocialLinks :showSocialTitles="true" />
      </div>
      <div>
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" class="btn-submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: var(--xs-spacing);
  margin: var(--base-spacing) auto;
  max-width: 400px;
}
</style>
