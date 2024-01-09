'use client'
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '200px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAXY-zoJAkqa4ZZFq9G1T4HImVKmZzhwG8"
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return (
        <>

            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */}

                </GoogleMap>
            ) : null
            }
        </>)
}

export default Map