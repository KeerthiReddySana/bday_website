/* =========================================
   BACKGROUND MUSIC
========================================= */

const bgMusic =
    document.getElementById("bgMusic");


if (bgMusic) {

    bgMusic.volume = 0.35;


    /* Restore previous music position */

    const savedTime =
        localStorage.getItem("musicTime");


    if (savedTime) {

        bgMusic.addEventListener(
            "loadedmetadata",
            function () {

                try {

                    bgMusic.currentTime =
                        parseFloat(savedTime);

                } catch (error) {

                    console.log(
                        "Could not restore music position"
                    );

                }

            },
            { once: true }
        );

    }


    /* Start music after first user interaction */

    function startBackgroundMusic() {

        bgMusic.play()
            .then(() => {

                console.log(
                    "🎵 Background music started"
                );

            })
            .catch(() => {

                console.log(
                    "🎵 Browser blocked autoplay"
                );

            });

    }


    document.addEventListener(
        "click",
        startBackgroundMusic,
        { once: true }
    );


    document.addEventListener(
        "touchstart",
        startBackgroundMusic,
        { once: true }
    );


    /* Save music position */

    setInterval(function () {

        if (!bgMusic.paused) {

            localStorage.setItem(
                "musicTime",
                bgMusic.currentTime
            );

        }

    }, 1000);


    /* Save before leaving page */

    window.addEventListener(
        "beforeunload",
        function () {

            localStorage.setItem(
                "musicTime",
                bgMusic.currentTime
            );

        }
    );

}



/* =========================================
   SURPRISE GIFT
========================================= */

function openGift() {

    const message =
        document.getElementById(
            "surpriseMessage"
        );


    if (!message) return;


    message.classList.add("show");


    createSurpriseHearts();

}



/* =========================================
   SURPRISE HEARTS
========================================= */

function createSurpriseHearts() {

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "0";


        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";


        heart.style.zIndex =
            "200";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            "all 2.5s ease-out";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.bottom =
                "100%";


            heart.style.opacity =
                "0";


            heart.style.transform =
                "rotate(360deg)";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 3000);

    }

}



/* =========================================
   OLD SURPRISE POPUP SUPPORT
========================================= */

function showSurprise() {

    const popup =
        document.getElementById(
            "surprisePopup"
        );


    if (!popup) return;


    popup.classList.add(
        "active"
    );


    createHearts();

}



function closeSurprise() {

    const popup =
        document.getElementById(
            "surprisePopup"
        );


    if (!popup) return;


    popup.classList.remove(
        "active"
    );

}



/* =========================================
   HEART ANIMATION
========================================= */

function createHearts() {

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            15 +
            Math.random() * 25 +
            "px";


        heart.style.zIndex =
            "200";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            "all 2.5s ease-out";


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.style.bottom =
                "100%";


            heart.style.transform =
                "rotate(" +
                (
                    Math.random() * 80 - 40
                ) +
                "deg)";


            heart.style.opacity =
                "0";

        }, 50);


        setTimeout(function () {

            heart.remove();

        }, 3000);

    }

}



/* =========================================
   CLICK OUTSIDE POPUP
========================================= */

const surprisePopup =
    document.getElementById(
        "surprisePopup"
    );


if (surprisePopup) {

    surprisePopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === this
            ) {

                closeSurprise();

            }

        }
    );

}