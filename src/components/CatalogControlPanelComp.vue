<template>
    <div class="products_control_panel">
        <div class="page_slider">
            <a href="#"><i class="fa-solid fa-angle-left"></i></a><a href="#">1</a><a href="#">2</a><a href="#">3</a><a
                href="#">4</a><a href="#">5</a><a href="#">6</a><a href="#">.....</a><a href="">20</a>
            <a href="#"><i class="fa-solid fa-angle-right"></i></a>
        </div>
        <button class="view_all_button">View All</button>
    </div>
</template>

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

        a {
            text-decoration: none;
            color: #c4c4c4;
        }

        a:hover {
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