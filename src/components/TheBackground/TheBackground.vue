<template>
  <div class="background-container">
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />
  </div>
</template>

<style scoped lang="scss">
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background: #0f172a; // Fallback / Base
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite alternate;
}

.blob-1 {
  top: -10%;
  left: -10%;
  width: 50vw;
  height: 50vw;
  background: #38bdf8;
  animation-duration: 25s;
}

.blob-2 {
  bottom: -10%;
  right: -10%;
  width: 60vw;
  height: 60vw;
  background: #818cf8;
  animation-duration: 30s;
  animation-direction: alternate-reverse;
}

.blob-3 {
  top: 40%;
  left: 40%;
  width: 40vw;
  height: 40vw;
  background: #2dd4bf;
  opacity: 0.2;
  animation-duration: 20s;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>
