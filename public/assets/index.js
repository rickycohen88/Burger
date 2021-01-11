$(document).ready(function(){
    $(".devour-button").on("click", function(event) {
        

        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(){
            location.reload();
        })
    });

    $(".add-burger-button").on("click", function(event){
        event.preventDefault();

        // console.log("post button clicked");
        let newBurger = {
            name: $("#newBurger").val().trim()
        }
        if(newBurger.name ===""){
            alert("Cannot leave field empty");
        } else {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                console.log("new burger added");
                location.reload();
            });
        }
    });

    $(".delete-eaten-button").on("click",function(event){
       
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id,{
            type:"DELETE"
        }).then(function(){
            location.reload();
        })
    });
})