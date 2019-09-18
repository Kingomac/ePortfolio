<template>
<router-link :to="to" class="collection-item red-text text-darken-1">{{text}}</router-link>    
</template>
<script>
export default {
    name: 'linktarefa',
    props: ['to', 'text']
}
</script>
