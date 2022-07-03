<template>
    <div class="choice-boxes">
        <div class="trending_now_box">
            <label for="trending_now">TRENDING NOW</label>
            <div class="trending_now_box_line">
                <a href="#">Bohemian</a><a href="#">Floral</a>
                <a href="#">Lace</a>
            </div>
            <div class="trending_now_box_line">
                <a href="#">Floral</a>
                <a href="#">Lace</a>
                <a href="#">Bohemian</a>
            </div>
        </div>
        <div class="size_box">
            <form id="size-box" action="#">
                <legend>SIZE</legend>
                <div class="size-box-checkboxes">
                    <label><input type="checkbox">
                        <p>XXS</p>
                    </label>
                    <label><input type="checkbox">
                        <p>XS</p>
                    </label>
                    <label><input type="checkbox">
                        <p>S</p>
                    </label>
                    <label><input type="checkbox">
                        <p>M</p>
                    </label>
                    <label><input type="checkbox">
                        <p>L</p>
                    </label>
                    <label><input type="checkbox">
                        <p>XL</p>
                    </label>
                    <label><input type="checkbox">
                        <p>XXL</p>
                    </label>
                </div>
            </form>
        </div>
        <div class="price_range_box">
            <label for="price_range_box">PRICE</label>
            <input id="price_range_box" type="range" value="250" step="20" min="0" max="400">
        </div>
    </div>
    <div class="sort_panel">

        <div class="sort_panel_details">
            <label for="sort_by">
                <p>Sort By</p>
            </label>
            <div class="sort_panel_details_select">
                <select name="sort_by" id="sort_by">
                    <option value="Name"><a href="#">Name</a></option>
                    <option value="Price"><a href="#">Price</a></option>
                    <option value="Popularity"><a href="#">Popularity</a></option>
                    <option value="News"><a href="#">News</a></option>
                </select>
                <i class="bi bi-caret-down-fill"></i>
            </div>
        </div>
        <div class="sort_panel_details">
            <label for="show">
                <p>Show</p>
            </label>
            <div class="sort_panel_details_select">
                <select name="show" id="show">
                    <option value="9"><a href="#">9</a></option>
                    <option value="15"><a href="#">15</a></option>
                    <option value="25"><a href="#">25</a></option>
                    <option value="35"><a href="#">35</a></option>
                </select>
                <i class="bi bi-caret-down-fill"></i>
            </div>
        </div>

    </div>
</template>

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
            }

            a:hover {
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