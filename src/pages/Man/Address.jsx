import './Address.css';

const Address = () => {
    return (
        <div className=' address-page'>
            <div className=' address-container'>
                <form action="" className='form'>
                    <h4 className=''>Address</h4>
                    <hr className='' />
                    <div>
                        <p>Reciver Name</p>
                        <input type="" />
                    </div>
                    <div>
                        <p>City</p>
                        <input type="" />
                    </div>
                    <div>
                        <p>Street</p>
                        <input type="" />
                    </div>
                    <div>
                        <p>House Number</p>
                        <input type="" />
                    </div>
                    <div>
                        <p>More Details</p>
                        <textarea type="" />
                    </div>
                    <div className=''>
                        <button className=''>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Address;