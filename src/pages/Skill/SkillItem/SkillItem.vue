<template>
  <v-col class="grid-list-sm">
    <h3 class="skill-item__title" data-aos="zoom-in">
      {{ $t(`skill[${index}].label`) }}
    </h3>

    <v-chip
      class="skill-item__config"
      v-for="(content, key) in skill.content"
      :color="skill.color"
      :key="key"
      :href="content.link"
      target="_blank"
      data-aos="zoom-in"
    >
      {{ $t(`skill[${index}].content[${key}].name`) }}
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

<style lang="scss" src="./skill-item.scss" scoped />
