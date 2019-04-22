static hide(element) {
    let target = "#" + element.attr('targetMsg');
    $(target).find( ".errorMsg" ).remove();
}