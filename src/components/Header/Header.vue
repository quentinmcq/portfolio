<template>
  <header class="header">
    <h1 class="header__full-name">
      {{ $t('common.firstname') }}
      <span class="header__name">{{ $t('common.name') }}</span>
    </h1>

    <VueWriter
      class="header__typed"
      :array="[
        $t('header.developer'),
        $t('header.visit')
      ]"
      :typeSpeed="80"
      :erase-speed="80"
      :intervals="100"
      :delay="1300"
    />
  </header>
</template>

<style lang="scss" src="./header.scss" scoped />
