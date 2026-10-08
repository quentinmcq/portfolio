<template>
  <section id="skill" class="section skill">
    <div class="container spread">
      <CategoryTitle class="spread__head" section="skill" />

      <div class="spread__body">
        <dl class="skill-sheet">
          <div
            v-for="(row, index) in skills"
            :key="row.label"
            class="skill-sheet__row"
            data-reveal
            :style="{ '--reveal-delay': `${index * 80}ms` }"
          >
            <dt class="skill-sheet__label">{{ row.label }}</dt>
            <dd class="skill-sheet__tools">
              <ToolList :labels="row.content" size="lg" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Skill } from '@/types/Skill'

import CategoryTitle from '@/components/CategoryTitle/CategoryTitle.vue'
import ToolList from '@/components/ToolList/ToolList.vue'
import { useMessageList } from '@/composables/message-list'

const skills = useMessageList<Skill>('skill.list')
</script>

<style lang="scss" src="./skill-section.scss" scoped />
