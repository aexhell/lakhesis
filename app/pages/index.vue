<template>
   <div class="page-resolution relative flex xl:pl-0 lg:pl-8 md:pl-24 pl-0 flex-col-reverse py-24 overflow-y-auto min-h-full" data-scroller>
      <div v-for="group in grouped" :key="group.year" @mouseenter="hovering = group.year" @mouseleave="hovering = 0">
         <div class="flex gap-4 items-center">
            <h3 class="font-sans font-medium text-sm uppercase my-0 tracking-wider flex items-center">
               <div :class="{ 'opacity-100 w-2 mr-2': hovering === group.year }" class="transition-all w-0 h-2 mr-0 opacity-0 bg-main rounded-full" />
               <span v-text="group.year" />
            </h3>
            <div class="w-full h-px bg-main" />
         </div>

         <nuxt-link
            v-for="(proj, i) in group.items"
            :key="proj.path"
            :to="proj.path"
            class="no-underline block leading-tight font-display text-[8cqh] md:text-[14cqh] 2xl:text-[14cqh] xl:text-[7cqw] lg:text-[12cqh] relative font-medium uppercase m-0"
         >
            {{ proj.title }}
         </nuxt-link>
      </div>
   </div>
</template>

<script setup>
import { defaultHero } from '~/composables/useHeroInfo'

const hovering = ref(0);

definePageMeta({ title: 'Home', verticalTitle: 'Aexhell' });

const { data: projects } = await useAsyncData('project-list', () =>
   queryCollection('content').where('path', 'like', '/projects/%').all()
)

const yearOf = (v) => {
  const n = Number(v)
  return Number.isFinite(n) ? String(Math.trunc(n)) : '—'
}

const grouped = computed(() => {
  const map = new Map()

  for (const proj of [...(projects.value ?? [])]
    .sort((a, b) => Number(b.meta.year) - Number(a.meta.year))) {   // global: nuevo → viejo
    const year = Math.trunc(Number(proj.meta.year))
    if (!map.has(year)) map.set(year, [])
    map.get(year).push(proj)
  }

  return [...map.entries()].map(([year, items]) => ({
    year,
    items: [...items].reverse()   // dentro del año: el más nuevo al final (abajo)
  }))
})

const hero = useHeroInfo()

watchEffect(() => { hero.value = defaultHero })
</script>