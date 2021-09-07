// $(document).ready(function () {
//     let l = "л", ch = "ч", tj = "ћ", ii = "и", k = "к", d = "Д";
//     let i = 0;
//     let rec = setInterval(function() {
//         if (i == 0) {
//             $("#L").effect("shake", {times: 50}, 100)
//             $("#L").html(l)
//             $("#L").css("color", "red")
//             $("#L").css("opacity", "0.6")
//             $("#L").css("text-shadow", "0 0 20px rgba(255,0,0,0.7)")
//             setTimeout(function () {
//                 $("#L").css("text-shadow", "unset")
//                 $("#L").css("opacity", "unset");
//                 $("#L").html("l")
//             }, 650);
//         }
//         else if (i == 1) {
//             $("#II").effect("shake", {times: 50}, 100)
//             $("#II").html(ii)
//             $("#II").css("color", "red")
//             $("#II").css("opacity", "0.4")
//             $("#II").css("text-shadow", "0 0 20px rgba(255,0,0,0.7)")
//             setTimeout(function () {
//                 $("#II").css("text-shadow", "unset")
//                 $("#II").css("opacity", "unset");
//                 $("#II").html("i")
//             }, 400);
//         }
//         else if (i == 2) {
//             $("#CH").effect("shake", {times: 50}, 100)
//             $("#CH").html(ch)
//             $("#CH").css("color", "green")
//             $("#CH").css("opacity", "0.4")
//             $("#CH").css("text-shadow", "0 0 20px rgba(0,255,0,0.7)")
//             setTimeout(function () {
//                 $("#CH").css("text-shadow", "unset")
//                 $("#CH").css("opacity", "unset");
//                 $("#CH").html("č")
//             }, 400);
//         }
//         else if (i == 3) {
//             $("#TJ").effect("shake", {times: 50}, 100)
//             $("#TJ").html(tj)
//             $("#TJ").css("color", "blue")
//             $("#TJ").css("opacity", "0.4")
//             $("#TJ").css("text-shadow", "0 0 20px rgba(0,0,255,0.7)")
//             setTimeout(function () {
//                 $("#TJ").css("text-shadow", "unset")
//                 $("#TJ").css("opacity", "unset");
//                 $("#TJ").html("ć")
//             }, 400);
//         }
//         else if (i == 4) {
//             $("#K").effect("shake", {times: 50}, 100)
//             $("#K").html(k)
//             $("#K").css("color", "green")
//             $("#K").css("opacity", "0.4")
//             $("#K").css("text-shadow", "0 0 20px rgba(0,255,0,0.7)")
//             setTimeout(function () {
//                 $("#K").css("text-shadow", "unset")
//                 $("#K").css("opacity", "unset");
//                 $("#K").html("k")
//             }, 400);
//         }
//         else if (i == 5) {
//             $("#D").effect("shake", {times: 50}, 100)
//             $("#D").html(d)
//             $("#D").css("color", "blue")
//             $("#D").css("opacity", "0.4")
//             $("#D").css("text-shadow", "0 0 20px rgba(0,0,255,0.7)")
//             setTimeout(function () {
//                 $("#D").css("text-shadow", "unset")
//                 $("#D").css("opacity", "unset");
//                 $("#D").html("D")
//             }, 400);
//         }
//
//         i = i + 1;
//         if (i >= 6)
//             i = 0;
//     }, 2500)
// });
