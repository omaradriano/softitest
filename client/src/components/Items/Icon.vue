<script setup lang="ts">
    import { inject, PropType } from 'vue';

    
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
    const store: any = inject('store')
    defineProps({
        iconName: {
            type: String as PropType<IconName>,
            required: true
        },
        iconClass: String,
        iconFs: String,
        iconClr: {
            type: String as PropType<Color>
        },
        // caller : Function as PropType<() => void>
        // onEvent: {
        //     type: Function as PropType<() => void>,
        //     required: false,
        //     default(){
        //         console.log("Mensaje default")
        //     }
        // }
    })

    const customEmits = defineEmits(['launch-emit'])

    function callEmit(){
        customEmits('launch-emit')
    }

</script>

<template>
    <span 
        :class="['material-icons', iconClass]" 
        :style="{ fontSize: iconFs, color: iconClr, cursor: 'pointer', userSelect: 'none' }"
        @click="callEmit">
        {{Icon[iconName]}}
    </span>
</template>

<style scoped>
    
</style>
