<template>
    <section>
        <div class="offers">
            <div class="offers_card-1">
                <div class="offers_card_img">
                    <img class="offers_img" src="@/assets/images/for_men.png" alt="for_men">
                    <h2>HOT DEAL<br><span class="category">FOR MEN</span></h2>
                </div>
            </div>
            <div class="offers_card-2">
                <div class="offers_card_img">
                    <img class="offers_img" src="@/assets/images/accesories.png" alt="accesories">
                    <h2>LUXIROUS & TRENDY<br><span class="category">ACCESORIES</span></h2>
                </div>
            </div>
            <div class="offers_card-3">
                <div class="offers_card_img">
                    <img class="offers_img" src="@/assets/images/for_women.png" alt="for_women">
                    <h2>30% OFFER<br> <span class="category">WOMEN</span></h2>
                </div>
            </div>
            <div class="offers_card-4">
                <div class="offers_card_img">
                    <img class="offers_img" src="@/assets/images/for_kids.png" alt="for_kids">
                    <h2>NEW ARRIVALS<br> <span class="category">FOR KIDS</span></h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.offers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 261px);
    column-gap: 2%;
    margin-bottom: 100px;

    [class^="offers_card"] h2 {
        position: absolute;
        top: 26px;
        left: 0px;
        font-family: Lato;
        font-size: 18px;
        line-height: 1.2;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: #222222;
        background-color: white;
        padding: 16px 20px;
    }

    [class^="offers_card-"]:hover {
        cursor: pointer;
        transform: scale(1.2);
        box-shadow: #f16d7f 0 0 25px;
        z-index: 1;
        transition: all 0.5s;

        h2 {
            background-color: #f16d7f;
            transition: all 0.5s;

            span {
                transition: all 0.5s;
                color: #fff;
            }
        }
    }

    .offers_card-1 {
        grid-column: span 1;
        grid-row: 1/3;
        margin-bottom: 20px;
    }

    .offers_card-2 {
        grid-column: span 1;
        grid-row: 3/4;
    }

    .offers_card-3 {
        grid-column: 2/3;
        grid-row: 1/2;
        margin-bottom: 20px;
    }

    .offers_card-4 {
        grid-column: 2/3;
        grid-row: 2/4;
    }

    .offers_card_img {
        position: relative;
        height: 100%;

        .category {
            font-size: 30px;
            color: #f16d7f;
        }

        .offers_img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>