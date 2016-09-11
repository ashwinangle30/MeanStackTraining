var hotelData = require('../data/hotel-data.json');

module.exports.getAllHotels = function(req,res){
	console.log("Get the Hotels");
	console.log(req.query);

	var offset = 0;
	var count = 5;

	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset,10);
	}

	if(req.query && req.query.count){
		count = parseInt(req.query.count,10);
	}

	var returnData = hotelData.slice(offset,offset+count);

	res.status(200).json(returnData);
};

module.exports.getOneHotel = function(req,res){
	var hotelId = req.params.hotelId;
	var thisHotel = hotelData[hotelId];
	console.log("Get hotelId: "+hotelId);
	console.log("Get the Hotels");
	res.status(200).json(thisHotel);
};

module.exports.addOneHotel = function(req,res){
	console.log("POST the Hotels");
	console.log(req.body);

	res.status(200).json(req.body);
};	