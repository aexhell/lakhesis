<script setup>
const route = useRoute()
const title = computed(() =>
  String(route.meta.verticalTitle ?? 'Aexhell')
)
const fontSize = 23

const shift = computed(() => {
  const textLength = title.value.length * fontSize * 0.65
  const overflow = textLength - 100
  return overflow > 0 ? overflow : 0
})
const animate = computed(() => title.value !== "Aexhell" && shift.value > 0)
</script>

<template>
  <Transition name="title" mode="out-in" :duration="350">
    <h1 :key="title" :class="{ mq: animate }" :style="{ '--shift': `${shift}cqh` }" class="lg:block hidden font-display uppercase font-normal relative vertical-title vertical-text select-none pointer-events-none">
      {{ title }}
    </h1>
  </Transition>
</template>

<style scoped>
.mq {
  white-space: nowrap;
  animation: cross 5s linear alternate infinite;
}

@keyframes cross {
  0%   { transform: translateY(0); }
  100% { transform: translateY(calc(var(--shift, 0cqh) * 0.5)); }
}

@media (prefers-reduced-motion: reduce) {
  .mq { animation: none; }
  .title-enter-active,
  .title-leave-active { transition: none; }
}
</style>