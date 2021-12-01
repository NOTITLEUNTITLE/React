import React, { useState, useEffect} from 'react';
import { Button } from '@mui/material';
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
    const [pageCond, setPageCond] = useState("");
    const toggle = () => {
        if (pageCond === '') {
            setCondition(false);
            alert('항목을 선택해주세요.');
        } else {setCondition(!condition);}
    }
    useEffect(() => {
        console.log('c', condition);
    }, [condition])
    function showAnalysis(pageCond) {
        switch (pageCond) {
            case '':
                setCondition(false)
                return null;
            case '상연 횟수': return <PerformNumbersAnalysis />;
            case '예매수': return <TicketingNumbersAnalysis />;
            case '국내 매출액': return <KoreaSalesAnalysis />;
            case '국내 관객수': return <KoreaAudienceAnalysis />;
            case '해외 판매액': return <OverseasSalesAnalysis />;
            case '해외 관객수': return <OverseasAudienceAnalysis />;
            case '전체 매출액': return <TotalSalesAnalysis />;
            case '전체 관객수': return <TotalAudienceAnalysis />;
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
            <select
                onChange={(e) => {
                    const selectedPage = e.target.value;
                    setPageCond(selectedPage);
                }}
            >
                <option value="">없음</option>
                <optgroup label="공연">
                    <option value="상연 횟수">상연 횟수</option>
                    <option value="예매수">예매수</option>
                </optgroup>
                <optgroup label="영화">
                    <option value="국내 매출액">국내 매출액</option>
                    <option value="국내 관객수">국내 관객수</option>
                    <option value="해외 판매액">해외 판매액</option>
                    <option value="해외 관객수">해외 관객수</option>
                    <option value="전체 매출액">전체 매출액</option>
                    <option value="전체 관객수">전체 관객수</option>
                </optgroup>
            </select>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;