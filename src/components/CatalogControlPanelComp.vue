<template>
    <div class="products_control_panel">
        <div class="page_slider">
            <font-awesome-icon class="chevron" data-direct="left" icon="fa-solid fa-chevron-left" @click="turnPage" />
            <a v-for="page in pagesArr" :key="page.num" @click="pageChange(page.num)"
                :class="{ currentPage: page.active }">{{ page.num }}</a>
            <font-awesome-icon class="chevron" data-direct="right" @click="turnPage" icon="fa-solid fa-chevron-right" />
        </div>
        <button class="view_all_button">View All</button>
    </div>
</template>

<script setup>
import { ref, watchEffect, defineEmits, defineProps } from 'vue';

let currentPage = 1;
const pagesArr = ref([]);
const props = defineProps({
    quantityOverall: Number,
    sortQuantity: Number
});
watchEffect(() => {
    currentPage = 1;
    let newArr = [{
        num: 1,
        active: true
    }]
    for (let i = 1; i < Math.ceil(props.quantityOverall / props.sortQuantity); i++) {
        newArr.push({
            num: i + 1,
            active: false
        });
    }
    if (newArr.length === 1) {
        pagesArr.value = [
            {
                num: 1,
                active: true
            }
        ]
    }
    else {
        pagesArr.value = newArr;
    }
})
const emits = defineEmits(['turnPage']);

function pageChange(num) {
    pagesArr.value[currentPage - 1].active = false;
    currentPage = num;
    pagesArr.value[currentPage - 1].active = true;
    emits('turnPage', currentPage);
}
function turnPage(e) {
    if (e.target.dataset.direct === 'left' && currentPage !== 1) {
        pageChange(currentPage - 1);
    }
    if (e.target.dataset.direct === 'right' && currentPage !== pagesArr.value[pagesArr.value.length - 1].num) {
        pageChange(currentPage + 1);
    }
}
</script>

<style scoped lang="scss">
.products_control_panel {
    display: flex;
    justify-content: space-between;

    .page_slider {
        height: min-content;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        width: 16%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 1%;

        .chevron:hover {
            cursor: pointer;
        }

        .currentPage {
            color: #ef5b70;
        }

        a {
            text-decoration: none;
            color: #c4c4c4;
        }

        a:hover {
            cursor: pointer;
            color: #ef5b70;
        }
    }

    .view_all_button {
        background-color: #ffffff;
        border: 1px solid #ef5b70;
        border-radius: 3px;
        font-family: Lato;
        font-size: 16px;
        font-weight: 900;
        color: #ef5b70;
        cursor: pointer;
        transition: all 0.5s;
        padding: 1.4% 6%
    }

    .view_all_button:hover {
        color: #fff;
        background-color: #ef5b70;
    }
}
</style>