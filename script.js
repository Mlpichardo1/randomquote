/* global $ */
// Random Quotes
var currentQuote = '';
var Quotation = new Array()
Quotation[0] = '"I’m not in this world to live up to your expectations and you’re not in this world to live up to mine."';
Quotation[1] = '"If you spend too much time thinking about a thing, you’ll never get it done."';
Quotation[2] = '"Do not pray for an easy life, pray for the strength to endure a difficult one."';
Quotation[3] = '"A wise man can learn more from a foolish question than a fool can learn from a wise answer."';
Quotation[4] = '"Absorb what is useful, discard what is useless and add what is specifically your own."';
Quotation[5] = '"Mistakes are always forgivable, if one has the courage to admit them."';
Quotation[6] = '"To hell with circumstances; I create opportunities."';
Quotation[7] = '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times."';
Quotation[8] = '"Real living is living for others."';
Quotation[9] = '"The more we value things, the less we value ourselves."';
Quotation[10] = '"Knowing is not enough, we must apply. Willing is not enough, we must do."';
Quotation[11] = '"For it is easy to criticize and break down the spirit of others, but to know yourself takes a lifetime."';
Quotation[12] = '"Be happy, but never satisfied."';
Quotation[13] = '"You must be shapeless, formless, like water."';

function setRandomQuote() {
	currentQuote = Quotation[Math.round(Math.random() * Quotation.length)];
	$('#quote').html(currentQuote + " - Bruce Lee");
	$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote).attr('target', '_blank');
	// 	$('#postQuote').attr('href', "https://www.facebook.com/20531316728/posts/10154009990506729/"+currentQuote).attr('target', '_blank');
}
$(function() {
	$('#randomQuote').click(function() {
		setRandomQuote();
	});
});



