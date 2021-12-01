import React, { useState, useEffect} from 'react';
import { Button } from '@mui/material';
import CosmeticsBeautyAnalysis from '../../components/analysis/living/CosmeticsBeautyAnalysis';
import DutyFreeShopAnalysis from '../../components/analysis/living/DutyFreeShopAnalysis';
import FashionClothesAnalysis from '../../components/analysis/living/FashionClothesAnalysis';
import FashionStuffAnalysis from '../../components/analysis/living/FashionStuffAnalysis';
import FoodAnalysis from '../../components/analysis/living/FoodAnalysis';
import FurnitureInteriorAnalysis from '../../components/analysis/living/FurnitureInteriorAnalysis';
import LeisureConvenienceAnalysis from '../../components/analysis/living/LeisureConvenienceAnalysis';
import LivingHealthAnalysis from '../../components/analysis/living/LivingHealthAnalysis';


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
            case '가구 및 인테리어': return <FurnitureInteriorAnalysis />;
            case '면세점': return <DutyFreeShopAnalysis />;
            case '생활 및 건강': return <LivingHealthAnalysis />;
            case '식품': return <FoodAnalysis />;
            case '여가 및 생활편의': return <LeisureConvenienceAnalysis />;
            case '패션 의류': return <FashionClothesAnalysis />;
            case '패션 잡화': return <FashionStuffAnalysis />;
            case '화장품 및 미용': return <CosmeticsBeautyAnalysis />;
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
                <option value="가구 및 인테리어">가구 및 인테리어</option>
                <option value="면세점">면세점</option>
                <option value="생활 및 건강">생활 및 건강</option>
                <option value="식품">식품</option>
                <option value="여가 및 생활편의">여가 및 생활편의</option>
                <option value="패션 의류">패션 의류</option>
                <option value="패션 잡화">패션 잡화</option>
                <option value="화장품 및 미용">화장품 및 미용</option>
            </select>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;