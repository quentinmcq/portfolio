<template>
  <v-col class="grid-list-sm">
    <h3 class="skill-item__title">
      {{ $t(`skill[${index}].label`) }}
    </h3>

    <v-chip
      class="skill-item__config"
      v-for="(technology, index) in skill.technologies"
      :color="skill.color"
      :key="index"
      :href="technology.link"
      target="_blank"
    >
      {{ technology.name }}
    </v-chip>
  </v-col>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
  },

  index: {
    type: Number,
    required: true
  }
});
</script>

<style lang="scss" src="./skill-item.scss" />
