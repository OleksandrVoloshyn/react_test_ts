import {FC} from 'react';
import {Outlet} from "react-router-dom";

import css from './CarPage.module.css'
import {CarForm, Cars} from "../../components";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <div className={css.wrap}>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarPage};