var intViewportHeight = window.innerHeight;
var Height2 = intViewportHeight / 2;

$('.main').css('height', intViewportHeight);
$('.bg_main_content').css('height', intViewportHeight);
$('.test').css('height', intViewportHeight);
if($(window).width() < '420'){
	$('.test .test_content').css('margin-top', Height2 + 'px');
}
setInterval(function(){
	var intViewportHeight = window.innerHeight;
	var Height2 = intViewportHeight / 2;
	$('.main').css('height', intViewportHeight);
	$('.bg_main_content').css('height', intViewportHeight);
	$('.test').css('height', intViewportHeight);
	if($(window).width() < '420'){
		$('.test .test_content').css('margin-top', Height2 + 'px');
	}
 }, 50);

$(document).ready( function(){
	if ($('.main').html() != undefined) {
		$(".test").css("display", "none"); 
	}else{
		$('.test').css('display', 'flex');
	}

	if ($('.content_inside_four').html() != undefined) {
		$('.test').css('background-color', '#fff');
	}
});

// Check radio
$('#radio_one').on("click", function(){
	$('.content_inside_one').fadeOut(500);
	setTimeout(function(){
		$('.content_inside_two').fadeIn(500);
	}, 500);
});
$('#radio_two').on("click", function(){
	$('.content_inside_one').fadeOut(500);
	setTimeout(function(){
		$('.content_inside_two').fadeIn(500);
	}, 500);
});
$('#radio_three').on("click", function(){
	$('.content_inside_one').fadeOut(500);
	setTimeout(function(){
		$('.content_inside_two').fadeIn(500);
	}, 500);
});

// Go to question
$('#main_button').on("click", function(){
	$('.test').css('display', 'flex');
	$('.main').fadeOut(500);
	$('.content_inside_one').fadeIn(500);	
});
// Go to back question
$('#test_button_one_back').on("click", function(){
	$('.test').css('display', 'flex');
	$('.content_inside_one').fadeOut(500);
	$('.main').fadeIn(500);	
});
$('#test_button_two_back').on("click", function(){
	$('.test').css('display', 'flex');
	$('.content_inside_two').fadeOut(500);
	$('.content_inside_one').fadeIn(500);	
});
$('#test_button_three_back').on("click", function(){
	$('.test').css('display', 'flex');
	$('.content_inside_three').fadeOut(500);
	$('.content_inside_two').fadeIn(500);
	// Mark
	setTimeout(function(){
		$('#mark_cont').css('display', 'none');
		$('#mark_cont').removeClass('mark_cont');
		$('.test_line').removeClass('test_line_new');
		$('.test_button').removeClass('test_button_new');
		$('.content_inside_three').removeClass('content_inside_mark');
	}, 300);
});

// Phone viev
let viev = $(".view_organization");
if($(window).width() <= '600'){
	viev.remove();
	$(".middle").append("<div class='view_organization'><div class='view_wrapper'><h2 class='view_title'></h2><span class='open'>Откроется в 09:00</span><div class='work_time'><div><span class='work_monday'></span></div><div><span class='work_tuesday'></span></div><div><span class='work_wednesday'></span></div><div><span class='work_thursday'></span></div><div><span class='work_friday'></span></div><div><span class='work_saturday'></span></div><div><span class='work_sunday'></span></div></div><span class='phones'></span><p class='address'></p></div></div>");
	$(".middle").css('order', '0');
}

// Check test
$('#radio_one').on("click", function(){
	$('#test_button_one').animate({
    	opacity: 1,
    });
	$('#test_button_one').on("click", function(){		
		$('.content_inside_one').fadeOut(500);
		setTimeout(function(){
			$('.content_inside_two').fadeIn(500);
		}, 500);
	})
});
$('#radio_two').on("click", function(){
	$('#test_button_one').animate({
    	opacity: 1,
    });
	$('#test_button_one').on("click", function(){		
		$('.content_inside_one').fadeOut(500);
		setTimeout(function(){
			$('.content_inside_two').fadeIn(500);
		}, 500);
	})
});
$('#radio_three').on("click", function(){
	$('#test_button_one').animate({
    	opacity: 1,
    });
	$('#test_button_one').on("click", function(){		
		$('.content_inside_one').fadeOut(500);
		setTimeout(function(){
			$('.content_inside_two').fadeIn(500);
		}, 500);
	})
});

//Two
$('.content_inside_two .drop_menu li').on('click', function(){
  	$('#test_button_two').animate({
    	opacity: 1,
    });
})    
$('.content_inside_two .drop_menu li').on('click', function(){
    $('.content_inside_two .drop_list').css('color', 'black');
  	$('.content_inside_two').fadeOut(500);
	// Mark
	setTimeout(function(){
		$('.content_inside_three').fadeIn(500);
		if ($(window).width() > '767'){
			$('#mark_cont').css('display', 'inline');
		}
		$('#mark_cont').addClass('mark_cont');
		$('.test_line').addClass('test_line_new');
		$('.test_button').addClass('test_button_new');
		$('.content_inside_three').addClass('content_inside_mark');
	}, 500);
})
$('#test_button_two').on("click", function(){
  	if ($('.content_inside_two .drop_list input').val() != '') {
	  	$('.content_inside_two .drop_list').css('color', 'black');
	  	$('.content_inside_two').fadeOut(500);
		// Mark
		setTimeout(function(){
			$('.content_inside_three').fadeIn(500);
			if ($(window).width() > '767'){
				$('#mark_cont').css('display', 'inline');
			}
			$('#mark_cont').addClass('mark_cont');
			$('.test_line').addClass('test_line_new');
			$('.test_button').addClass('test_button_new');
			$('.content_inside_three').addClass('content_inside_mark');
		}, 500);
  	}
})

