# Drafts of my portfolio

****

## JS fullpage animation test *before license had changed*
```
new fullpage('#fullpage', {

    //options here
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;

        console.log(section);
        TweenMax.fromTo(section, 1, {
            opacity: -1
        }, {
            opacity: 1
        }, '+=700');
        const title = section.querySelector('.title');
        // const illustration = section.querySelector('.illustration');
        const tl = new TimelineMax({
            delay: 0.5
        });
        // const ti = new TimelineMax({
        //     delay: 0.5
        // })

        tl.fromTo(title, 0.5, {
            y: '50',
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        });

        // ti.fromTo(illustration, 0.5 {
        //     y: '100'
        //     opacity: 0
        // }, {
        //         y: 0
        //     opacity: 1
        // }});

    }
});
```

## Section CONTENT S3
```
 <div class="content__flex">
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="santorinites.jpeg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Santorini | Distnqt</h2>
                                <p>Hotels description.</p>
                                <button><a target="_blank" href="https://www.distnqt.com/santorini">Read
                                        more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./bulgari_london.jpeg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: London | Distnqt </h2>
                                <p>Hotels description</p>
                                <button><a target="_blank" href="https://www.distnqt.com/london">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./milan.jpg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Milan | Distnqt</h2>
                                <p>Hotels description</p>
                                <button><a target="_blank" href="https://www.distnqt.com/milan">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./bvkgaribali.jpeg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Bali | Distnqt </h2>
                                <p>Hotels description.</p>
                                <button><a target="_blank" href="https://www.distnqt.com/bali">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex -->
                    <!-- container   -->


                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./st+regis+osaka.jpg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Osaka | Distnqt </h2>
                                <p>Hotels description.</p>
                                <button><a target="_blank" href="https://www.distnqt.com/osaka">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./tookyo.jpeg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Tokyo | Distnqt </h2>
                                <p>Hotels description.</p>
                                <button><a target="_blank" href="https://www.distnqt.com/tokyo">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./belmondsierramexico.jpeg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Mexico | Distnqt </h2>
                                <p>Hotels description.</p>
                                <button><a target="_blank" href="https://www.distnqt.com/mexico">Read more</a></button>
                            </div>
                            <!-- flex space box wraper  -->
                        </div>
                        <!-- content flex space box  -->
                    </div>
                    <!-- content flex space  -->
                    <div class="content__flex-space">
                        <div class="content__flex-space-box">
                            <div class="content__flex-space-box-img">
                                <img src="./content1.jpg" alt="">
                            </div>
                            <div class="content__flex-space-box-wraper">
                                <h2>Where: Cooknst Blog</h2>
                                <button><a target="_blank" href="https://cooknst.com/hot-news/beats-whisk-dj-leep/">Read
                                    more</a></button>
                                </div>
                                <!-- flex space box wraper  -->
                            </div>
                            <!-- content flex space box  -->
                        </div>
                        <!-- content flex space  -->
```

### Greetings first
```
 <div class="greetings__box">
                        <div class="greetings__box-overlay ">
                            <h1 class="typewriter title">Hello, welcome to my <span
                                    style="color: #b12a24;">Portfolio</span>. </h1>
                            <p class="fadeInAnimation">Please, make yourself comfortable. </p>
                        </div>

                    </div>
                    <!-- greetings  -->
```