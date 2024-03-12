$(document).ready(function(){
    var displayVal = ""
    
    $(".number").on("click", function(){
        var num = $(this).text()
        displayVal += num
        $("#display").val(displayVal)
    })

    $(".operator").on("click", function(){
        var operator = $(this).text()
        
        var lastCharIsOperator = displayVal.length > 0 && "+-*/".indexOf(displayVal.slice(-1)) !== -1

        if(operator === "C" || operator === "CE") {
            displayVal = ""
        } 
        else if(operator === "=") {
            $.post('/validate', { value: displayVal }, function(response) {
                alert(response.message);
            });
        }
        else if(operator === "+/-"){
            displayVal = parseFloat(displayVal) * -1
        }
        else if(operator === "<-") {
            displayVal = displayVal.slice(0, -1)
        }
        else if(!lastCharIsOperator) {
            displayVal += operator
        }

        $("#display").val(displayVal)
    })
})
