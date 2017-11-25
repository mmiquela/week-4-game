var ComputerRandomNumber = randomIntFromInterval(19,120);
var diamondRandom = randomIntFromInterval(1,12);
var rubyRandom = randomIntFromInterval(1,12);
var EmeraldRandom = randomIntFromInterval(1,12);
var SapphireRandom = randomIntFromInterval(1,12);
var Score = 0;
var Win = 0;
var Loss = 0;


	diamondRandom = randomIntFromInterval(1,12);
	rubyRandom =randomIntFromInterval(1,12);
	EmeraldRandom =randomIntFromInterval(1,12);
	SapphireRandom =randomIntFromInterval(1,12);

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function compareScoreandComputerRandom(){
	if(Score === ComputerRandomNumber){
	Win++;
	$('#WinsCounter').text(Win);
	$('#Wins').text("You Win!");
	ComputerRandomNumber = randomIntFromInterval(19,120);
	$('#StartNumber').text(ComputerRandomNumber);
	Score = 0;
	$('#TotScore').text(Score);
	diamondRandom = randomIntFromInterval(1,12);
	rubyRandom =randomIntFromInterval(1,12);
	EmeraldRandom =randomIntFromInterval(1,12);
	SapphireRandom =randomIntFromInterval(1,12);

	} else if(Score > ComputerRandomNumber){
	Loss++;
	$('#LossesCounter').html(Loss);
	$('#Wins').text("You Lose!");	
	ComputerRandomNumber = randomIntFromInterval(19,120);
	$('#StartNumber').text(ComputerRandomNumber);
	Score = 0;
	$('#TotScore').text(Score);
	diamondRandom = randomIntFromInterval(1,12);
	rubyRandom =randomIntFromInterval(1,12);
	EmeraldRandom =randomIntFromInterval(1,12);
	SapphireRandom =randomIntFromInterval(1,12);
	}
}

$('#StartNumber').text(ComputerRandomNumber);

$('#diamond').on('click',function(){
	Score += diamondRandom;
	$('#TotScore').text(Score);
	compareScoreandComputerRandom();
});

$('#ruby').on('click',function(){
	Score += rubyRandom;
	$('#TotScore').text(Score);
	compareScoreandComputerRandom();
});

$('#Emerald').on('click',function(){
	Score += EmeraldRandom;
	$('#TotScore').text(Score);
	compareScoreandComputerRandom();
});

$('#sapphire').on('click',function(){
	Score += SapphireRandom;
	$('#TotScore').text(Score);
	compareScoreandComputerRandom();
});

