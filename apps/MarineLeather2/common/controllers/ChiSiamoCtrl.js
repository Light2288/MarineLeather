/**
 * 
 */

appMarineLeather.controller('ChiSiamoCtrl',  ['$scope', '$location', function($scope,$location){
	$scope.$on('$ionicView.beforeEnter', function() {
		$scope.backButton.show = false;
		$scope.backButton.func = function() {};
    });

	$scope.chiSiamoItems = [
	                        {title:'Il nostro marchio',
	                        	text:"\"Marine Leather come esperienza straordinaria sensoriale." +
	                        	" Capacità di stupire anche l'occhio più smaliziato. Un fascino" +
	                        	" che supera i luoghi comuni e accende la fantasia. Suggestione " +
	                        	"ed emozione in una promessa che va oltre la semplice qualità\"",
	                        	image:'il_marchio'
	                        },
	                        {title:'Una storia di qualità scritta sulla pelle',
	                        	text:"L'accurata selezione delle materie prime, estrema creatività nella " +
	                        	"combinazione degli elementi, numerose gamme di colori e infinite " +
	                        	"sfumature fanno delle collezioni firmate Marine Leather qualcosa di " +
	                        	"unico e inimitabile. Grazie alla sperimentazione continua e alla " +
	                        	"grande passione e profonda conoscenza di tutti i segreti della " +
	                        	"concia, Marine Leather è oggi un marchio italiano leader nel mondo. " +
	                        	"Il punto di riferimento per chi ricerca o progetta ambienti esclusivi " +
	                        	"e di alto prestigio.",
	                        	image:'la_qualita'
	                        },
	                        {title:'L\'inizio',
	                        	text:"Nel 1930 Eduardo De Cesare decide di mettere a frutto la sua esperienza" +
	                        			" nel mondo delle pelli e fonda una piccola azienda artigiana specializzata" +
	                        			" nella lavorazione del cuoio. L’azienda s’impone immediatamente sul" +
	                        			" mercato per la maggiore morbidezza ed elasticità della concia finale," +
	                        			" straordinariamente malleabile. L’arte è tramandata al figlio Vincenzo" +
	                        			" e l’azienda si trasforma in una moderna e dinamica impresa, pur" +
	                        			" mantenendo viva la passione artigianale di un tempo.",
	                        	image:'la_qualita'
	                        },
	                        {title:'Il presente',
	                        	text:"La terza generazione De Cesare si misura con le nuove sfide tecnologiche," +
	                        			" l’arte si affina e nasce il marchio Marine Leather. Il risultato è un’" +
	                        			"innovativa collezione per arredi in pelle altamente personalizzati.Il " +
	                        			"successo è immediato. La passione, il desiderio di eccellere spinge ad " +
	                        			"andare oltre. Si aggiungono nuove, più ampie collezioni e la personalizzazione" +
	                        			" diventa ancora più estrema. Qualunque sia l’esigenza di arredo," +
	                        			" dalla semplice poltrona alla villa, dallo yacht al jet privato," +
	                        			" Marine Leather è il piacere esclusivo di distinguersi a pelle.",
	                        	image:'la_qualita'
	                        }

	                        ]
}]);