<template>
    <li class="menu-element">
        <a href="#" class="menu-link">
            <slot></slot>
        </a>
        <div class="mega-box" :style="definePosition">
            <div class=" mega-item">
                <h3 class="mega-heading">Women</h3>
                <a class="mega-link" href="#">Dresses</a>
                <a class="mega-link" href="#">Tops</a>
                <a class="mega-link" href="#">Sweaters/Knits</a>
                <a class="mega-link" href="#">Jackets/Coats</a>
                <a class="mega-link" href="#">Blazers</a>
                <a class="mega-link" href="#">Denim</a>
                <a class="mega-link" href="#">Leggings/Pants</a>
                <a class="mega-link" href="#">Skirts/Shorts</a>
                <a class="mega-link" href="#">Accessories</a>
            </div>
            <div class="mega-item">
                <h3 class="mega-heading">Women</h3>
                <a class="mega-link" href="#">Dresses</a>
                <a class="mega-link" href="#">Tops</a>
                <a class="mega-link" href="#">Sweaters/Knits</a>
                <a class="mega-link" href="#">Jackets/Coats</a>
                <a class="mega-link" href="#">Blazers</a>
                <a class="mega-link" href="#">Denim</a>
                <a class="mega-link" href="#">Leggings/Pants</a>
                <a class="mega-link" href="#">Skirts/Shorts</a>
                <a class="mega-link" href="#">Accessories</a>
            </div>
            <div class="mega-item">
                <h3 class="mega-heading">Women</h3>
                <a class="mega-link" href="#">Dresses</a>
                <a class="mega-link" href="#">Tops</a>
                <a class="mega-link" href="#">Sweaters/Knits</a>
                <a class="mega-link" href="#">Jackets/Coats</a>
                <a class="mega-link" href="#">Blazers</a>
                <a class="mega-link" href="#">Denim</a>
                <a class="mega-link" href="#">Leggings/Pants</a>
                <a class="mega-link" href="#">Skirts/Shorts</a>
                <a class="mega-link" href="#">Accessories</a>
            </div>
        </div>
    </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['reversePos', 'move'])
const moveBox = props.move ? props.move : 'auto'
const arrowPos = props.reversePos ? '5%' : '97%'
const definePosition = computed(() => {
    let styleObj = {}
    styleObj['--arrowPos'] = arrowPos
    styleObj.left = moveBox
    if (props.reversePos) {
        styleObj.right = '0'
    }
    if (moveBox !== 'auto') {
        styleObj['--arrowPos'] = String(parseInt(moveBox) + 770).concat('px')
    }
    return styleObj
})
</script>

<style lang="scss" scoped>
.menu-element {
    position: relative;
    width: 100%;
    margin: 2%;

    .menu-link {
        text-decoration: none;
        font-family: Lato;
        font-size: 14px;
        line-height: 26px;
        font-weight: 700;
        text-transform: uppercase;
        color: #222222;
        white-space: nowrap;
        width: min-content;
    }

    .mega-box {
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        padding: 20px;
        position: absolute;
        top: 35px;
        display: none;
        background-color: #fff;

        .mega-item {
            margin-right: 45px;

            .mega-heading {
                font-family: Lato;
                font-size: 14px;
                font-weight: 400;
                text-transform: uppercase;
                border-bottom: 1px solid #e8e8e8;
                width: 235px;
                margin-bottom: 10px;
                padding-bottom: 8px;
            }

            .mega-link {
                display: block;
                text-decoration: none;
                color: #646464;
                font-family: Lato;
                font-size: 14px;
                font-weight: 400;
                line-height: 28px;
            }

            .mega-link:hover {
                color: #f16d7f;
            }
        }

        .mega-item:last-of-type {
            margin-right: 0;
        }
    }

    .mega-box::before {
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: absolute;
        top: -8px;
        right: var(--arrowPos);
        transform: rotate(45deg);
        border-top: 1px solid #e8e8e8;
        border-left: 1px solid #e8e8e8;
    }
}

.menu-element:hover .mega-box {
    display: flex;
}
</style>