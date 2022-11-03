<template>
  <v-toolbar :class="{ navbar__transition: visible }" class="navbar" color="#273142" elevation="0">
    <v-toolbar-title>
      <span
        v-for="item in fullName"
        :key="item.firstLetter"
        class="navbar__full-name"
        @click="scrollToTop"
      >
        <span class="navbar__first-letter">{{ item.firstLetter }}</span>
        <span>{{ item.content }}</span>
      </span>
    </v-toolbar-title>

    <LocaleSwitcher />

    <v-spacer />

    <v-app-bar-nav-icon class="navbar__nav-icon" @click="toggleMenu" />
  </v-toolbar>

  <v-navigation-drawer
    v-model="drawer"
    :style="{ width: menuWidth }"
    color="#333333"
    location="right"
    temporary
  >
    <v-icon class="cross-icon" color="white" icon="mdi-close" size="50" @click="toggleMenu" />

    <ul class="navbar__link-list">
      <li v-for="(item, index) in menu" :key="index">
        <a :href="item.link" class="navbar__link" @click="toggleMenu">
          {{ $t(`menu[${index}].title`) }}
        </a>
      </li>
    </ul>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useScroll } from '@/composables/scroll';
import { useResponsive } from '@/composables/responsive';
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher.vue';
import menu from '@/data/fr/menu';

const { visible, scrollToTop } = useScroll();
const { menuWidth } = useResponsive();

const fullName = [
  { firstLetter: 'Q', content: 'uentin' },
  { firstLetter: 'M', content: 'acq' }
];

const drawer = ref(false);

function toggleMenu() {
  drawer.value = !drawer.value;
}
</script>

<style lang="scss" scoped src="./navbar.scss" />
