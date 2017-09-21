var express = require('express');
// var session    = require('express-session')
var bodyParser = require('body-parser');
var _ = require('Lodash');
// var myarrays = require('LoDashMerge.js');
var app = express();

app.get("/", function (req,res) {

    var myarrays = require("./LoDashMerge");
    
    // console.log(myarrays.arr1);
    // var getTotalPrice = function (el) { return _.pick(el, 'Options.Option[0].TotalPrice'); }
    // var out = _.merge(myarrays.arr1, _.map(myarrays.arr2, getTotalPrice));
    // res.status(200).json(out);

    // var mergedList = _.map(myarrays.arr1, function(item){
    //     return _.extend(item, _.find(myarrays.arr2, { HotelId: item.HotelId }));
    // });
    // res.status(200).json(mergedList);
    
    var a1 = [{ "id" : 1, "name" : "test", 
    "facilities": [
        {
          "id": 5964880,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "24-hour reception",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964881,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "Hotel safe",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964882,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "Currency exchange facilities",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964883,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "Wi-fi",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964884,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "NO Large pets allowed (over 5 kg)",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964885,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "NO Small pets allowed (under 5 kg)",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964886,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "NO Garage",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964887,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "YES Car park",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964888,
          "HotelId": 1,
          "FacilityType": "Hotel Facilities",
          "FacilityName": "YES Wheelchair-accessible",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964889,
          "HotelId": 1,
          "FacilityType": "Room Facilities",
          "FacilityName": "NO Smoking rooms",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964890,
          "HotelId": 1,
          "FacilityType": "Room Facilities",
          "FacilityName": "YES Disability-friendly bathroom",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964891,
          "HotelId": 1,
          "FacilityType": "Room Facilities",
          "FacilityName": "YES Wheelchair-accessible",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964892,
          "HotelId": 1,
          "FacilityType": "Hotel Information",
          "FacilityName": "Total number of rooms: 80",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964893,
          "HotelId": 1,
          "FacilityType": "Hotel Information",
          "FacilityName": "Category: 4 STARS",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 5964894,
          "HotelId": 1,
          "FacilityType": "Hotel Information",
          "FacilityName": "Hotel Chain: ACCOR HOTELS",
          "createdAt": null,
          "updatedAt": null
        }
      ],
      "images": [
        {
          "id": 385669,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/01-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385670,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/02-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385671,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/03-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385672,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/04-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385673,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/05-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385674,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/06-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385675,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/07-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385676,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/08-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385677,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/09-b.jpg",
          "createdAt": null,
          "updatedAt": null
        },
        {
          "id": 385678,
          "HotelId": 1,
          "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/10-b.jpg",
          "createdAt": null,
          "updatedAt": null
        }
      ],
      "descriptions": [
        {
          "id": 108438,
          "HotelId": 1,
          "Description": "This outstanding hotel is located some 27 kilometres southwest from Sydney Central Business District and just a 25-minute drive from Sydney International Airport. Its prime location provides easy access to some of the landmarks of the city, including Carrawood Park and Lansvale Reserve, both around 2 kilometres away. Parramatta CBD is a 22-minute drive away while nature lovers will find the popular Western Sydney Parklands just a 17-minute drive away. This elegant hotel provides a choice of spacious rooms featuring a contemporary dÃ©cor as well as modern conveniences for guests' to enjoy a memorable stay. Those eager to taste delicious local flavours will be tempted by the best Australian inspired modern cuisine served at the onsite restaurant.",
          "createdAt": null,
          "updatedAt": null
        }
      ]
  }, { "id" : 2, "name" : "test2" , 
  "facilities": [
    {
      "id": 5964880,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "24-hour reception",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964881,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "Hotel safe",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964882,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "Currency exchange facilities",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964883,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "Wi-fi",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964884,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "NO Large pets allowed (over 5 kg)",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964885,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "NO Small pets allowed (under 5 kg)",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964886,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "NO Garage",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964887,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "YES Car park",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964888,
      "HotelId": 1,
      "FacilityType": "Hotel Facilities",
      "FacilityName": "YES Wheelchair-accessible",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964889,
      "HotelId": 1,
      "FacilityType": "Room Facilities",
      "FacilityName": "NO Smoking rooms",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964890,
      "HotelId": 1,
      "FacilityType": "Room Facilities",
      "FacilityName": "YES Disability-friendly bathroom",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964891,
      "HotelId": 1,
      "FacilityType": "Room Facilities",
      "FacilityName": "YES Wheelchair-accessible",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964892,
      "HotelId": 1,
      "FacilityType": "Hotel Information",
      "FacilityName": "Total number of rooms: 80",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964893,
      "HotelId": 1,
      "FacilityType": "Hotel Information",
      "FacilityName": "Category: 4 STARS",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 5964894,
      "HotelId": 1,
      "FacilityType": "Hotel Information",
      "FacilityName": "Hotel Chain: ACCOR HOTELS",
      "createdAt": null,
      "updatedAt": null
    }
  ],
  "images": [
    {
      "id": 385669,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/01-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385670,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/02-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385671,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/03-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385672,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/04-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385673,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/05-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385674,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/06-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385675,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/07-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385676,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/08-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385677,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/09-b.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 385678,
      "HotelId": 1,
      "Image": "http://online.travellanda.com/photo/hotel/bf00b3d32a61153a/b7/b70680e6d46bc4ec/10-b.jpg",
      "createdAt": null,
      "updatedAt": null
    }
  ],
  "descriptions": [
    {
      "id": 108438,
      "HotelId": 1,
      "Description": "This outstanding hotel is located some 27 kilometres southwest from Sydney Central Business District and just a 25-minute drive from Sydney International Airport. Its prime location provides easy access to some of the landmarks of the city, including Carrawood Park and Lansvale Reserve, both around 2 kilometres away. Parramatta CBD is a 22-minute drive away while nature lovers will find the popular Western Sydney Parklands just a 17-minute drive away. This elegant hotel provides a choice of spacious rooms featuring a contemporary dÃ©cor as well as modern conveniences for guests' to enjoy a memorable stay. Those eager to taste delicious local flavours will be tempted by the best Australian inspired modern cuisine served at the onsite restaurant.",
      "createdAt": null,
      "updatedAt": null
    }
  ]
}]
    var a2 = [{ "id" : 1, "Options" : { "Option" : [ {"dsf":"dfd"}, {"dsf":"dfd"}, {"dsf":"dfd"}] }}, {"id" : 2, "Options" : { "Option" : [ {"dsf":"dfd"}, {"dsf":"dfd"}, {"dsf":"dfd"}] }}]
    // var mergedList = _.map(a1, function(item){
    //     return _.extend(item, _.find(a2, { id: item.id }));
    // });
    var mergedList = _.map(myarrays.arr1, function(item){
        return _.extend(item, _.find(myarrays.arr2, { HotelId: item.HotelId }));
    });
    res.status(200).json(mergedList);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(err) {
    if (!err)
        console.log("Site is running at port", app.get('port'));
    else console.log(err)
});