<template>
    <button :class="[customClass, { success: success }]" @click="handleClick">
        <slot>
            <font-awesome-icon :icon="icon" style="margin-right:5px" />
            {{ success ? 'Added' : label }}
        </slot>
    </button>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    label: { type: String, default: 'Add to Bag' },
    icon: { type: String, default: '' },
    success: { type: Boolean, default: false },
    customClass: { type: String, default: '' }
});

</script>

<style lang="scss" scoped></style>