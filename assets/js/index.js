
function showCharm(id){
    var  charm = $(id).data("charm");
    if (charm.element.data("opened") === true) {
        charm.close();
    } else {
        charm.open();
    }
}