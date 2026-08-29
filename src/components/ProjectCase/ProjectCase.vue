<template>
  <article
    :id="entry ? `case-${entry.slug}` : undefined"
    class="case"
    :class="{ 'case--compact': !entry }"
    data-reveal
  >
    <div class="case__text">
      <div class="case__meta">
        <span class="case__year">{{ item.year }}</span>
        <span class="case__kind" :class="`case__kind--${item.kind}`">
          {{ $t(`project.kind-${item.kind}`) }}
        </span>
        <span v-if="item.status === 'wip'" class="case__kind case__kind--wip">
          {{ $t('project.status-wip') }}
        </span>
      </div>

      <h3 class="case__title">{{ item.title }}<span class="case__stop">.</span></h3>

      <p class="case__lede">{{ entry ? $t(`project.cases.${entry.slug}.lede`) : item.subtitle }}</p>

      <ul v-if="item.chips?.length" class="case__chips">
        <li v-for="chip in item.chips" :key="chip">
          <SkillChip :label="chip" />
        </li>
      </ul>

      <template v-if="entry">
        <div class="case__body">
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </div>

        <dl class="case__facts">
          <div v-for="fact in facts" :key="fact.label" class="case__fact">
            <dt>{{ fact.label }}</dt>
            <dd>{{ fact.value }}</dd>
          </div>
        </dl>
      </template>

      <div v-if="entry?.site || item.link" class="case__links">
        <a
          v-if="entry?.site"
          class="case__link"
          :href="entry.site"
          :aria-label="`${$t('project.case-link-site')} — ${item.title}`"
          target="_blank"
          rel="noopener"
        >
          {{ $t('project.case-link-site') }}
          <ArrowIcon :size="16" />
        </a>
        <a
          v-if="item.link"
          class="case__link"
          :href="item.link"
          :aria-label="`${$t('project.case-link-code')} — ${item.title}`"
          target="_blank"
          rel="noopener"
        >
          {{ $t('project.case-link-code') }}
          <ArrowIcon :size="16" />
        </a>
      </div>
    </div>

    <figure
      v-if="entry"
      class="case__figure"
      :class="`case__figure--${entry.figure.kind}`"
      data-reveal
      style="--reveal-delay: 120ms"
    >
      <figcaption class="case__figure-head">
        <span class="case__file">
          {{
            entry.figure.kind === 'code'
              ? entry.figure.file
              : $t(`project.cases.${entry.slug}.figure-title`)
          }}
        </span>
        <span class="case__file-meta">{{ $t(`project.cases.${entry.slug}.figure-meta`) }}</span>
      </figcaption>

      <pre
        v-if="entry.figure.kind === 'code'"
        class="case__code"
        role="region"
        :aria-label="entry.figure.file"
        tabindex="0"
      ><code><span
        v-for="(line, index) in lines"
        :key="index"
        class="case__line"
      ><span v-for="(token, position) in line" :key="position" :class="`tk-${token.type}`">{{ token.text }}</span></span></code></pre>

      <div v-else-if="entry.figure.kind === 'image'" class="case__device">
        <img
          :src="entry.figure.src"
          :width="entry.figure.width"
          :height="entry.figure.height"
          :alt="$t(`project.cases.${entry.slug}.figure-alt`)"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div
        v-else
        class="case__board"
        role="img"
        :aria-label="$t(`project.cases.${entry.slug}.figure-alt`)"
        :style="{ '--cols': entry.figure.rows[0].length }"
      >
        <span
          v-for="(cell, index) in cells"
          :key="index"
          class="case__cell"
          :class="`case__cell--${cell}`"
        />
      </div>
    </figure>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ArrowIcon from '@/components/ArrowIcon/ArrowIcon.vue'
import SkillChip from '@/components/SkillChip/SkillChip.vue'
import { CASES } from '@/data/cases'
import type { Project } from '@/types/Project'
import { highlight } from '@/utils/highlight'

interface Fact {
  label: string
  value: string
}

const CELL_KINDS: Record<string, string> = {
  '#': 'wall',
  '*': 'flame',
  '.': 'floor',
  B: 'bomb',
  E: 'bot',
  P: 'player',
  x: 'block'
}

const { item } = defineProps<{ item: Project }>()

const { tm } = useI18n()

const entry = CASES.find((candidate) => candidate.slug === item.slug)

function caseList<T>(field: 'facts' | 'paragraphs'): T[] {
  return entry ? (tm(`project.cases.${entry.slug}.${field}`) as T[]) : []
}

const paragraphs = computed(() => caseList<string>('paragraphs'))
const facts = computed(() => caseList<Fact>('facts'))

const lines = entry?.figure.kind === 'code' ? highlight(entry.figure.lang, entry.figure.source) : []

const cells =
  entry?.figure.kind === 'board'
    ? entry.figure.rows.flatMap((row) => [...row].map((char) => CELL_KINDS[char] ?? 'floor'))
    : []
</script>

<style lang="scss" src="./project-case.scss" scoped />
