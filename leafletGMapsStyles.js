if (L !== undefined && L.hasOwnProperty('Google')) {
    L.Google = L.Google.extend({

        _initMapObject_: L.Google.prototype._initMapObject,

        _initMapObject: function () {
            this._initMapObject_();
            this.setStyles();
        },

        setStyles: function () {
            var newStyles = [{
                elementType: "all",
                stylers: [ { saturation: -100 } ]
            }];

            var mapType = new google.maps.StyledMapType(newStyles, { name: 'Grayscale' });
            this._google.mapTypes.set('gray', mapType);
            this._google.setMapTypeId('gray');
        }

    });
}
