var timer = 0;
var interval = 0;

function onTimerClick() {
	if(interval) clearInterval(interval);

	timer = Number.parseInt($('#timerInput').val());
	$("#counterLabel").html(timer).removeClass('blink');

	interval = setInterval(function(){ 
		timer--;
		$("#counterLabel").html(timer);
		if(timer <= 3) $("#counterLabel").addClass("blink");
	}, 1000);
}