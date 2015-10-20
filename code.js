
(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    

    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
    
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {

        global.UAM.aircrafts.push({
        code: newAircraftCode,
        services: []
    });
        return this;
        
    };
    
    function findindex (array, mycode) {
        for (var i=0; i < array.length ; i++)
            {
                if(array[i].code== mycode){
                    return i;
                }
            }
        
    };
    

    global.UAM.removeAircraft = function (aircraftObj) {
        
        index = findindex(global.UAM.aircrafts, aircraftObj);
        if (index > -1){
        global.UAM.aircrafts.splice(index, 1);
    
        }
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name_, timeToExecute_) {
        
        index = findindex(global.UAM.aircrafts, aircraftObj);
        global.UAM.aircrafts[index].services.push(
        {
            name: name_,
            timeToExecute: timeToExecute_
            
        });
                
    };
        
    global.UAM.reduceTimeToExecute = function(name_,time) {
        index = findindex(global.UAM.aircrafts, name_);
        for(var i=0; i <global.UAM.aircrafts[index].services.length;i++)
            {
                global.UAM.aircrafts[index].services[i].timeToExecute=global.UAM.aircrafts[index].services[i].timeToExecute-time;
            }
        
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        for (var i=0; i<global.UAM.aircrafts.length;i++)
            {
                
                for (var j=0; j<global.UAM.aircrafts[i].services.length;j++)
                    {
                        if (global.UAM.aircrafts[i].services[j].timeToExecute <= maxTimeToExecute)
                            {
                                    global.UAM.aircrafts[i].services[j]=undefined;
                            }
                            
                    }
            }
    }
    
/*
    var newAircraft1=global.UAM.addAircraft("SP-XY1");
    var newAircraft2=global.UAM.addAircraft("A");
    var newAircraft3=global.UAM.addAircraft("B");
    var newAircraft3=global.UAM.addAircraft("C");
    var newAircraft3=global.UAM.addAircraft("D");
    
    global.UAM.addWorkToAircraft('A','malowanie',110);
    global.UAM.addWorkToAircraft('A','sprzatanie',100);
    global.UAM.addWorkToAircraft('B','sprzatanie',120);
    global.UAM.addWorkToAircraft('B','sprzatanie',180);
    global.UAM.addWorkToAircraft('C','sprzatanie',170);
    global.UAM.reduceTimeToExecute('A',20);
    global.UAM.reduceTimeToExecute('B',60);    
    global.UAM.getAircraftsForRepairs(100);

*/

}(window));


