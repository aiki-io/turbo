let spa = () => {

    let main_html =
    '<div id="spa-shell-head">' +
     '<div class="spa-shell-head-logo"></div>' +
     '<div class="spa-shell-head-acct"></div>'+
     '<div class="spa-shell-head-search"></div>' +
     '</div>' +
     '<div class="spa-shell-main">' +
         '<div class="spa-shell-main-nav"></div>' +
         '<div class="spa-shell-main-content"></div>' +
     '</div>' +
     '<div class="spa-shell-foot"></div>' +
     '<div class="spa-shell-chat"></div>' +
     '<div class="spa-shell-modal"></div>';

    let init = (container) => {
        container.html(main_html);
    };

    return { init };
};
