<template>
  <v-col class="grid-list-sm">
    <h3 class="skill-item__title" data-aos="zoom-in">
      {{ $t(`skill[${index}].label`) }}
    </h3>

    <skill-chip
      v-for="(label, key) in skill.content"
      :key="key"
      :label="label"
      :color="skill.color"
      class="skill-item__config"
      target="_blank"
      data-aos="zoom-in"
    />
  </v-col>
</template>

<script setup lang="ts">
import SkillChip from '@/components/SkillChip/SkillChip.vue';

interface Props {
  skill: object,
  index: number
}

defineProps<Props>();
</script>

<style lang="scss" src="./skill-item.scss" scoped />
