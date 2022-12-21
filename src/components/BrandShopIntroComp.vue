<template>
    <div class="intro">
        <div class="container intro-block">
            <div class="intro_text">
                <p class="brand_text">THE BRAND</p>
                <p class="lux_text">OF LUXERIOUS <span class="fashion_text">FASHION</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.intro {
    height: 665px;
    background-color: #e8e8e8;

    .intro-block {
        height: 100%;
        background-image: url(@/assets/images/Intro_img.png);

        .intro_text {
            border-left: 12px solid #f16d7f;
            float: left;
            padding-left: 12px;
            margin-top: 225px;
            margin-left: 260px;

            .brand_text {
                font-family: Lato;
                font-size: 60px;
                line-height: 45px;
                font-weight: 900;
                letter-spacing: 0.025em;
                color: #222222;
                margin-bottom: 20px;
            }

            .lux_text {
                font-size: 40px;
                font-family: Lato;
                font-weight: 900;
                line-height: 31px;

                .fashion_text {
                    font-size: 40px;
                    color: #f16d7f;
                    font-family: Lato;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>