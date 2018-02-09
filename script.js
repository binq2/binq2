console.log("this works");
$("#links a").click(function(e){       
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, "slow");
});
