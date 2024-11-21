<script setup lang="ts">
    import { PropType } from 'vue';

    type Color = 'black' | 'white'
    type IconName = 'ArrowBack' | 'Wallet' |'Money' | 'Edit' | 'Check' | 'Backspace' | 'Creditcard' | 'Close'
    let Icon: Record<IconName, string> = {
        'ArrowBack' : 'arrow_back_ios',
        'Wallet' : 'account_balance_wallet',
        'Money' : 'payments',
        'Edit' : 'edit',
        'Check' : 'check_circle',
        'Backspace' : 'backspace',
        'Creditcard' : 'credit_card',
        'Close' : 'close'
    }
    defineProps({
        iconName: {type: String as PropType<IconName>, required: true},
        iconClass: String,
        iconFs: String,
        iconClr: {type: String as PropType<Color>},
    })

</script>

<template>
    <span 
        :class="['material-icons', iconClass]" 
        :style="{ fontSize: iconFs, color: iconClr }">
        {{Icon[iconName]}}
    </span>
</template>

<style scoped>
    
</style>
