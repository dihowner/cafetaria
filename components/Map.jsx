'use client'
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { HiOutlineLocationMarker } from 'react-icons/hi'

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
            <div className="flex w-full flex-col gap-y-2">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                    </GoogleMap>
                ) : null
                }
                <label htmlFor="" className='font-bold'>Business location</label>
                <div className="bg-[#83838326] flex items-center gap-x-2 py-1 px-1 text-sm w-[80%] sm:w-[70%] md:w-[70%] rounded-xl">
                    <span><HiOutlineLocationMarker /></span>
                    <input type="text" placeholder='Enter manually' className='bg-[transparent] outline-none border-none w-[100%]' />
                </div>
            </div>

        </>)
}

export default Map