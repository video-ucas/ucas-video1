// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function doSearch1(){
    var id = $("#search").val()
    alert("http://localhost:3000/player/"+id+"/show")
    var locaf = "http://localhost:3000/player/"+id+"/show"
    window.open('location',locaf,"_blank");
}

$(function(){
    $("#more").click(function(e){
        $.get("/generate_device_id", function(data){
            $("#deviceIDfield").val(data);
        });
        e.preventDefault();
    })
})