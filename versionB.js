/*
CHOI Man Kin
1155077469
*/
$(function () {
    // 1. Fade in of page contents
    $("#main").fadeIn(4000, function () {
        // Animation complete
    });

    // 2. Special
    var isSpecialEnabled = false;
    $("#special").click(function () {
        isSpecialEnabled = !isSpecialEnabled;

        if (isSpecialEnabled)
            $("#special-toolbar").show();
        else
            $("#special-toolbar").hide();
    });

    // 3. Align
    var textAligns = ["left", "right", "center"];
    var i = 1;
    $("#special-toolbar-align").click(function () {
        $("section header h3").css("text-align", textAligns[i]);

        i = i + 1;
        if (i > 2) {
            i = 0;
        }
    });

    // 4. New Hobby
    $("#special-toolbar-prompt").click(function () {
        var newHobby = prompt("Enter a new hobby");

        if (newHobby) $("#hobbies").append('<li>' + newHobby + '</li>');
    });

    // 5. Scroll
    var isScrollEnabled = false;
    $("#special-toolbar-scroll").click(function () {
        isScrollEnabled = !isScrollEnabled;

        if (isScrollEnabled)
            $("#scroll-bar-container").show();
        else
            $("#scroll-bar-container").hide();
    });

    // Invalidate window and document heights
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    setInterval(function () {
        windowHeight = $(window).height();
        documentHeight = $(document).height();
    }, 100);

    // Set progress bar
    var setProgress = function () {
        var windowScrollTop = $(window).scrollTop();

        var percentage = (windowScrollTop / (documentHeight - windowHeight)) * 100;
        if (percentage < 0) percentage = 0;
        if (percentage > 100) percentage = 100;

        $("#scroll-position-progress-bar").css("transform", "translateX(-" + (100 - percentage) + "%");
    };
    $(setProgress);
    $(window).scroll(setProgress);

    // 6. Bonus
    var j = 0;
    $('#special-toolbar-bright').click(function () {
        var themes = ["flatly", "litera", "lux", "simplex", "darkly"];
        if (j > themes.length - 1) {
            j = 0;
        }

        alert("Don't you think the website is too dark. When you click this button, it will be brighter. Be careful of your eyes.")

        $('link[rel=stylesheet][href*="bootswatch"]').remove();
        $('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.1.3/' + themes[j++] + '/bootstrap.min.css">');
    });
});
