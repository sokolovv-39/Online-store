<template>
    <div class="sidebar">
        <details>
            <summary>
                <div class="for_border_sidebar">
                    <h5>CATEGORY</h5>
                    <i class="fa-solid fa-caret-up"></i>
                </div>
            </summary>
            <a href="#">Accessories</a>
            <a href="#">Bags</a>
            <a href="#">Denim</a>
            <a href="#">Hoodies&Sweatshirts</a>
            <a href="#">Pants</a>
            <a href="#">Jackets&Coats</a>
            <a href="#">Polos</a>
            <a href="#">Shirts</a>
            <a href="#">Shoes</a>
            <a href="#">Shorts</a>
            <a href="#">Sweaters&Knits</a>
            <a href="#">T-Shirts</a>
            <a href="#">Tanks</a>
        </details>
        <details>
            <summary>
                <div class="for_border_sidebar">
                    <h5>BRAND</h5>
                    <i class="fa-solid fa-caret-up"></i>
                </div>
            </summary>
            <a href="#">Brand 1</a>
            <a href="#">Brand 2</a>
            <a href="#">Brand 3</a>
            <a href="#">Brand 4</a>
            <a href="#">Brand 5</a>
            <a href="#">Brand 6</a>
        </details>
        <details>
            <summary>
                <div class="for_border_sidebar">
                    <h5>DESIGNER</h5>
                    <i class="fa-solid fa-caret-up"></i>
                </div>
            </summary>
            <a href="#">Designer 1</a>
            <a href="#">Designer 2</a>
            <a href="#">Designer 3</a>
            <a href="#">Designer 4</a>
            <a href="#">Designer 5</a>
        </details>

    </div>
</template>

<style scoped lang="scss">
.sidebar_txt {
    font-family: Lato;
    font-size: 14px;
    line-height: 37px;
    font-weight: 900;
    color: #ef5b70;
    height: 37px;
    margin-left: 11px;
}

.sidebar {
    flex: 1;
    margin-right: 5%;

    details {
        margin-bottom: 30px;

        summary {
            cursor: pointer;
            list-style-type: none;
            border-left: 5px solid #ef5b70;

            .for_border_sidebar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #ebebeb;
                padding-right: 5px;

                h5 {
                    @extend .sidebar_txt;
                }

                i {
                    height: 37px;
                    line-height: 37px;
                    color: #ef5b70;
                }
            }
        }

        a {
            font-family: Lato;
            font-size: 14px;
            line-height: 33px;
            font-weight: 700;
            color: #6f6e6e;
            margin-left: 6%;
            text-decoration: none;
            display: block;
        }

        a:hover {
            color: #f16d7f;
        }
    }

    details[open] i {
        transform: rotate(180deg);
    }
}
</style>