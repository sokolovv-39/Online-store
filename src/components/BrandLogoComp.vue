<template>
    <div class="brand_logo">
        <a class="brand_logo_link" href="index.html">
            <img src="@/assets/images/Brand_image.jpg" alt="Brand_image">
        </a>
        <a class="title_link" href="index.html">
            <h1>BRAN<span>D</span></h1>
        </a>
    </div>
</template>

<style scoped lang="scss">
.brand_logo {
    display: flex;
    align-items: center;
    flex: 1;

    .brand_logo_link {
        text-decoration: none;
        display: block;
        flex: 1;
    }

    .title_link {
        text-decoration: none;
        display: block;
        flex: 3;

        h1 {
            font-family: Lato;
            font-size: 27px;
            line-height: 32px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            color: #222222;
            margin-left: 1.7%;

            span {
                font-weight: 900;
                color: #f16d7f;
            }
        }
    }
}
</style>
