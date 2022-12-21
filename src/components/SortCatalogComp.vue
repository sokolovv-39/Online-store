<template>
    <div class="choice-boxes">
        <div class="trending_now_box">
            <label for="trending_now">TRENDING NOW</label>
            <div class="trending_now_box_line">
                <a data-link="1" @click="sortChange">Bohemian</a><a data-link="1" @click="sortChange">Floral</a>
                <a data-link="1" @click="sortChange">Lace</a>
            </div>
            <div class="trending_now_box_line">
                <a data-link="2" @click="sortChange">Floral</a>
                <a data-link="2" @click="sortChange">Lace</a>
                <a data-link="2" @click="sortChange">Bohemian</a>
            </div>
        </div>
        <div class="size_box">
            <form id="size-box" action="#">
                <legend>SIZE</legend>
                <div class="size-box-checkboxes">
                    <label><input type="checkbox" value="xxs" @input="sortChange">
                        <p>XXS</p>
                    </label>
                    <label><input type="checkbox" value="xs" @input="sortChange">
                        <p>XS</p>
                    </label>
                    <label><input type="checkbox" value="s" @input="sortChange">
                        <p>S</p>
                    </label>
                    <label><input type="checkbox" value="m" @input="sortChange">
                        <p>M</p>
                    </label>
                    <label><input type="checkbox" value="l" @input="sortChange">
                        <p>L</p>
                    </label>
                    <label><input type="checkbox" value="xl" @input="sortChange">
                        <p>XL</p>
                    </label>
                    <label><input type="checkbox" value="xxl" @input="sortChange">
                        <p>XXL</p>
                    </label>
                </div>
            </form>
        </div>
        <div class="price_range_box">
            <label for="price_range_box">PRICE</label>
            <p>{{ rangeValue }}$</p>
            <input id="price_range_box" type="range" step="1" min="40" max="100" :value="rangeValue"
                @input="sortChange">
        </div>
    </div>
    <div class="sort_panel">

        <div class="sort_panel_details">
            <label for="sort_by">
                <p>Sort By</p>
            </label>
            <div class="sort_panel_details_select">
                <select :value="sortType" @input="sortChange" data-selectType="sortBy" name="sort_by" id="sort_by">
                    <option value="">-</option>
                    <option value="name"><a href="#">Name</a></option>
                    <option value="price"><a href="#">Price</a></option>
                    <option value="popularity"><a href="#">Popularity</a></option>
                    <option value="news"><a href="#">News</a></option>
                </select>
                <i class="bi bi-caret-down-fill"></i>
            </div>
        </div>
        <div class="sort_panel_details">
            <label for="show">
                <p>Show</p>
            </label>
            <div class="sort_panel_details_select">
                <select :value="shownQuantity" @input="sortChange" data-select-type="shownQuantity" name="show"
                    id="show">
                    <option value="9"><a href="#">9</a></option>
                    <option value="30"><a href="#">20</a></option>
                    <option value="50"><a href="#">30</a></option>
                    <option value="80"><a href="#">100</a></option>
                </select>
                <i class="bi bi-caret-down-fill"></i>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['sortChange', 'changeProductsQuantity']);
const rangeValue = ref(100);
const checkedSizes = ref([]);
const activeLinks = ref([]);
const shownQuantity = ref(9);
const sortType = ref('');

