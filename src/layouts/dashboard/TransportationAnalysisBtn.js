import React, { useState, useEffect} from 'react';
import { Button } from '@mui/material';
import SillimAnalysis from '../../components/analysis/transportation/SillimAnalysis';
import GangnamAnalysis from '../../components/analysis/transportation/GangnamAnalysis';
import SamsungAnalysis from '../../components/analysis/transportation/SamsungAnalysis';
import MyeongdongAnalysis from '../../components/analysis/transportation/MyeongdongAnalysis';
import EuljiroAnalysis from '../../components/analysis/transportation/EuljiroAnalysis';
import GetOffAnalysis from '../../components/analysis/transportation/GetOffAnalysis';


function TransportationAnalysisBtn() {
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
            case '하차 인원': return <GetOffAnalysis />;
            case '강남역': return <GangnamAnalysis />;
            case '명동역': return <MyeongdongAnalysis />;
            case '삼성역': return <SamsungAnalysis />;
            case '신림역': return <SillimAnalysis />;
            case '을지로입구역': return <EuljiroAnalysis />;
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
                <option value="하차 인원">지하철 하차 인원</option>
                <option value="강남역">강남역</option>
                <option value="명동역">명동역</option>
                <option value="삼성역">삼성(무역센터)역</option>
                <option value="신림역">신림역</option>
                <option value="을지로입구역">을지로입구역</option>
            </select>
            {renderCondition}
        </>
    )
}

export default TransportationAnalysisBtn;