$(document).ready(function(){


    $nav = $(".nav");                                      /**Inserting JavaScript for Collapse Option Menu*/
    $toggleCollapse=$(".toggle-collapse");



    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse");
    })


});