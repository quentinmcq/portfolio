<template>
  <header class="header">
    <h1 class="header__full-name">
      {{ $t('common.first-name') }}
      <span class="header__name">{{ $t('common.name') }}</span>
    </h1>

    <vue-writer
      class="header__typed"
      :array="[$t('header.web-developer'), $t('header.technologies'), $t('header.good-visit')]"
      :typeSpeed="80"
      :erase-speed="80"
      :intervals="100"
      :delay="1300"
    />
  </header>
</template>

<style scoped lang="scss" src="./header.scss" />
