<template>
    <div class="quote_subscription">
        <div class="quote">
            <article class="quote_content">
                <img class="quote_img" src="@/assets/images/Bin_Burhan.png" alt="Bin_Burhan">
                <div class="quote_text_author">
                    <p class="quote_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <p class="quote_author">Bin Burhan<br><span class="quote_author_addition">Dhaka,
                            Bd</span>
                    </p>
                    <div class="quote_content_slider">
                        <a href="#"></a><a href="#"></a><a href="#"></a>
                    </div>
                </div>
            </article>
        </div>
        <div class="whitespace"></div>
        <div class="subscription">
            <div class="subscription_content">
                <h4 class="subscribe_title">SUBSCRIBE<br><span>FOR OUR NEWLETTER AND PROMOTION</span></h4>
                <ul class="subscribe_field">

                    <input type="email" class="subscribe_field_email" placeholder="Enter Your Email">


                    <button class="subscribe_button" type="submit">Subscribe</button>

                </ul>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.quote_subscription {
    background-image: url(@/assets/images/background_ocean.jpg);
    height: 438px;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
    background-position: bottom;

    .quote {
        display: flex;
        flex-grow: 1;
        flex-basis: 50%;
        flex-direction: column;

        .quote_content {
            margin: 15% auto 0 auto;
            display: flex;
            width: 80%;

            .quote_img {
                display: block;
                height: 38%;
            }

            .quote_text_author {
                margin-left: 3%;

                .quote_text {
                    color: #222224;
                    font-family: Lato;
                    font-size: 16px;
                    font-style: italic;
                    letter-spacing: 0.4px;
                    display: block;
                    margin-bottom: 20px;
                    font-weight: 900;
                }

                .quote_author {
                    color: #f16d7f;
                    font-family: Lato;
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: 0.4px;

                    .quote_author_addition {
                        color: #222224;
                        font-family: Lato;
                        font-size: 12px;
                        font-weight: 900;
                        letter-spacing: 0.3px;
                    }
                }

                .quote_content_slider {
                    width: 32%;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 14%;

                    a {
                        display: block;
                        height: 4px;
                        width: 26.6666%;
                        background-color: #d6d6d6;
                    }
                }

                .quote_content_slider a:nth-of-type(2) {
                    background-color: #f16d7f;
                }
            }
        }
    }

    .whitespace {
        flex-basis: 0.1%;
        background-color: white;
    }

    .subscription {
        flex-grow: 1;
        flex-basis: 50%;
        display: flex;

        .subscription_content {
            margin: 124px auto 0 auto;
            display: flex;
            flex-direction: column;
            width: 100%;

            .subscribe_title {
                font-family: Lato;
                font-size: 24px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.025em;
                color: #222224;
                margin: 0 auto 35px auto;
                text-align: center;

                span {
                    font-size: 14px;
                }
            }

            .subscribe_field {
                display: flex;
                align-items: baseline;
                list-style-type: none;
                margin: 0 auto;
                width: 53%;

                .subscribe_field_email {
                    width: 282px;
                    border-radius: 23px 0 0 23px;
                    background-color: #e1e1e1;
                    border: 1px solid #e1e1e1;
                    height: 44px;
                    border-right-width: 0;
                    padding-left: 30px;
                    color: #222224;
                    font-family: Lato;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 54px;
                    letter-spacing: 0.35px;
                }

                .subscribe_button {
                    border-radius: 0 23px 23px 0;
                    background-color: #f16d7f;
                    border: none;
                    height: 46px;
                    color: #ffffff;
                    font-family: Lato;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 46px;
                    letter-spacing: 0.35px;
                    transition: all 0.5s;
                    padding: 0 12px;
                }

                .subscribe_button:hover {
                    background-color: #fff;
                    color: #f16d7f;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>