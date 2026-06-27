<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>iBOX Mentality</title>

    <link rel="stylesheet" href="css/style.css">

</head>

<body>

    <div class="background"></div>
    <div class="overlay"></div>

    <header>

        <div class="logo">
            <img src="img/iboxlogo (1).png" alt="iBOX Logo">
        </div>

        <!-- Бургер-кнопка (только для мобильных) -->
        <div class="burger-menu" id="burgerMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav id="navMenu">
            <a href="#">О компании</a>
            <a href="#">Продукты</a>
            <a href="#">Технологии</a>
            <a href="#">Поддержка</a>
            <a href="#">Контакты</a>
            <a href="#" class="buy-btn mobile-buy">Купить</a>
        </nav>

        <a href="#" class="buy-btn desktop-buy">
            Купить
        </a>

    </header>

    <section class="hero">

        <img src="img/moon.png" class="moon" alt="">

        <div class="title">

            <img src="img/iboxlogo.png" alt="iBOX">

            <p class="subtitle">
                Технологии, которым доверяют на дороге
            </p>

            <p class="description">
                Инновационные видеорегистраторы с искусственным интеллектом
                <br>
                для вашей безопасности
            </p>

        </div>

        <div class="content">

            <div class="features left">

                <div class="feature">

                    <div class="icon">
                        <img src="img/IMG_5184.png" alt="Technology">
                    </div>

                    <div>

                        <h3>Передовые технологии</h3>

                        <p>
                            Инновационные решения
                            для максимальной безопасности
                        </p>

                    </div>

                </div>

                <div class="feature">

                    <div class="icon">
                        <img src="img/IMG_5187.png" alt="Reliability">
                    </div>

                    <div>

                        <h3>Надежность</h3>

                        <p>
                            Высокое качество
                            и долговечность устройств
                        </p>

                    </div>

                </div>

            </div>

            <div class="model-wrapper">

                <div class="glow-ring"></div>

                <div id="viewer"></div>

            </div>

            <div class="features right">

                <div class="feature">

                    <div class="icon">
                        <img src="img/IMG_5188.png" alt="AI">
                    </div>

                    <div>

                        <h3>Искусственный интеллект</h3>

                        <p>
                            Умные алгоритмы
                            для защиты на дороге
                        </p>

                    </div>

                </div>

                <div class="feature">

                    <div class="icon">
                        <img src="img/IMG_5216.png" alt="Night Vision">
                    </div>

                    <div>

                        <h3>Ночное видение</h3>

                        <p>
                            Четкая запись
                            в любых условиях
                        </p>

                    </div>

                </div>

            </div>

        </div>

        <div class="scroll">

            Прокрутите вниз

        </div>

    </section>

    <section class="stats">

        <div>

            <h2>10+</h2>

            <span>лет на рынке</span>

        </div>

        <div>

            <h2>1M+</h2>

            <span>довольных клиентов</span>

        </div>

        <div>

            <h2>150+</h2>

            <span>моделей устройств</span>

        </div>

    </section>

    <script type="importmap">
        {
            "imports": {
                "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
                "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
            }
        }
    </script>

    <script type="module" src="js/app.js"></script>

</body>

</html>