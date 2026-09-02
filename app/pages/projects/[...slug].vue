<script setup lang="ts">
import { defaultHero } from '~/composables/useHeroInfo'

const route = useRoute()
const hero = useHeroInfo()

const { data: page, pending } = useLazyAsyncData(
  () => `page-${route.path}`,
  async () => {
    // await new Promise(r => setTimeout(r, 5000))  
    return queryCollection('content').path(route.path).first()
  },
  { watch: [route.path] }
)

// ? el seo sigue siendo lo peor que se me da...
useHead(() => ({
  title: page.value ? `${page.value.title} ~ ` : 'Not Found ~ '
}))

useSeoMeta({
  title: () => page.value ? `${page.value.title} ~ ` : 'Not Found ~ ',
  description: () => page.value?.meta?.summary ?? 'Project by Aexhell',

  // Open Graph
  ogTitle: () => page.value?.title ?? '',
  ogDescription: () => page.value?.meta?.summary ?? '',
  ogType: 'article',
  ogImage: () => page.value?.meta?.banner
    ? `/projects/${page.value.meta?.banner}`
    : '/banner.png',
  ogUrl: () => window.location.href,

  // Twitter
  twitterCard: 'summary_large_image',
  twitterTitle: () => page.value?.title ?? '',
  twitterDescription: () => page.value?.meta?.summary ?? '',
  twitterImage: () => page.value?.meta?.banner
    ? `/projects/${page.value.meta?.banner}`
    : '/banner.png',
})

watchEffect(() => {
  route.meta.verticalTitle = page.value?.title ?? '404 - 404 - 404'
  hero.value = {
    title: page.value?.title ?? defaultHero.title,
    description: page.value?.meta?.summary ?? page.value?.meta?.description ?? defaultHero.description,
    front_page: page.value ? false : true
  }
})
</script>

<template>
  <div v-if="page" class="page-resolution h-full py-12">
    <!-- back link + title -->
    <nuxt-link to="/" class="no-underline flex items-center mb-4 gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left mt-1 w-6 h-6"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      <h3 class="font-serif text-4xl my-0" v-text="page.title" />
    </nuxt-link>

    <!-- banner + info superpuesta -->
    <div class="z-50 relative overflow-hidden w-full text-white rounded-lg p-12">
      <img :alt="`${page.title} Banner`" :aria-label="`${page.title} Banner`" class="z-10 absolute w-full h-full top-0 left-0 object-cover select-none pointer-events-none" :src="`/projects/${page.meta.banner}`" />
      <div class="z-20 absolute inset-0 bg-gradient-to-t from-golden/25 via-black/75 to-black" />

      <div class="z-30 relative flex flex-col justify-end min-h-72">
        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p class="text-xs uppercase tracking-wider opacity-60 mb-1" v-text="page.meta.label ?? 'Position'" />
            <p class="text-sm font-medium" v-text="page.meta.acting ?? '—'" />
          </div>
          <div>
            <p class="text-xs uppercase tracking-wider opacity-60 mb-1">Year</p>
            <p class="text-sm font-medium" v-text="page.meta.year ?? '—'" />
          </div>
          <div>
            <p class="text-xs uppercase tracking-wider opacity-60 mb-1">Role</p>
            <p class="text-sm font-medium" v-text="page.meta.role ?? '—'" />
          </div>
          <div>
            <p class="text-xs uppercase tracking-wider opacity-60 mb-1">Type</p>
            <p class="text-sm font-medium" v-text="page.meta.type ?? '—'" />
          </div>
          <div class="col-span-2">
            <p class="text-xs uppercase tracking-wider opacity-60 mb-1">Tech</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in page.meta.tech ?? []"
                :key="tech"
                class="text-xs px-2 py-1 bg-black/25 border border-white/40 rounded-md backdrop-blur-sm"
                v-text="tech"
              />
            </div>
          </div>
        </div>

        <div v-if="page.meta.live || page.meta.repo" class="flex flex-wrap gap-4 mt-6">
          <a v-if="page.meta.live" :href="page.meta.live" target="_blank"
             class="text-white/75 text-sm underline underline-offset-4 hover:opacity-70 transition-opacity">Live ↗</a>
          <a v-if="page.meta.repo" :href="page.meta.repo" target="_blank"
             class="text-white/75 text-sm underline underline-offset-4 hover:opacity-70 transition-opacity">Source ↗</a>
        </div>
      </div>
    </div>

    <!-- contenido -->
    <ContentRenderer class="leading-7" :value="page" />
  </div>

  <div v-else-if="pending" class="page-resolution h-full animate-pulse">
    <div class="flex items-center mt-12 mb-4 gap-1">
      <div class="w-6 h-6 bg-main rounded" />
      <div class="h-6 w-48 bg-main rounded" />
    </div>
    <div class="relative overflow-hidden w-full bg-main rounded-lg p-12 h-64" />
    <div class="mt-8 space-y-4">
      <div class="h-4 w-full bg-main rounded" />
      <div class="h-4 w-5/6 bg-main rounded" />
      <div class="h-4 w-3/4 bg-main rounded" />
      <div class="h-4 w-full bg-main rounded" />
      <div class="h-4 w-2/3 bg-main rounded" />
    </div>
  </div>

  <NotFoundPage v-else />
</template>
