<template>
   <div class="page-resolution relative flex flex-col py-28">
      <nuxt-link class="no-underline font-display text-[15cqh] relative font-medium uppercase m-0"
         v-for="proj of projects" :to="proj.path" v-bind:key="proj.link">
         <div class="flex top-6 -left-1 w-7 h-7 absolute">
            <span class="text-main m-auto font-sans text-sm">0{{ projects.indexOf(proj)+1}}</span>
         </div>
         {{ proj.title }}
      </nuxt-link>
   </div>
</template>

<script setup>
definePageMeta({ title: 'Home', verticalTitle: 'Aexhell' });

const { data: projects } = await useAsyncData('project-list', () =>
queryCollection('content').where('path', 'like', '/projects/%').all()
)
</script>