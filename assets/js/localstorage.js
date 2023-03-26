$(".like-btn").click( function() {

	$(this).toggleClass('clicked');
  event.preventDefault();

});



$(".panel-group_btn span").click(function(){
                       var btnStorage = $(this).attr("id");

                        if($(this).hasClass("clicked")) {
                            localStorage.setItem(btnStorage, 'Hafal');
                        } else {
                            localStorage.removeItem(btnStorage, 'Hafal');
                        }

                    });


                    $( ".panel-group_btn span" ).each(function() {
                      var mainlocalStorage = $( this ).attr( "id" );

                      if(localStorage.getItem(mainlocalStorage) == 'Hafal') {
                        $(this).addClass("clicked");
                    } else {
                        $(this).removeClass("clicked");
                    }



                    });