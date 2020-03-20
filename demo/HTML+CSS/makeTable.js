(function ($) {
    $.fn.makeTable = function (arr1,arr2) {
        var arr = [];
        arr.push("<table>");
        arr.push("<tr>");
        for (var i =0;i<arr1.length;i++){
            arr.push("<th>");
            arr.push(arr1[i]);
            arr.push("</th>");
        }
        arr.push("</tr>");
        for (var j = 0;j<arr2.length;j++){
            arr.push("<tr>");
            for (var k in arr2[j]){
                arr.push("<td>");
                arr.push(arr2[j][k]);
                arr.push("</td>");
            }
            arr.push("</tr>");
        }

        arr.push("</table>");
        var str = arr.join("");
        $(this).html(str);
        return this;
    }
})(jQuery);