<template>
    <footer class="footer">
        <div class="footer-container">

            <div class="footer-section left">
                <img src="../assets/logo.svg" alt="">
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
                    Et Dolore Magna Aliqua
                </p>

                <div class="social-icons">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-x-twitter" />
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </div>
            </div>
            <div class="footer-section">
                <h3>{{ $t('products') }}</h3>
                <ul>
                    <li>{{ $t('necklaces') }}</li>
                    <li>{{ $t('hoodies') }}</li>
                    <li>{{ $t('jewelry_box') }}</li>
                    <li>{{ $t('tshirt') }}</li>
                    <li>{{ $t('jacket') }}</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>{{ $t('company') }}</h3>
                <ul>
                    <li>{{ $t('our_producers') }}</li>
                    <li>{{ $t('sitemap') }}</li>
                    <li>{{ $t('faq') }}</li>
                    <li>{{ $t('about_us') }}</li>
                    <li>{{ $t('terms_conditions') }}</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>{{ $t('customer_service') }}</h3>
                <ul>
                    <li>{{ $t('contact_us') }}</li>
                    <li>{{ $t('track_your_order') }}</li>
                    <li>{{ $t('product_care_repair') }}</li>
                    <li>{{ $t('book_appointment') }}</li>
                    <li>{{ $t('shipping_returns') }}</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2022 Coral, Inc.</p>
            <div class="payment-icons">
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-paypal"></i>
                <i class="fab fa-cc-klarna"></i>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $text-light-primary;
    text-align: center;
    border-top: $gray-divider-light 1px solid;
    width: 100%;


    .footer-container {
        @include baseWidth;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 2rem 0;

        .footer-section {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            flex: 1;

            h3 {
                margin-bottom: 15px;
                font-weight: 600;
            }

            ul {
                list-style: none;
                padding: 0;

                li {
                    margin: 5px 0;
                    cursor: pointer;
                }
            }
        }

        .left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 20px;

            .logo {}

            p {
                text-align: left;
            }

            .social-icons {
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
                gap: 10px;

                >* {
                    color: $text-light-primary;
                    margin: 0 10px;
                    font-size: 20px;
                    margin: 0;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-bottom {
        background: $indigo;
        color: $white;
        width: 100dvw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-top: 1px solid #444;

        .payment-icons {
            i {
                margin: 0 10px;
                font-size: 24px;
            }
        }
    }
}
</style>