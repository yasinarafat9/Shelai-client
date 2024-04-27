import './TopCategoriesMenWomen.css'
import wedingImg from '../../assets/Images/Home/TopCategoriesForWomen/weding.jpg'
import sareeImg from '../../assets/Images/Home/TopCategoriesForWomen/saree.jpg'
import formalImg from '../../assets/Images/Home/TopCategoriesForWomen/formal.jpg'
import denimImg from '../../assets/Images/Home/TopCategoriesForWomen/denim.jpg'
import casualImg from '../../assets/Images/Home/TopCategoriesForWomen/casual.jpg'
import threePieceImg from '../../assets/Images/Home/TopCategoriesForWomen/3piece.jpg'

const TopCategoriesWomen = () => {
    return (
        <div className='top-category-page' >
            <h1 >Categories For WOMEN</h1>
            <div className='Top-category-container'>
                <div className='category-card'>
                    <img src={wedingImg} alt="" />
                    <h3>WEDING</h3>
                </div>
                <div className='category-card'>
                    <img src={sareeImg} alt="" />
                    <h3>SAREE</h3>
                </div>
                <div className='category-card'>
                    <img src={formalImg} alt="" />
                    <h3>FORMAL</h3>
                </div>
                <div className='category-card'>
                    <img src={denimImg} alt="" />
                    <h3>DENIM</h3>
                </div>
                <div className='category-card'>
                    <img src={casualImg} alt="" />
                    <h3>CASUAL</h3>
                </div>
                <div className='category-card'>
                    <img src={threePieceImg} alt="" />
                    <h3>ETHNIC</h3>
                </div>

            </div>
        </div>
    );
};

export default TopCategoriesWomen;