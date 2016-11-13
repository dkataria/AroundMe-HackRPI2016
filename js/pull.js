(function ($) {
    
    $('button').on('click', function () {
        var a=document.getElementById("33").innerHTML;
        var b=document.getElementById("34").innerHTML;
        var choice = $('select option:selected').text();
        console.log(choice.substring(4,choice.length)=="bored");
        // remove resultset if this has already been run
        $('.content ul').remove();
        
        // add spinner to indicate something is happening
        $('<i class="fa fa-refresh fa-spin"/>').appendTo('body');
        if(choice.substring(4,choice.length)=="bored"){
        $.getJSON('http://api.tripadvisor.com/api/partner/2.0/map/'+a+','+b+'/attractions?key=defc1a4e-90db-44a1-8154-807593947f66', function (data) {
            var items = [],
                $ul;
            
            var d = JSON.parse(JSON.stringify(data));
                
            $.each(d, function (key, val) {
        
                if(key=="data"){
                console.log('SUCCESS inside 0 ' +(key=="data"));
                
            $.each(d[key], function (key1, val1) {
                
               var addr1=val1.address_obj.street1;
                if(val1.address_obj.street2){
                    addr1=addr1+', '+val1.address_obj.street2;
                }
                 if(val1.address_obj.city){
                    addr1=addr1+', '+val1.address_obj.city;
                }
                if(val1.address_obj.state){
                    addr1=addr1+', '+val1.address_obj.state;
                }
                if(val1.address_obj.country){
                    addr1=addr1+', '+val1.address_obj.country;
                }
                if(val1.address_obj.postalcode){
                    addr1=addr1+', '+val1.address_obj.postalcode;
                }
                
                console.log('SUCCESS inside 1 ' +key);
                //iterate through the returned data and build a list
            items.push('<b>' + val1.name+'</b><br>'+addr1 + '<br> <b> Distance:</b>'+' ' + val1.distance + ' miles</li><br>'+' '+'<b>Rating:</b> '+val1.rating+ '</br><a href='+val1.see_all_photos+' target="_blank">Click for photos</a></br></br>');
            });         }  });

            // if no items were returned then add a message to that effect
            if (items.length < 1) {
                items.push('<li>No results for this ZIP code, try again!</li>');
            }
            
            // remove spinner
            $('.fa-spin').remove();
            
            // append list to page
            $ul = $('<ul />').appendTo('.content');
            
            //append list items to list
            $ul.append(items);
        });}
        
        if(choice.substring(4,choice.length)=="hungry"){
        $.getJSON('http://api.tripadvisor.com/api/partner/2.0/map/'+a+','+b+'/restaurants?key=defc1a4e-90db-44a1-8154-807593947f66', function (data) {
            var items = [],
                $ul;
            
            var d = JSON.parse(JSON.stringify(data));
                
            $.each(d, function (key, val) {
        
                if(key=="data"){
                console.log('SUCCESS inside 0 ' +(key=="data"));
                
            $.each(d[key], function (key1, val1) {
            var addr1=val1.address_obj.street1;
                if(val1.address_obj.street2){
                    addr1=addr1+', '+val1.address_obj.street2;
                }
                 if(val1.address_obj.city){
                    addr1=addr1+', '+val1.address_obj.city;
                }
                if(val1.address_obj.state){
                    addr1=addr1+', '+val1.address_obj.state;
                }
                if(val1.address_obj.country){
                    addr1=addr1+', '+val1.address_obj.country;
                }
                if(val1.address_obj.postalcode){
                    addr1=addr1+', '+val1.address_obj.postalcode;
                }
                
                console.log('SUCCESS inside 1 ' +key);
                //iterate through the returned data and build a list
                    items.push('<b>' + val1.name+'</b><br>'+addr1 + '<br> <b> Distance:</b>'+' ' + val1.distance + ' miles</li><br>'+' '+'<b>Rating:</b> '+val1.rating+ '</br><a href='+val1.see_all_photos+' target="_blank">Click for photos</a></br></br>');
    
            });         }  });

            // if no items were returned then add a message to that effect
            if (items.length < 1) {
                items.push('<li>No results for this ZIP code, try again!</li>');
            }
            
            // remove spinner
            $('.fa-spin').remove();
            
            // append list to page
            $ul = $('<ul />').appendTo('.content');
            
            //append list items to list
            $ul.append(items);
        });}

        
        
        
    });
}(jQuery));
