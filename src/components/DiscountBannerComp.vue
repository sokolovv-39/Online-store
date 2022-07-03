<template>
    <section class="discount_banner">
        <img src="@/assets/images/discount_banner.jpg" alt="discount_banner">
        <div class="discount_banner_offer">
            <h3>30% <span class="OFFER">OFFER</span></h3>
            <h3>FOR WOMEN</h3>
        </div>
        <div class="discount_banner_description">
            <div class="discount_banner_description_item">
                <img class="discount_banner_mini_images" src="@/assets/images/mini-truck.svg" alt="mini-truck">
                <div class="discount_banner_description_title_text">
                    <h4 class="discount_banner_description_title">Free Delivery</h4>
                    <p class="discount_banner_description_text">
                        Worldwide delivery on all. Authorit tively morph next-generation innov tion
                        with
                        extensive models.
                    </p>
                </div>
            </div>
            <div class="discount_banner_description_item">
                <img class="discount_banner_mini_images" src="@/assets/images/discount.svg" alt="discount">
                <div class="discount_banner_description_title_text">
                    <h4 class="discount_banner_description_title">Sales & discounts</h4>
                    <p class="discount_banner_description_text">Worldwide delivery on all. Authorit
                        tively
                        morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
            <div class="discount_banner_description_item">
                <img class="discount_banner_mini_images" src="@/assets/images/mini-crown.svg" alt="mini-crown">
                <div class="discount_banner_description_title_text">
                    <h4 class="discount_banner_description_title">Quality assurance</h4>
                    <p class="discount_banner_description_text">Worldwide delivery on all. Authorit
                        tively
                        morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.discount_banner {
    display: flex;
    margin-bottom: 97px;
    position: relative;

    .discount_banner_offer {
        font-family: Lato;
        font-size: 53.7px;
        font-weight: 700;
        letter-spacing: 0.025em;
        color: #ffffff;
        position: absolute;
        top: 146px;
        left: 39px;

        .OFFER {
            color: #f16d7f;
        }
    }

    .discount_banner_description {
        background-color: #222224;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        .discount_banner_description_item {
            margin: 0 auto;
            position: relative;
            width: 90%;

            .discount_banner_mini_images {
                position: absolute;
                top: 0;
                left: 0;
            }

            .discount_banner_description_title_text {
                width: 65%;
                margin: 0 auto;

                .discount_banner_description_title {
                    color: #fbfbfb;
                    font-family: Lato;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 17px;
                    display: inline-block;
                    width: 100%;
                }

                .discount_banner_description_text {
                    color: #fbfbfb;
                    font-family: Lato;
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 24px;
                    letter-spacing: 0.35px;
                    width: 100%;
                }
            }
        }
    }

}
</style>