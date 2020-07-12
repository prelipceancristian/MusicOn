 
buzz.defaults.formats = [ 'wav' ]; 
buzz.defaults.preload = 'metadata'; 

var keys = [  
	{ img: 'c.png' , sound: 'c' },
	{ img: 'csharp.png' , sound: 'csharp' },
    { img: 'd.png', sound: 'd' },
	{ img: 'dsharp.png' , sound: 'dsharp' },  
	{ img: 'e.png' , sound: 'e' },
	{ img: 'f.png' , sound: 'f' },
	{ img: 'fsharp.png' , sound: 'fsharp' },
	{ img: 'g.png' , sound: 'g' },
	{ img: 'gsharp.png' , sound: 'gsharp' },
	{ img: 'a.png' , sound: 'a' },
	{ img: 'asharp.png' , sound: 'asharp' },
	{ img: 'b.png' , sound: 'b' }
];                                                                            


$( function() {
    if ( !buzz.isSupported() ) {
        $('#warning').show(); 
    }

    var idx = 0,
        $container  = $( '#container' ),
        $sent    = $( '#sent' );


    function buildPiano() {
 
        // Build model  
        var fLen = keys.length; 
		 
		for (i = 0; i < fLen; i++) {
			var letter = keys[i].sound;
			$sent.append( '<img id="' + letter + '" src=' + keys[i].img + ' alt="' + letter + '">');
		}
		
		$( 'img' ).mousedown( function() {
				var id = $(this).attr('alt');
				var snckSndsply = new buzz.sound(id);
				snckSndsply.play();
            
            });
        
    }

    buildPiano( idx );
});