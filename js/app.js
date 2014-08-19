$(document).ready(function(){

	$('#body').delay(300).toggle("slide", {direction: "up"}, 600, function(){
		$('.start-button').delay(300).toggle("bounce");
	});

	$('.start-button').on('click', function(){
		$('.intro').animate({'opacity' : '0'}, function(){
			$(this).remove();
			$('.container').toggle("slide", {direction: "up"}, 600);

			loadQuestion();
		})
	})

	$('.answer-choices li button').on('click', function(){
		pickedAnswer = $(this).parent().index();
		getAnswer();
		$(this).parent().addClass('selected');
	});

	$('.next').on('click', function(){
		$('.feedback').removeClass('feedback-correct');	
		$('.feedback').removeClass('feedback-wrong');											
		$('.answer-choices li').removeClass('selected');
		$('.container').toggle("slide", {direction: "down"}, 300);
		nextQuestion();

		
	});

	$('#play-again').on('click', function(){		
		i = 0;
		score = 0;
		$('.final').empty();
		$('.container').css({'display' : 'block'});
		$('.end').css({'display' : 'none'});
		loadQuestion();
	})		

	$('#new').on('click', function(){		
		location.reload();
	})

	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").toggle("slide", {direction: "up"}, 600);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
    	$(".overlay").toggle("slide", {direction: "down"}, 600);
  	});

function loadQuestion (){
	currentQuestion = i+1;
	$('.question h2').prepend(quiz[i].question);
	$('.answer1 span').prepend(quiz[i].multipleChoice[0]);
	$('.answer2 span').prepend(quiz[i].multipleChoice[1]);
	$('.answer3 span').prepend(quiz[i].multipleChoice[2]);
	$('.answer4 span').prepend(quiz[i].multipleChoice[3]);
	$('.question-counter span').prepend(currentQuestion);
	$('.score-counter span').prepend(score);
}

function nextQuestion (){	
	$('.question h2').empty();
	$('.answer-choices li span').empty();
	$('.question-counter span').empty();
	$('.score-counter span').empty();
	$('.feedback p').empty();
	$('.feedback').css({'display' : 'none'});
	$('.scoreboard').css({'display' : 'block'});
	$('.answer-choices li button').removeAttr('disabled', 'disabled');
	if( i < 5){		
			loadQuestion();
			$('.container').toggle("slide", {direction: "down"}, 600);

	} else {
		$('.end').css({'display' : 'block'});
		$('.container').css({'display' : 'none'});
		$('.final').prepend(score);
	}	

}	

