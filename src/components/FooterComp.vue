<template>
    <footer>
        <MainSubscribeComp />
        <div class="main_footer">
            <div class="footer_logo_text">
                <div class="footer_logo"><a href="index.html"><img src="@/assets/images/Brand_image.jpg"
                            alt="Brand_image"></a>
                    <a href="index.html">
                        <h1>BRAN<span>D</span></h1>
                    </a>
                </div>
                <p class="footer_text">Objectively transition extensive data rather than cross functional solutions.
                    Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly
                    syndicate an expanded array of processes and cross-unit partnerships.</p>
                <br>
                <p class="footer_text">
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.
                </p>
            </div>
            <ul class="footer_list">
                <li>
                    <h3>COMPANY</h3>
                </li>
                <li><a class="footer-link" href="#">Home</a></li>
                <li><a class="footer-link" href="#">Shop</a></li>
                <li><a class="footer-link" href="#">About</a></li>
                <li><a class="footer-link" href="#">How It Works</a></li>
                <li><a class="footer-link" href="#">Contact</a></li>
            </ul>
            <ul class="footer_list">
                <li>
                    <h3>INFORMATION</h3>
                </li>
                <li><a class="footer-link" href="#">Terms&Conditions</a></li>
                <li><a class="footer-link" href="#">Privacy Policy</a></li>
                <li><a class="footer-link" href="#">How to Buy</a></li>
                <li><a class="footer-link" href="#">How to Sell</a></li>
                <li><a class="footer-link" href="#">Promotion</a></li>
            </ul>
            <ul class="footer_list">
                <li>
                    <h3>SHOP CATEGORY</h3>
                </li>
                <li><a class="footer-link" href="#">Men</a></li>
                <li><a class="footer-link" href="#">Women</a></li>
                <li><a class="footer-link" href="#">Child</a></li>
                <li><a class="footer-link" href="#">Apparel</a></li>
                <li><a class="footer-link" href="#">Browse All</a></li>
            </ul>
        </div>
        <div class="copyright">
            <p class="copyright_text">&copy; 2022 All Rights Reserved</p>
            <div class="icon-box">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import MainSubscribeComp from "./MainSubscribeComp.vue"
</script>


<style scoped lang="scss">
.main_footer {
    display: flex;
    margin: 109px auto 90px auto;
    width: 80%;
    justify-content: space-between;

    .footer_logo_text {
        flex: 40%;

        h1 {
            margin-top: 9px;
            margin-left: 1.5%;
            font-family: Lato;
            font-size: 27px;
            line-height: 32px;
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            color: #222222;

            span {
                font-weight: 900;
                color: #f16d7f;
            }
        }

        .footer_logo {
            display: flex;
            margin-bottom: 29px;
            align-items: center;

            a {
                text-decoration: none;
            }
        }

        .footer_text {
            color: #898989;
            font-family: Lato;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;
        }
    }

    .footer_list {
        list-style-type: none;
        flex: 20%;

        .footer-link {
            text-decoration: none;
            font-family: Lato;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.025em;
            color: #898989;
        }
    }

    .footer_list:last-of-type {
        margin-right: 0;
    }

    .footer_list li:last-of-type {
        margin-bottom: 0;
    }

    .footer_list h3 {
        color: #f16d7f;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.45px;
        margin-bottom: 45px;
        padding-bottom: 0;
    }

    .footer_list li {
        margin-bottom: 30px;
        white-space: nowrap;
    }

    .footer_list a:hover {
        color: #f16d7f;
    }

    .footer_list:first-of-type {
        margin-left: 7%;
    }
}

.copyright {
    display: flex;
    justify-content: space-around;
    height: 79px;
    background-color: #e6e6e6;

    .copyright_text {
        color: #7a7a7a;
        font-family: "Lato", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 79px;
    }

    .icon-box {
        margin-top: 24px;
        width: 15%;

        a {
            color: black;
        }

        .fa-brands {
            background-color: white;
            cursor: pointer;
            width: 8%;
            padding: 8px;
            transition: all 0.5s;
            margin-right: 3%;
        }

        .fa-brands::before {
            display: flex;
            justify-content: center;
        }

        .fa-brands:hover {
            background-color: #f16d7f;
        }
    }
}
</style>