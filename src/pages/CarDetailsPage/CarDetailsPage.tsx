import {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {carService} from "../../services";
import {ICar} from "../../interfaces";

const CarDetailsPage: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [car, setCar] = useState<ICar | null>(null);

    useEffect(() => {
        carService.getById(id as string).then(({data}) => setCar(data))
    }, [id])

    return (
        <div>
            {car && <div>{JSON.stringify(car)}</div>}
        </div>
    );
};

export {CarDetailsPage};