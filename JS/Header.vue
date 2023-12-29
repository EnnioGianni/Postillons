<template>
    <div>
        <span>{{ props.deskOpenned }}</span>
        <h1>{{ props.title }}</h1>
        <span>{{ props.deskClosed }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['title', 'deskOpenned', 'deskClosed'])
</script>