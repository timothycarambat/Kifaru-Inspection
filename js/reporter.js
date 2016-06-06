$('#submit').click(function(){
	 $('#form').toggle(200);
	 $('#report').toggle(400);
	 $('#save').toggle();


	if($('#checkbox-1').prop('checked')) {
		$("#task1status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task1status").find('div').eq(1).removeClass('hidden');
	}

	if($('#checkbox-2').prop('checked')) {
		$("#task2status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task2status").find('div').eq(1).removeClass('hidden');
	}

	if($('#checkbox-3').prop('checked')) {
		$("#task3status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task3status").find('div').eq(1).removeClass('hidden');
	}

	if($('#checkbox-4').prop('checked')) {
		$("#task4status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task4status").find('div').eq(1).removeClass('hidden');
	}

	if($('#checkbox-5').prop('checked')) {
		$("#task5status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task5status").find('div').eq(1).removeClass('hidden');
	}

	if($('#checkbox-6').prop('checked')) {
		$("#task6status").find('div').eq(0).removeClass('hidden');
	    
	} else {
	    $("#task6status").find('div').eq(1).removeClass('hidden');
	}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////  Note Area ////////////////////////////////////////////////////

	if( $("#notebox1").val() !== ""){
			$("#task1notes").html( $("#notebox1").val());
	}

	if( $("#notebox2").val() !== ""){
			$("#task2notes").html( $("#notebox2").val());
	}

	if( $("#notebox3").val() !== ""){
			$("#task3notes").html( $("#notebox3").val());
	}

	if( $("#notebox4").val() !== ""){
			$("#task4notes").html( $("#notebox4").val());
	}

	if( $("#notebox5").val() !== ""){
			$("#task5notes").html( $("#notebox5").val());
	}

	if( $("#notebox6").val() !== ""){
			$("#task6notes").html( $("#notebox6").val());
	}

});//end Submit

// $("#save").click(function(){
// 	window.print();
// });

 $('#save').click(function(){
    html2canvas($('#report'), 
    {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'KifaruReport.jpg';
        a.click();
      },
      background: '#fff',
    });
  });




$(document).ready(function(){
			var d = new Date();
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
			var monthName = month[d.getMonth()];
			var date = d.getDate();
			var year = d.getFullYear();
			var currentDate= monthName+" "+date+', '+year;
			currentDate.toString();
			$('#currentDate').html(currentDate);
});