function main() {
    var h = parseInt("6");
    var m = parseInt("0");

    var TimeWord = function () {
    	fn = {};
    	fn.convertTime = function (h, m) {
    		var textTime = '';
    		var h = h;
    		var m = m;
    		var m_diff = (m>30) ? (30-m) : m;
    		var values = fn.getTextToMinute();
    		console.log(values);
    		if ( m_diff === 0 ) {
    			textTime += values.textMinute[h] + ' ' + values.textHourExact.clock;
    		} else if ( (m_diff>0 && m_diff<15) || (m_diff>15 && m_diff<30) ) {

    		} else if ( m_diff === 30 ) {
    			textTime += values.textMinute[h] + ' ' + values.textTypeDate.past;
    		}
    		console.log(textTime);
    	}
    	fn.getTextToMinute = function () {
    		var text = {};
    		text.textMinute = [
    			'',
    			'one',
    			'two',
    			'three',
    			'four',
    			'five',
    			'six',
    			'seven',
    			'eight',
    			'nine',
    			'ten',
    			'eleven',
    			'twelve',
    			'thirteen',
    			'fourteen',
    			'quarter',
    			'sixteen',
    			'seventeen',
    			'eighteen',
    			'nineteen',
    			'twenty',
    			'twenty one',
    			'twenty two',
    			'twenty three',
    			'twenty four',
    			'twenty five',
    			'twenty six',
    			'twenty seven',
    			'twenty eight',
    			'twenty nine',
    			'half',
    		];
    		text.textMinuteSP = {
    			minutes: 'minutes',
    			minute: 'minute'
    		}
    		text.textTypeDate = {
    			past: 'past',
    			to: 'to'
    		}
    		text.textHourExact = {
    			clock: 'o\' clock'
    		}
    		return text;
    	}

    	// return all function
    	return fn;
    }

    var t = new TimeWord();
    t.convertTime(h, m);
}

main();