import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
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
            case '1': return <SupermarketAnalysis />;
            case '2': return <DepartmentStoreAnalysis />;
            case '3': return <ConvenienceProcessedFoodAnalysis />;
            case '4': return <ConvenienceSubtotalAnalysis />;
            case '5': return <ConvenienceTotalAnalysis />;
            case '6': return <SSMDailyNecessitiesAnalysis />;
            case '7': return <SSMLivingStuffAnalysis />;
            case '8': return <SSMNonfoodSubtotalAnalysis />;
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
                    <optgroup label="대형 마트">
                        <option value={1}>비식품 가전문화</option>
                    </optgroup>
                    <optgroup label="백화점">
                        <option value={2}>비식품 가정용품</option>
                    </optgroup>
                    <optgroup label="편의점">
                        <option value={3}>식품 음료 등 가공</option>
                        <option value={4}>식품 소계</option>
                        <option value={5}>총계</option>
                    </optgroup>
                    <optgroup label="기업형 수퍼마켓">
                        <option value={6}>비식품 일상용품</option>
                        <option value={7}>비식품 생활잡화</option>
                        <option value={8}>비식품 소계</option>
                    </optgroup>
                </NativeSelect>
            </FormControl>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;