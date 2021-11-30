import React, { useState, useEffect} from 'react';
import CovidData from '../../components/_dashboard/app/CovidData';
import { Button } from '@mui/material';
import {
    AppMovie

} from '../../components/_dashboard/app';

function Movie() {
    const [condition, setCondition] = useState(false);
    const toggle = () => setCondition(!condition);
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    const renderCondition = condition
        ? <AppMovie />
        : null
    
    const renderBtn = condition
        ? '닫기'
        : '영화'
    
    return (
        <>
            <br/>
            <Button
            variant="contained"
            // component={RouterLink}
            onClick={toggle}
            to="#"
            // startIcon={<Icon icon={plusFill} />}
            >
                {renderBtn}
            </Button>
            {renderCondition}
        </>
    )
}

export default Movie;