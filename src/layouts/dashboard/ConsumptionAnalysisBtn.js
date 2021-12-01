import React, { useState, useEffect} from 'react';
import { Button } from '@mui/material';
import ConvenienceProcessedFoodAnalysis from '../../components/analysis/consumption/ConvenienceProcessedFoodAnalysis';
import ConvenienceSubtotalAnalysis from '../../components/analysis/consumption/ConvenienceSubtotalAnalysis';
import ConvenienceTotalAnalysis from '../../components/analysis/consumption/ConvenienceTotalAnalysis';
import DepartmentStoreAnalysis from '../../components/analysis/consumption/DepartmentStoreAnalysis';
import SSMDailyNecessitiesAnalysis from '../../components/analysis/consumption/SSMDailyNecessitiesAnalysis';
import SSMLivingStuffAnalysis from '../../components/analysis/consumption/SSMLivingStuffAnalysis';
import SSMNonfoodSubtotalAnalysis from '../../components/analysis/consumption/SSMNonfoodSubtotalAnalysis';
import SupermarketAnalysis from '../../components/analysis/consumption/SupermarketAnalysis';


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
            case '대형 마트': return <SupermarketAnalysis />;
            case '백화점': return <DepartmentStoreAnalysis />;
            case '가공 식품 및 음료': return <ConvenienceProcessedFoodAnalysis />;
            case '편의점 소계': return <ConvenienceSubtotalAnalysis />;
            case '편의점 총계': return <ConvenienceTotalAnalysis />;
            case '일상용품': return <SSMDailyNecessitiesAnalysis />;
            case '생활잡화': return <SSMLivingStuffAnalysis />;
            case '비식품 소계': return <SSMNonfoodSubtotalAnalysis />;
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
                <option value="대형 마트">대형 마트</option>
                <option value="백화점">백화점</option>
                <optgroup label="편의점">
                    <option value="가공 식품 및 음료">가공 식품 및 음료</option>
                    <option value="편의점 소계">소계</option>
                    <option value="편의점 총계">총계</option>
                </optgroup>
                <optgroup label="기업형 수퍼마켓">
                    <option value="일상용품">비식품 일상용품</option>
                    <option value="생활잡화">비식품 생활잡화</option>
                    <option value="비식품 소계">비식품 소계</option>
                </optgroup>
            </select>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;