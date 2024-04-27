import './TopCategoriesMenWomen.css'
import panjabiImg from '../../assets/Images/Home/TopCategoryImg/PanjabiImg.jpg'
import CasualImg from '../../assets/Images/Home/TopCategoryImg/CasualImg.jpg'
import CasualImg2 from '../../assets/Images/Home/TopCategoryImg/CasualImg2.jpg'
import CorporateImg from '../../assets/Images/Home/TopCategoryImg/CorporateImg.jpg'
import StreetOutfit from '../../assets/Images/Home/TopCategoryImg/StreetOutfit2.jpg'
import WedingManImg from '../../assets/Images/Home/TopCategoryImg/WedingManImg.jpg'
import RippedFashion from '../../assets/Images/Home/TopCategoryImg/RippedFashion.jpg'


const TopCategoriesMen = () => {
    return (
        <div className='top-category-page' >
            <h1 >Categories For MEN</h1>
            <div className='Top-category-container'>
                <div className='category-card'>
                    <img src={WedingManImg} alt="" />
                    <h3>WEDING</h3>
                </div>
                <div className='category-card'>
                    <img src={panjabiImg} alt="" />
                    <h3>PANJABI</h3>
                </div>
                <div className='category-card'>
                    <img src={CorporateImg} alt="" />
                    <h3>FORMAL</h3>
                </div>
                <div className='category-card'>
                    <img src={RippedFashion} alt="" />
                    <h3>DENIM</h3>
                </div>
                <div className='category-card'>
                    <img src={CasualImg2} alt="" />
                    <h3>CASUAL</h3>
                </div>
                <div className='category-card'>
                    <img src={StreetOutfit} alt="" /> 
                    <h3>STREET</h3>
                </div>
            </div>
        </div>
    );
};

export default TopCategoriesMen;