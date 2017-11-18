// Random Quotes

var Quotation=new Array()

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
Quotation[13] = '"You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend."';

function showQuotation() {
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

document.getElementById("quoteDiv").innerHTML = (Quotation[whichQuotation] + " - Bruce Lee");
}

