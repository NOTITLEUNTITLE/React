import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
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
            case '1': return <FurnitureInteriorAnalysis />;
            case '2': return <DutyFreeShopAnalysis />;
            case '3': return <LivingHealthAnalysis />;
            case '4': return <FoodAnalysis />;
            case '5': return <LeisureConvenienceAnalysis />;
            case '6': return <FashionClothesAnalysis />;
            case '7': return <FashionStuffAnalysis />;
            case '8': return <CosmeticsBeautyAnalysis />;
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
                    <option value={1}>가구 및 인테리어</option>
                    <option value={2}>면세점</option>
                    <option value={3}>생활 및 건강</option>
                    <option value={4}>식품</option>
                    <option value={5}>여가 및 생활편의</option>
                    <option value={6}>패션 의류</option>
                    <option value={7}>패션 잡화</option>
                    <option value={8}>화장품 및 미용</option>
                </NativeSelect>
            </FormControl>
            {renderCondition}
        </>
    )
}

export default CultureAnalysisBtn;