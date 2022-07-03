<template>
    <div class="wrapper_block">
        <div class="discount_banner_description_item">
            <img class="discount_banner_mini_images" src="@/assets/images/mini-truck.svg" alt="mini-truck">
            <div class="discount_banner_description_title_text">
                <h4 class="discount_banner_description_title">Free Delivery</h4>
                <p class="discount_banner_description_text">
                    Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                    extensive models.
                </p>
            </div>
        </div>
        <div class="discount_banner_description_item">
            <img class="discount_banner_mini_images" src="@/assets/images/discount.svg" alt="discount">
            <div class="discount_banner_description_title_text">
                <h4 class="discount_banner_description_title">Sales & discounts</h4>
                <p class="discount_banner_description_text">Worldwide delivery on all. Authorit tively
                    morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
        <div class="discount_banner_description_item">
            <img class="discount_banner_mini_images" src="@/assets/images/mini-crown.svg" alt="mini-crown">
            <div class="discount_banner_description_title_text">
                <h4 class="discount_banner_description_title">Quality assurance</h4>
                <p class="discount_banner_description_text">Worldwide delivery on all. Authorit tively
                    morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper_block {
    background-color: #222224;
    display: flex;
    justify-content: space-evenly;
    height: 341px;
    align-items: center;

    .discount_banner_description_item {
        display: flex;
        align-items: center;
        margin-top: 3%;
        height: 100%;
        position: relative;

        .discount_banner_mini_images {
            position: absolute;
            top: 26%;
            left: 44%;
        }

        .discount_banner_description_title_text {
            width: 70%;
            margin: 0 auto;
        }

        .discount_banner_description_title {
            text-align: center;
            font-family: Lato;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.025em;
            color: #fbfbfb;
            text-align: center;
        }

        .discount_banner_description_text {
            margin-top: 17px;
            font-family: Lato;
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 0.025em;
            color: #fbfbfb;
            text-align: justify;
        }
    }
}
</style>