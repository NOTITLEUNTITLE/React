import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import SillimAnalysis from '../../components/analysis/transportation/SillimAnalysis';
import GangnamAnalysis from '../../components/analysis/transportation/GangnamAnalysis';
import SamsungAnalysis from '../../components/analysis/transportation/SamsungAnalysis';
import MyeongdongAnalysis from '../../components/analysis/transportation/MyeongdongAnalysis';
import EuljiroAnalysis from '../../components/analysis/transportation/EuljiroAnalysis';
import GetOffAnalysis from '../../components/analysis/transportation/GetOffAnalysis';

function TransportationAnalysisBtn() {
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
            case '1': return <GetOffAnalysis />;
            case '2': return <GangnamAnalysis />;
            case '3': return <MyeongdongAnalysis />;
            case '4': return <SamsungAnalysis />;
            case '5': return <SillimAnalysis />;
            case '6': return <EuljiroAnalysis />;
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
                    <option value={1}>지하철 하차 인원</option>
                    <option value={2}>강남역</option>
                    <option value={3}>명동역</option>
                    <option value={4}>삼성(무역센터)역</option>
                    <option value={5}>신림역</option>
                    <option value={6}>을지로입구역</option>
                </NativeSelect>
            </FormControl>
            {renderCondition}
        </>
    )
}

export default TransportationAnalysisBtn;