var quiz = [
	{
		question: "Which album/artist is NOT tied for most top 10 singles from one album?",
		multipleChoice: [
			"Michael Jackson - Thriller",
			"Bruce Springsteen - Born in the USA",
			"Janet Jackson - Janet Jackson's Rhythm Nation 1814",
			"George Michael - Faith"
		],
		correctAnswer: 3,
		correctExplanation: "Correct! Michael Jackson, Bruce Springsteen and Janet Jackson each had seven top 10 singles from one album. George Michael had only six top 10 singles from his album, \"Faith.\"",
		incorrectExplanation: "Incorrect. Correct answer: George Michael - Faith. Michael Jackson, Bruce Springsteen and Janet Jackson each had seven top 10 singles from one album. George Michael had only six top 10 singles from his album, \"Faith.\"",
	},

	{
		question: "Michael Jackson's Billboard record for most number-one singles from one album (for his album \"Bad\") has since been tied by another artist.  Who has tied his historic record?",
		multipleChoice: [
			"Janet Jackson",
			"Katy Perry",
			"Madonna",
			"Mariah Carey"
		],
		correctAnswer: 1,
		correctExplanation: "Correct! In 2011, Katy Perry became the first woman, and second artist overall following Michael Jackson, in the history of the Billboard Hot 100, to send five songs from an album to No. 1 when \"Last Friday Night (T.G.I.F.)\" became the fifth chart topper from her album, \"Teenage Dream.\"",
		incorrectExplanation: "Incorrect. In 2011, Katy Perry became the first woman, and second artist overall following Michael Jackson, in the history of the Billboard Hot 100, to send five songs from an album to No. 1 when \"Last Friday Night (T.G.I.F.)\" became the fifth chart topper from her album, \"Teenage Dream.\"",
	},

	{
		question: "Who holds the record for being the youngest artist to write, produce, and perform a #1 single on the Billboard Hot 100?",
		multipleChoice: [
			"Debbie Gibson",
			"Michael Jackson",
			"Stevie Wonder",
			"Lorde"
		],
		correctAnswer: 0,
		correctExplanation: "Correct! Debbie Gibson (age 17 years, 299 days or 17 years, 9 months, and 25 days) became the youngest artist to write, produce, and perform a #1 single on the Billboard Hot 100 when her song \"Foolish Beat\" topped the chart on June 25, 1988.",
		incorrectExplanation: "Incorrect. Debbie Gibson (age 17 years, 299 days or 17 years, 9 months, and 25 days) became the youngest artist to write, produce, and perform a #1 single on the Billboard Hot 100 when her song \"Foolish Beat\" topped the chart on June 25, 1988.",
	},

	{
		question: "Which American Idol winner did NOT see their first single (aka their coronation song) debut at #1 on the Billboard Hot 100?",
		multipleChoice: [
			"Fantasia — \"I Believe\"",
			"Carrie Underwood — \"Inside Your Heaven\"",
			"Taylor Hicks — \"Do I Make You Proud\"",
			"Phillip Phillips - \"Home\""
		],
		correctAnswer: 3,
		correctExplanation: "Correct! \"Home\" by Phillips Phillips debuted at number 10 and topped out at number 6, but did go on to become the best selling of all Idol coronation songs.",
		incorrectExplanation: "Incorrect. \"Home\" by Phillips Phillips debuted at number 10 and topped out at number 6, but did go on to become the best selling of all Idol coronation songs.",
	},

	{
		question: "Which two artists have tied the record for most and second-most weeks at #1?",
		multipleChoice: [
			"Michael Jackson and Madonna",
			"Michael Jackson and Elton John",
			"Mariah Carey and Boyz II Men",
			"Mariah Carey and Whitney Houston"
		],
		correctAnswer: 2,
		correctExplanation: "Correct! In November 1994, Boyz II Men tied Whitney Houston's record (at the time) for most weeks at #1 (14 weeks) with their hit, \"I'll Make Love to You.\" Less than two years later, they displaced themselves to second place by breaking their own record with \"One Sweet Day,\" their collaboration with Mariah Carey. It remained at #1 for 16 weeks. In 2005, Mariah Carey tied the second-place spot when her single \"We Belong Together\" remained at #1 for 14 weeks.",
		incorrectExplanation: "Incorrect. In November 1994, Boyz II Men tied Whitney Houston's record (at the time) for most weeks at #1 (14 weeks) with their hit, \"I'll Make Love to You.\" Less than two years later, they displaced themselves to second place by breaking their own record with \"One Sweet Day,\" their collaboration with Mariah Carey. It remained at #1 for 16 weeks. In 2005, Mariah Carey tied the second-place spot when her single \"We Belong Together\" remained at #1 for 14 weeks.",
	}
]

var score = 0;

var i = 0;

var currentQuestion;

var pickedAnswer;


var getAnswer = function(){	
		console.log('getAnswer');		
		console.log(pickedAnswer);		
		$('.scoreboard').css({'display' : 'none'})	
		$('.feedback').css({'display' : 'block'})	
		$('.answer-choices li button').attr('disabled', 'disabled')	
		if (pickedAnswer == quiz[i].correctAnswer){	
			$('.feedback').addClass('feedback-correct')							
			$('.feedback p').prepend(quiz[i].correctExplanation)
			score == score ++;
							
		} else{			
			$('.feedback').addClass('feedback-wrong')									
			$('.feedback p').prepend(quiz[i].incorrectExplanation)
		}
		i==i++;		
}



});