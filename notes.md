# Drafts of my portfolio

****

## JS fullpage animation test *before license had changed*
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