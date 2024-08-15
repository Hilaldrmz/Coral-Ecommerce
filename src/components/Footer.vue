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
                <h3>Products</h3>
                <ul>
                    <li>Necklaces</li>
                    <li>Hoodies</li>
                    <li>Jewelry Box</li>
                    <li>T-Shirt</li>
                    <li>Jacket</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Company</h3>
                <ul>
                    <li>Our Producers</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Customer Service</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Track Your Order</li>
                    <li>Product Care & Repair</li>
                    <li>Book An Appointment</li>
                    <li>Shipping & Returns</li>
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