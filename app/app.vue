<template>
  <div class="p-8 w-full h-full box-border overflow-hidden">
    <div class="absolute w-8 h-full top-0 left-0 z-[10]">
      <Isotype class="w-5 h-5 absolute top-2 left-2" />
      <span class="text-xs uppercase absolute bottom-8 left-2 vertical-text"><b>2026</b> ©AXHL</span>
      <div class="cube-anim w-4 h-4 bg-main absolute bottom-32 left-2"></div>
    </div>
    <div id="LIENZO" class="z-[10] size-container w-full relative overflow-hidden grid-background h-full flex box-border border border-solid border-main">
      <VerticalTitle />
      <div class="relative flex ml-12 xl:ml-16 lg:ml-8 items-stretch w-full h-full min-h-0">
        <Transition name="hero" mode="out-in">
          <div :key="hero.title" class="lg:block content-end hidden xl:w-1/2 w-2/5 py-36 pl-12">
            <h2 class="text-lg font-semibold uppercase" v-text="hero.title" />
            <p :class="{ 'uppercase': hero.front_page }" class="lg:w-1/2 w-3/4 text-md" v-text="hero.description" />
            <div :class="{ 'opacity-0 select-none pointer-events-none': !hero.front_page  }" class="transition duration-350 pt-4 flex gap-3">
              <a href="https://github.com/aexhell" title="GitHub" target="_blank">
                <svg class="w-6 h-6" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75641 21.5758C3.85897 23.2879 3.85897 18.7223 1.5 18.1516M18.0128 25V20.5828C18.0571 20.0385 17.9811 19.4914 17.7899 18.9777C17.5988 18.4641 17.2968 17.9957 16.9041 17.6037C20.6077 17.2042 24.5 15.846 24.5 9.61392C24.4997 8.02032 23.8663 6.48785 22.7308 5.33366C23.2684 3.93945 23.2304 2.39838 22.6246 1.03058C22.6246 1.03058 21.2328 0.631091 18.0128 2.71986C15.3094 2.01084 12.4598 2.01084 9.75641 2.71986C6.53641 0.631091 5.14462 1.03058 5.14462 1.03058C4.5388 2.39838 4.50079 3.93945 5.03846 5.33366C3.89451 6.49641 3.26041 8.04274 3.26923 9.64816C3.26923 15.8346 7.16154 17.1928 10.8651 17.638C10.4771 18.026 10.1778 18.4888 9.98677 18.9961C9.79575 19.5035 9.71726 20.0441 9.75641 20.5828V25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>
          </div>
        </Transition>
        <NuxtPage class="box-border pr-12 overflow-x-hidden overflow-y-auto" />
      </div>
    </div>
    <img alt="Gradient background" aria-label="Gradient background" src="/gradient.svg" class="select-none pointer-events-none absolute top-0 left-0 w-full h-full object-cover">
    <div class="noise-bg absolute top-0 left-0 opacity-10 w-full h-full" />
  </div>
</template>

<script setup>
const route = useRoute()
const hero = useHeroInfo()

useHead({
  title: () => {
    const title = String(route.meta.title ?? '')
    return `${title ? title + ' ~ ' : ''}`
  }
})
</script>
