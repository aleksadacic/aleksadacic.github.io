$(document).ready(function () {
    let l = "л", ch = "ч", tj = "ћ", ii = "и", k = "к", d = "Д";
    let i = 0;
    let rec = setInterval(function() {
        if (i == 0) {
            $("#L").effect("shake")
            $("#L").html(l)
            $("#L").css("color", "red")
            $("#L").css("opacity", "0.4")
            $("#L").css("text-shadow", "0 0 20px rgba(255,0,0,0.7)")
            $("#L").effect("shake")
            setTimeout(function () {
                $("#L").html("l")
                $("#L").css("opacity", "unset");
                $("#L").css("text-shadow", "unset")
            }, 400);
        }
        else if (i == 1) {
            $("#II").effect("shake")
            $("#II").html(ii)
            $("#II").css("color", "red")
            $("#II").css("opacity", "0.4")
            $("#II").css("text-shadow", "0 0 20px rgba(255,0,0,0.7)")
            $("#II").effect("shake")
            setTimeout(function () {
                $("#II").html("i")
                $("#II").css("opacity", "unset");
                $("#II").css("text-shadow", "unset")
            }, 400);
        }
        else if (i == 2) {
            $("#CH").effect("shake")
            $("#CH").html(ch)
            $("#CH").css("color", "green")
            $("#CH").css("opacity", "0.4")
            $("#CH").css("text-shadow", "0 0 20px rgba(0,255,0,0.7)")
            $("#CH").effect("shake")
            setTimeout(function () {
                $("#CH").html("č")
                $("#CH").css("opacity", "unset");
                $("#CH").css("text-shadow", "unset")
            }, 400);
        }
        else if (i == 3) {
            $("#TJ").effect("shake")
            $("#TJ").html(tj)
            $("#TJ").css("color", "blue")
            $("#TJ").css("opacity", "0.4")
            $("#TJ").css("text-shadow", "0 0 20px rgba(0,0,255,0.7)")
            $("#TJ").effect("shake")
            setTimeout(function () {
                $("#TJ").css("opacity", "unset");
                $("#TJ").css("text-shadow", "unset")
            }, 400);
        }
        else if (i == 4) {
            $("#K").effect("shake")
            $("#K").html(k)
            $("#K").css("color", "green")
            $("#K").css("opacity", "0.4")
            $("#K").css("text-shadow", "0 0 20px rgba(0,255,0,0.7)")
            $("#K").effect("shake")
            setTimeout(function () {
                $("#K").html("k")
                $("#K").css("opacity", "unset");
                $("#K").css("text-shadow", "unset")
            }, 400);
        }
        else if (i == 5) {
            $("#D").effect("shake")
            $("#D").html(d)
            $("#D").css("color", "blue")
            $("#D").css("opacity", "0.4")
            $("#D").css("text-shadow", "0 0 20px rgba(0,0,255,0.7)")
            $("#D").effect("shake")
            setTimeout(function () {
                $("#D").html("D")
                $("#D").css("opacity", "unset");
                $("#D").css("text-shadow", "unset")
            }, 400);
        }

        i = i + 1;
        if (i >= 6)
            i = 0;
    }, 2500)
});