//Three
$('.content_inside_three .drop_menu li').on('click', function(){
  	$('#test_button_three').animate({
    	opacity: 1,
    });
})
$('.content_inside_three .drop_menu li').on('click', function(){
  	$('.content_inside_three .drop_list').css('color', 'black');
  	$('.content_inside_three').fadeOut(500);
  	document.location.href = "your-org.html";
})
$('#test_button_three').on("click", function(){
  	if ($('.content_inside_three .drop_list input').val() != '') {
	  	$('.content_inside_three .drop_list').css('color', 'black');
	  	$('.content_inside_three').fadeOut(500);
	  	document.location.href = "your-org.html";
  	}
})

// API
let work_monday;
jQuery(function($){
	fetch('https://api.moygorod.mobi/api/v2/organization/1853823', {method: 'GET', headers:{'X-Moygorod-Application-Id': 30}})
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	    console.log(data);
	    // Your org
	    $('.view_title').html(data.response.organization.title);
	    work_monday = data.response.organization.work_monday;
	    work_tuesday = data.response.organization.work_tuesday;
	    work_wednesday = data.response.organization.work_wednesday;
	    work_thursday = data.response.organization.work_thursday;
	    work_friday = data.response.organization.work_friday;
	    work_saturday = data.response.organization.work_saturday;
	    work_sunday = data.response.organization.work_sunday;
	    $('.phones').html(data.response.organization.phones);
	    $('.address').html(data.response.organization.address);
	    
	    var arr = work_monday.split('-');
		$('.work_monday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_tuesday.split('-');
		$('.work_tuesday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_wednesday.split('-');
		$('.work_wednesday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_thursday.split('-');
		$('.work_thursday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_friday.split('-');
		$('.work_friday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_saturday.split('-');
		$('.work_saturday').html(arr[0] + "<br>" + arr[1]);
		var arr = work_sunday.split('-');
		$('.work_sunday').html(arr[0] + "<br>" + arr[1]);

	    $( '.name_place' ).attr( 'value', data.response.organization.title);
	    $( '.name_mail' ).attr( 'value', data.response.organization.email);
	    
	  })
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);  
	 });
});

// Option
$('.drop_list').on("click", function(){
	$('.drop_list input').focus();
});
$('.arrow').on("click", function(){
	$('.drop_list input').focus();
});
$('.drop_list input').on("focus", function(){
	$('.drop_menu .drop_content').addClass("drop_activ");
	$('.drop_list').css('border', 'solid #D34085 1px');
	// Panel off on mobile
	$('.content_inside_two .test_line').css('display', 'none');
	$('.content_inside_two .test_button').css('display', 'none');
	$('.content_inside_three .test_line').css('display', 'none');
	$('.content_inside_three .test_button').css('display', 'none');
	// Click out
	$(document).mouseup(function(e){
		let div = $(".drop_list");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.drop_menu .drop_content').removeClass("drop_activ");
			$('.drop_list').css('border', 'solid #E6E6E6 1px');
			// Panel on on mobile
			setTimeout(function(){
				$('.content_inside_two .test_line').css('display', 'block');
				$('.content_inside_two .test_button').css('display', 'block');
				$('.content_inside_three .test_line').css('display', 'block');
				$('.content_inside_three .test_button').css('display', 'block');
			 }, 200);
		}
	});
});
$('.content_inside_two .drop_content li').on("click", function(){
	let value = $(this).text();
	$('.content_inside_two .drop_list input').val(value);
});
$('.content_inside_three .drop_content li').on("click", function(){
	let value = $(this).text();
	$('.content_inside_three .drop_list input').val(value);
});

// add-phone
let number_count = 0;
$('.content_inside_eight .number_plus').on('click', function(){
	if(number_count < 4){
		number_count++;
		for (var i = 1; i < 5; i++) {
			if ($('.phone_block').eq(i).css('display') == 'none') {
				$('.phone_block').eq(i).css('display', 'flex');
				break;
			}
		}
	}
});
$('.add_number_one .number_close').on('click', function(){
	$('.add_number_one').css('display', 'none');
	$('.add_number_one input').val('');
	number_count--;
});
$('.add_number_two .number_close').on('click', function(){
	$('.add_number_two').css('display', 'none');
	$('.add_number_two input').val('');
	number_count--;
});
$('.add_number_three .number_close').on('click', function(){
	$('.add_number_three').css('display', 'none');
	$('.add_number_three input').val('');
	number_count--;
});
$('.add_number_four .number_close').on('click', function(){
	$('.add_number_four').css('display', 'none');
	$('.add_number_four input').val('');
	number_count--;
});

// add-btn-block
let btn_count = false;
$('.content_inside_ten .number_plus').on('click', function(){
	if(btn_count == false){
		$('.btn_block').css('display', 'flex');
		btn_count = true;
	}
});
$('.add_btn_block_one .number_close').on('click', function(){
	$('.add_btn_block_one').css('display', 'none');
	$('.add_btn_block_one input').val('');
	btn_count = false;
});