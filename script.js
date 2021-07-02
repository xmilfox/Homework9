// завдання 1
$("a[href^='https://']").attr('target', '_blank');

// завдання 2
$('h2.head').css('background', 'green').find(".inner").css("fontSize","35px");

// завдання 3

$("div:first").prependTo($("h3:first"));
$("div:last").prependTo($("h3:last"));

// завдання 4

$("input").on("change",function(){
    if ($(':checkbox:checked').length == 3){
        $("input").attr('disabled','disabled');
    }
});