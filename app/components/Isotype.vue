<template>
   <svg :class="props.class" width="504" height="582" viewBox="0 0 504 582" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L148.4 0L249.2 162.96L355.6 0L504 0L459.2 69.84H355.6L254.8 232.8H249.2L148.4 69.84H44.8L0 0Z" fill="currentColor" />
      <path d="M44.8 139.68H151.2L249.2 302.64H254.8L355.6 139.68H459.2L361.2 291L504 512.16H459.2L361.2 360.84L338.8 395.76L459.2 582H355.6L254.8 419.04H249.2L145.6 582H44.8L165.2 395.76L142.8 360.84L44.8 512.16H0L142.8 291L44.8 139.68Z" fill="currentColor" />
   </svg>
</template>

<script setup>
const props = defineProps({
   class: {
      type: String,
      default: ''
   }
});
</script>