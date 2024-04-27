import './ProductSideFilter.css';

const ProductSideFilter = () => {
    return (
        <div className='side-filter-box'>
            <div className='side-filter-container'>
                <div>
                    <input type="range" />
                </div>



                <div>
                    {/* <small className=' semibold'>Home  / Clothing / Men / T-Shirts</small> */}
                </div>
                <div>
                    <h4>Filters</h4>
                    <div> <input type="checkbox" /> Low to high </div>
                    <div> <input type="checkbox" /> High to Low </div>
                    <div> <input type="checkbox" /> Most Recent </div>
                    <div> <input type="checkbox" /> Oldest </div>
                </div>

                <div>
                    <h4>Brands</h4>
                    <div> <input type="checkbox" /> Brand Name 1 </div>
                    <div> <input type="checkbox" /> Brand Name 2 </div>
                    <div> <input type="checkbox" /> Brand Name 3 </div>
                    <div> <input type="checkbox" /> Brand Name 4 </div>
                    <div> <input type="checkbox" /> Brand Name 5 </div>
                    <div> <input type="checkbox" /> Brand Name 6 </div>
                    <div> <input type="checkbox" /> Brand Name 7 </div>
                    <div> <input type="checkbox" /> Brand Name 8 </div>
                    <div> <input type="checkbox" /> Brand Name 9 </div>
                    <div> <input type="checkbox" /> Brand Name 10 </div>
                    <div> <input type="checkbox" /> Brand Name 11 </div>
                    <div> <input type="checkbox" /> Brand Name 12 </div>
                    <div> <input type="checkbox" /> Brand Name 13 </div>
                    <div> <input type="checkbox" /> Brand Name 14 </div>
                    <div> <input type="checkbox" /> Brand Name 15 </div>
                </div>

                <div>
                    <h4>Price</h4>
                    <div> <input type="checkbox" /> BDT 150-250 </div>
                    <div> <input type="checkbox" /> BDT 250-450 </div>
                    <div> <input type="checkbox" /> BDT 450-750 </div>
                    <div> <input type="checkbox" /> BDT 750-1000 </div>
                    <div> <input type="checkbox" /> BDT 1000-1500 </div>
                    <div> <input type="checkbox" /> BDT 1500-2500 </div>
                    <div> <input type="checkbox" /> BDT 2500-3500 </div>
                    <div> <input type="checkbox" /> BDT 3500-5000 </div>
                    <div> <input type="checkbox" /> BDT 5000+ </div>
                </div>

                <div>
                    <h4>Discount Range</h4>
                    <div> <input type="radio" name='selection' /> 10% and above </div>
                    <div> <input type="radio" name='selection' /> 20% and above </div>
                    <div> <input type="radio" name='selection' /> 30% and above </div>
                    <div> <input type="radio" name='selection' /> 40% and above </div>
                    <div> <input type="radio" name='selection' /> 50% and above </div>
                    <div> <input type="radio" name='selection' /> 60% and above </div>
                    <div> <input type="radio" name='selection' /> 70% and above </div>
                    <div> <input type="radio" name='selection' /> 80% and above </div>
                    <div> <input type="radio" name='selection' /> 90% and above </div>
                </div>
            </div>

        </div>
    );
};

export default ProductSideFilter;