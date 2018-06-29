let spa = () => {
    let init = (container) => {
        container.html(
            '<h1 style="display: inline-block; margin: 25px;">hello, world</h1>'

        );
    };

    return { init };
};
