import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import PerformNumbersAnalysis from '../../components/analysis/culture/PerformNumbersAnalysis';
import TicketingNumbersAnalysis from '../../components/analysis/culture/TicketingNumbersAnalysis';
import KoreaAudienceAnalysis from '../../components/analysis/culture/KoreaAudienceAnalysis';
import KoreaSalesAnalysis from '../../components/analysis/culture/KoreaSalesAnalysis';
import OverseasAudienceAnalysis from '../../components/analysis/culture/OverseasAudienceAnalysis';
import OverseasSalesAnalysis from '../../components/analysis/culture/OverseasSalesAnalysis';
import TotalAudienceAnalysis from '../../components/analysis/culture/TotalAudienceAnalysis';
import TotalSalesAnalysis from '../../components/analysis/culture/TotalSalesAnalysis';


function CultureAnalysisBtn() {
    const [condition, setCondition] = useState(false);
    const [pageCond, setPageCond] = useState("0");
    const toggle = () => {
        if (pageCond === '0') {
            setCondition(false);
            alert('항목을 선택해주세요.');
        } else {setCondition(!condition);}
    }
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    function showAnalysis(pageCond) {
        switch (pageCond) {
            case '0':
                setCondition(false)
                return null;
            case '1': return <PerformNumbersAnalysis />;
            case '2': return <TicketingNumbersAnalysis />;
            case '3': return <KoreaSalesAnalysis />;
            case '4': return <KoreaAudienceAnalysis />;
            case '5': return <OverseasSalesAnalysis />;
            case '6': return <OverseasAudienceAnalysis />;
            case '7': return <TotalSalesAnalysis />;
            case '8': return <TotalAudienceAnalysis />;
        }
    }
    const renderCondition = condition
        ? showAnalysis(pageCond)
        : null
    const renderBtn = condition
        ? '분석창 닫기'
        : '분석창 열기'
        
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
            <FormControl style={{marginLeft: '20px'}}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    분석 항목
                </InputLabel>
                <NativeSelect
                    defaultValue={0}
                    onChange={(e) => {
                        const selectedPage = e.target.value;
                        setPageCond(selectedPage);
                    }}
                >
                    <option value={0}>없음</option>
                    <optgroup label="공연">
                        <option value={1}>상연 횟수</option>
                        <option value={2}>예매수</option>
                    </optgroup>
                    <optgroup label="영화">
                        <option value={3}>한국 영화 매출액</option>
                        <option value={4}>한국 영화 관객수</option>
                        <option value={5}>외국 영화 판매액</option>
                        <option value={6}>외국 영화 관객수</option>
                        <option value={7}>전체 매출액</option>
                        <option value={8}>전체 관객수</option>
                    </optgroup>
                </NativeSelect>
            </FormControl>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;