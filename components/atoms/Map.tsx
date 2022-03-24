import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {FormInput} from "../molecules/FormInput";

interface MapProps {
    defaultValue: any
}

export const Map = ({defaultValue}: MapProps) => {
    const mapRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(false)
    const [error, setSetError] = useState(false);


    useEffect(() => {
        initMap(defaultValue)
    },[])

    function initMap(address : string) {
        const geocoder = new google.maps.Geocoder();
        setLoading(true)
        setSetError(false)

        const map = new google.maps.Map(
            mapRef.current as HTMLDivElement,
            {
                zoom: 10
            }
        );

        geocoder.geocode({'address': address}, function (results: any, status: any) {
            if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
                setLoading(false)
            } else {
                setSetError(true)
                setLoading(false)
            }
        });
    }

    return (
        <>
            <FormInput onClick={(search: string) => initMap(search)} loading={loading} resError={error}/>

            <WrapperMap ref={mapRef}/>
        </>
    )
}

const WrapperMap = styled.div`
  height: 400px;
  width: 100%;
  background-color: #AFAFAF;
`