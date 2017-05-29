function almostIncreasingSequence(sequence) {
	
	if ( sequence.length === 2 )
		return true;
	
	var _sequence_status = true;

	for ( var i = 0; i < sequence.length; i++ )
	{
		var _sequence = new Array();
		for (var k = 0; k < sequence.length; k++) {
			_sequence.push(sequence[k]);
		}

		_sequence.splice( i, 1 );
		_sequence_status = true;
		for ( var j = 1; j < _sequence.length; j++ )
		{
			if ( _sequence[j-1] >= _sequence[j] )
			{
				_sequence_status = false;
				break;
			}
		}
		
		if ( _sequence_status )
		{
			return _sequence_status;
		}
			
	}
	
	return _sequence_status;
}

/*function almostIncreasingSequence(sequence) {
	var sequence_status = false;
	for (var i = 0; i < sequence.length; i++) 
	{	
		var j = 0;
		while (sequence_status && j<sequence.length)
		{
			if ( (j>1 && j<sequence.length-1) && ( (j<i-1 && sequence_status==(sequence[j]<sequence[j+1])) || (j==i && sequence_status==(sequence[j-1]<sequence[j+1])) || (j>i+1 && sequence_status==(sequence[j-1]<sequence[j]))) )
			{
				sequence_status = true;
			} 
			j++;
		}
	}
	return sequence_status;	
}*/

//console.log( almostIncreasingSequence([1, 2, 3, 4, 3, 6]) );



/*function matrixElementsSum(matrix) {
    
    var sum = 0;
    var arr_null = [];
    
    for ( var j = 0; j < matrix[0].length; j++ )
    {
        arr_null.push(1);
    }
    
    for ( var i = 0; i < matrix.length; i++ )
    {
        for ( var j = 0; j < matrix[i].length; j++ )
        {
            if ( matrix[i][j]==0 && arr_null[j]==1 )
            {
                for ( var k = i+1; k < matrix.length; k++ )
                {
                    matrix[k][j] = 0;
                }
                arr_null[j] = 0;
            }
        }
    }
    
    //console.log(matrix);

    for ( var i = 0; i < matrix.length; i++ )
    {
        for ( var j = 0; j < matrix[i].length; j++ )
        {
            if ( matrix[i][j]!==0 )
            {
                sum = sum + matrix[i][j];
            }
        }
    }
    
    return sum;
}

var matrix = [	[0, 1, 1, 2], 
          		[0, 5, 0, 0], 
          		[2, 0, 3, 3]	]

console.log( matrixElementsSum(matrix) );*/