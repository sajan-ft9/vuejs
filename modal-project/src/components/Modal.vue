<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale : theme === 'sale'}">
            <p>Props example</p>
            <h1>{{header}}</h1>
            <p>{{text}}</p>
            <slot>Default</slot>
            <div class="actions">
                <slot name="links"></slot>
                <slot name="head"></slot>
                <slot name="form"></slot>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        },
 }
}
</script>


<style>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 10px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1{
        color: green;
    }
    .modal.sale{
        background: crimson;
        color:white;
    }
    .modal.sale.h1{
        color: white;
    }
.modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
        color: #333;
    }
    .modal .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
</style>