function sortChange(e) {
    if (e.target.type === 'range') {
        rangeValue.value = e.target.value;
    }
    if (e.target.type === 'checkbox') {
        if (e.target.checked) checkedSizes.value.push(e.target.value)
        else checkedSizes.value = checkedSizes.value.filter(size => size !== e.target.value);
    }
    if (e.target.type === '') {
        if (e.target.dataset.link === "1") {
            if (!activeLinks.value[1] || e.target.innerHTML !== activeLinks.value[1].innerHTML) {
                if (activeLinks.value[0]) activeLinks.value[0].classList.remove('activeColor');
                if (activeLinks.value[0] !== e.target) {
                    activeLinks.value[0] = e.target;
                    e.target.classList.add('activeColor');
                }
                else delete activeLinks.value[0];
            }
        }
        else {
            if (!activeLinks.value[0] || e.target.innerHTML !== activeLinks.value[0].innerHTML) {
                if (e.target === activeLinks.value[0])
                    if (activeLinks.value[1]) activeLinks.value[1].classList.remove('activeColor');
                if (activeLinks.value[1] !== e.target) {
                    activeLinks.value[1] = e.target;
                    e.target.classList.add('activeColor');
                }
                else delete activeLinks.value[1];
            }
        }
    }
    if (e.target.dataset.selectType === 'shownQuantity') {
        console.log('ok1')
        shownQuantity.value = Number(e.target.value);
    }
    if (e.target.dataset.selectType === 'sortBy') {
        sortType.value = e.target.value;
    }
    emit('sortChange', rangeValue.value, checkedSizes.value, activeLinks.value, shownQuantity.value, sortType.value);
}
</script>

<style scoped lang="scss">
.choice-boxes-txt {
    margin-bottom: 25px;
    font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    color: #6f6e6e;
    display: block;
}

.choice-boxes {
    display: flex;
    margin-bottom: 43px;

    .trending_now_box {
        flex: 1;

        label {
            @extend .choice-boxes-txt
        }

        .trending_now_box_line {
            display: flex;

            a {
                font-family: Lato;
                font-size: 14px;
                font-weight: 400;
                color: #6f6e6e;
                text-decoration: none;
                padding: 0 3%;
                border-right: 1px solid rgb(202, 197, 197);
                cursor: pointer;
            }

            a:hover {
                color: #ef5b70;
            }

            .activeColor {
                color: #ef5b70;
            }
        }

        .trending_now_box_line a:last-of-type {
            border-right: none;
            padding-right: 0;
        }

        .trending_now_box_line a:first-of-type {
            padding-left: 0;
        }
    }

    .size_box {
        flex: 2;

        legend {
            @extend .choice-boxes-txt;
        }

        .size-box-checkboxes {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, auto);

            label {
                display: grid;
                grid-template-columns: 1fr 4fr;
                align-items: center;

                p {
                    margin-top: 1px;
                }
            }
        }
    }

    .price_range_box {
        flex: 2;

        label {
            @extend .choice-boxes-txt;
        }

        input {
            background: #f16d7f;
        }
    }
}

.sort_panel {
    background-color: #f3f3f3;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 2%;

    .sort_panel_details:last-of-type {
        margin-left: 2.5%;
        width: 8%;
        grid-template-columns: 63% 1fr;
    }

    .sort_panel_details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        border: 1px solid #ebebeb;
        height: 60%;
        background-color: #fff;

        label {
            border-right: 1px solid #ebebeb;
            height: 100%;
            text-align: center;

            p {
                display: inline-block;
                vertical-align: middle;
                font-family: Lato;
                font-size: 14px;
                font-weight: 400;
                color: #6f6e6e;
            }
        }
    }

    label::before {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        content: "";
    }

    .sort_panel_details:first-of-type {
        border-right: none;
        width: 15%;

        i {
            border-right: 1px solid #ebebeb;
            padding-right: 12%;
        }
    }

    .sort_panel_details_select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        margin: 0 7%;

        select {
            appearance: none;
            border: none;
            font-family: "Font Awesome";
            font-size: 14px;
            font-weight: 400;
            color: #6f6e6e;
            height: 100%;
            cursor: pointer;
        }

        i {
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            color: #6f6e6e;
            background-color: #fff;
            border: 1px solid #ebebeb;
            border-left: none;
            border-right: none;
        }

        & i:last-of-type {
            border-right: 1px solid #eaeaea;
        }
    }
}
</style>