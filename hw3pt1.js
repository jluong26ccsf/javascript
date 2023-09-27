
$(document).ready(function (){
    
    $(function() {
    $('button').on('click', function(event) {
        event.preventDefault();
        var hwag = $('input[type="number]').val();
        console.log(hwag, );
    });
});
}