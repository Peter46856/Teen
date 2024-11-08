import './profile.css';

import React, { useState } from 'react';

const Profile = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };


    const [selectedHeight, setSelectedHeight] = useState('');

    const handleHeightChange = (e) => {
        setSelectedHeight(e.target.value);
    };


    const [selectedWeight, setSelectedWeight] = useState('');

    const handleWeightChange = (e) => {
        setSelectedWeight(e.target.value);
    };



    const [comment1, setComment1] = useState('');
    const [comment2, setComment2] = useState('');
    const [comment3, setComment3] = useState('');

    const handleComment1Change = (e) => {
        setComment1(e.target.value);
    };

    const handleComment2Change = (e) => {
        setComment2(e.target.value);
    };

    const handleComment3Change = (e) => {
        setComment3(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic here to handle form submission
        console.log('Comment 1:', comment1);
        console.log('Comment 2:', comment2);
        console.log('Comment 3:', comment3);
        // Clearing fields after submission
        setComment1('');
        setComment2('');
        setComment3('');
    };

    return (
        <div className="container">
            <div className="form-check-inline">
                <h5 className="text-muted custom-line-spacing mb-0 mt-1">Physical Appearance</h5>
                <hr className="my-0" />
                <h6 className="text-muted custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Hair colour:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Bald/Shaved"
                                checked={selectedOption === 'Bald/Shaved'}
                                onChange={handleOptionChange}
                            />
                            Bald/Shaved
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Black"
                                checked={selectedOption === 'Black'}
                                onChange={handleOptionChange}
                            />
                            Black
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Blonde"
                                checked={selectedOption === 'Blonde'}
                                onChange={handleOptionChange}
                            />
                            Blonde
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Brown"
                                checked={selectedOption === 'Brown'}
                                onChange={handleOptionChange}
                            />
                            Brown
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Grey/White"
                                checked={selectedOption === 'Grey/White'}
                                onChange={handleOptionChange}
                            />
                            Grey/White
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Light brown"
                                checked={selectedOption === 'Light brown'}
                                onChange={handleOptionChange}
                            />
                            Light brown
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Red"
                                checked={selectedOption === 'Red'}
                                onChange={handleOptionChange}
                            />
                            Red
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>
            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Eye colour:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Black"
                                checked={selectedOption === 'Black'}
                                onChange={handleOptionChange}
                            />
                            Black
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Blue"
                                checked={selectedOption === 'Blue'}
                                onChange={handleOptionChange}
                            />
                            Blue
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Brown"
                                checked={selectedOption === 'Brown'}
                                onChange={handleOptionChange}
                            />
                            Brown
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Grey"
                                checked={selectedOption === 'Grey'}
                                onChange={handleOptionChange}
                            />
                            Grey
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Green"
                                checked={selectedOption === 'Green'}
                                onChange={handleOptionChange}
                            />
                            Green
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hazel"
                                checked={selectedOption === 'Hazel'}
                                onChange={handleOptionChange}
                            />
                            Hazel
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>

            <div className="row">
            <div className="col">
                <label htmlFor="height" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Height:</label><hr className="my-0" />
                <select id="height" className="form-select mt-1" value={selectedHeight} onChange={handleHeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    <option value="">Select</option>
                    <option value="4'6">4'6"</option>
                    <option value="4'7">4'7"</option>
                    <option value="4'8">4'8"</option>
                    <option value="4'9">4'9"</option>
                    <option value="4'10">4'10"</option>
                    <option value="4'11">4'11"</option>
                    <option value="5'0">5'0"</option>
                    <option value="5'1">5'1"</option>
                    <option value="5'2">5'2"</option>
                    <option value="5'3">5'3"</option>
                    <option value="5'4">5'4"</option>
                    <option value="5'5">5'5"</option>
                    <option value="5'6">5'6"</option>
                    <option value="5'7">5'7"</option>
                    <option value="5'8">5'8"</option>
                </select>
            </div>
            
            </div>

            <div className="row">
            <div className="col">
                <label htmlFor="Weight" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Weight:</label><hr className="my-0" />
                <select id="Weight" className="form-select mt-1" value={selectedWeight} onChange={handleWeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    

                    <option value="">Select</option>
                    <option value="50-55 kg">50-55 kg</option>
                    <option value="55-60 kg">55-60 kg</option>
                    <option value="60-65 kg">60-65 kg</option>
                    <option value="65-70 kg">65-70 kg</option>
                    <option value="70-75 kg">70-75 kg</option>
                    <option value="75-80 kg">75-80 kg</option>
                    <option value="80-85 kg">80-85 kg</option>
                    <option value="85-90 kg">85-90 kg</option>
                    <option value="90-95 kg">90-95 kg</option>
                    <option value="95-100 kg">95-100 kg</option>
                    <option value="100-105 kg">100-105 kg</option>
                    <option value="105-110 kg">105-110 kg</option>
                    <option value="110-115 kg">110-115 kg</option>
                    <option value="115-120 kg">115-120 kg</option>
                    <option value="120-125 kg">120-125 kg</option>
                    <option value="125-130 kg">125-130 kg</option>
                    <option value="130-135 kg">130-135 kg</option>
                    <option value="135-140 kg">135-140 kg</option>
                    <option value="140-145 kg">140-145 kg</option>
                    <option value="145-150 kg">145-150 kg</option>
                    <option value="150-155 kg">150-155 kg</option>
                    <option value="155-160 kg">155-160 kg</option>
                    <option value="160-165 kg">160-165 kg</option>
                    <option value="165-170 kg">165-170 kg</option>
                    <option value="170-175 kg">170-175 kg</option>
                    <option value="175-180 kg">175-180 kg</option>
                </select>
            </div>
            
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Body type:</h6>
                <hr className="my-0" />


                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Petite"
                                checked={selectedOption === 'Petite'}
                                onChange={handleOptionChange}
                            />
                            Petite
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Slim"
                                checked={selectedOption === 'Slim'}
                                onChange={handleOptionChange}
                            />
                            Slim
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Athletic"
                                checked={selectedOption === 'Athletic'}
                                onChange={handleOptionChange}
                            />
                            Athletic
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Average"
                                checked={selectedOption === 'Average'}
                                onChange={handleOptionChange}
                            />
                            Average
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Few Extra Pounds"
                                checked={selectedOption === 'Few Extra Pounds'}
                                onChange={handleOptionChange}
                            />
                            Few Extra Pounds
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Full Figured"
                                checked={selectedOption === 'Havel'}
                                onChange={handleOptionChange}
                            />
                            Havel
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>

                
                   
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Ethnic:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="African"
                                checked={selectedOption === 'African'}
                                onChange={handleOptionChange}
                            />
                            African
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="African-American"
                                checked={selectedOption === 'African-American'}
                                onChange={handleOptionChange}
                            />
                            African-American
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Asian"
                                checked={selectedOption === 'Asian'}
                                onChange={handleOptionChange}
                            />
                            Asian
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Caucasian"
                                checked={selectedOption === 'Caucasian'}
                                onChange={handleOptionChange}
                            />
                            Caucasian
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hispanic"
                                checked={selectedOption === 'Hispanic'}
                                onChange={handleOptionChange}
                            />
                            Hispanic
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Indian"
                                checked={selectedOption === 'Indian'}
                                onChange={handleOptionChange}
                            />
                            Indian
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Mixed"
                                checked={selectedOption === 'Mixed'}
                                onChange={handleOptionChange}
                            />
                            Mixed
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Pacific islander"
                                checked={selectedOption === 'Pacific islander'}
                                onChange={handleOptionChange}
                            />
                            Pacific islander
                        </label>
                    </div>
                    

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Afro-caribbean"
                                checked={selectedOption === 'Afro-caribbean'}
                                onChange={handleOptionChange}
                            />
                            Afro-caribbean
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Arab"
                                checked={selectedOption === 'Arab'}
                                onChange={handleOptionChange}
                            />
                            Arab
                        </label>



                
                    
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not to say"
                                checked={selectedOption === 'Prefer not to say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not to say
                        </label>
                    </div>



                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Body art:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Branding"
                                checked={selectedOption === 'Branding'}
                                onChange={handleOptionChange}
                            />
                            Branding
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Earrings"
                                checked={selectedOption === 'Earrings'}
                                onChange={handleOptionChange}
                            />
                            Earrings
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="None"
                                checked={selectedOption === 'None'}
                                onChange={handleOptionChange}
                            />
                            None
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Piercing"
                                checked={selectedOption === 'Piercing'}
                                onChange={handleOptionChange}
                            />
                            Piercing
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not to Say"
                                checked={selectedOption === 'Prefer not to Say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not to Say
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Tatoo"
                                checked={selectedOption === 'Tatoo'}
                                onChange={handleOptionChange}
                            />
                            Tatoo
                        </label>
                    </div>
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>My appearance:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Below average"
                                checked={selectedOption === 'Below average'}
                                onChange={handleOptionChange}
                            />
                            Below average
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Average"
                                checked={selectedOption === 'Average'}
                                onChange={handleOptionChange}
                            />
                            Average
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Attractive"
                                checked={selectedOption === 'Attractive'}
                                onChange={handleOptionChange}
                            />
                            Attractive
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Very attractive"
                                checked={selectedOption === 'Very attractive'}
                                onChange={handleOptionChange}
                            />
                            Very attractive
                        </label>
                    </div>
                    
                </div>
                
            </div>

            
            <div className="form-check-inline mt-5">
                <h5 className="text-muted custom-line-spacing mb-0 mt-1">Lifestyle</h5>
                <hr className="my-0" />
                <h6 className="text-muted custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Do you smoke?</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Yes"
                                checked={selectedOption === 'Yes'}
                                onChange={handleOptionChange}
                            />
                            Yes
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="No"
                                checked={selectedOption === 'No'}
                                onChange={handleOptionChange}
                            />
                            No
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rarely"
                                checked={selectedOption === 'Rarely'}
                                onChange={handleOptionChange}
                            />
                            Rarely
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rarely"
                                checked={selectedOption === 'Rarely'}
                                onChange={handleOptionChange}
                            />
                            Rarely
                        </label>
                    </div>


                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rarely"
                                checked={selectedOption === 'Rarely'}
                                onChange={handleOptionChange}
                            />
                            Rarely
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rarely"
                                checked={selectedOption === 'Rarely'}
                                onChange={handleOptionChange}
                            />
                            Rarely
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rarely"
                                checked={selectedOption === 'Rarely'}
                                onChange={handleOptionChange}
                            />
                            Rarely
                        </label>
                    </div>
                    
                    
                    
                    
                </div>
                
            </div>
            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Do you drink?</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="I drink"
                                checked={selectedOption === 'I drink'}
                                onChange={handleOptionChange}
                            />
                            I drink
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Don't drink"
                                checked={selectedOption === 'Dont drink'}
                                onChange={handleOptionChange}
                            />
                            Don't drink
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Occassionally"
                                checked={selectedOption === 'Occassionally'}
                                onChange={handleOptionChange}
                            />
                            Occassionally
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Grey"
                                checked={selectedOption === 'Grey'}
                                onChange={handleOptionChange}
                            />
                            Grey
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Green"
                                checked={selectedOption === 'Green'}
                                onChange={handleOptionChange}
                            />
                            Green
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hazel"
                                checked={selectedOption === 'Havel'}
                                onChange={handleOptionChange}
                            />
                            Havel
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>

            <div className="row">
            <div className="col">
                <label htmlFor="height" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Height:</label><hr className="my-0" />
                <select id="height" className="form-select mt-1" value={selectedHeight} onChange={handleHeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    <option value="">Select</option>
                    <option value="4'6">4'6"</option>
                    <option value="4'7">4'7"</option>
                    <option value="4'8">4'8"</option>
                    <option value="4'9">4'9"</option>
                    <option value="4'10">4'10"</option>
                    <option value="4'11">4'11"</option>
                    <option value="5'0">5'0"</option>
                    <option value="5'1">5'1"</option>
                    <option value="5'2">5'2"</option>
                    <option value="5'3">5'3"</option>
                    <option value="5'4">5'4"</option>
                    <option value="5'5">5'5"</option>
                    <option value="5'6">5'6"</option>
                    <option value="5'7">5'7"</option>
                    <option value="5'8">5'8"</option>
                </select>
            </div>
            
            </div>

            <div className="row">
            <div className="col">
                <label htmlFor="Weight" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Weight:</label><hr className="my-0" />
                <select id="Weight" className="form-select mt-1" value={selectedWeight} onChange={handleWeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    

                    <option value="">Select</option>
                    <option value="50-55 kg">50-55 kg</option>
                    <option value="55-60 kg">55-60 kg</option>
                    <option value="60-65 kg">60-65 kg</option>
                    <option value="65-70 kg">65-70 kg</option>
                    <option value="70-75 kg">70-75 kg</option>
                    <option value="75-80 kg">75-80 kg</option>
                    <option value="80-85 kg">80-85 kg</option>
                    <option value="85-90 kg">85-90 kg</option>
                    <option value="90-95 kg">90-95 kg</option>
                    <option value="95-100 kg">95-100 kg</option>
                    <option value="100-105 kg">100-105 kg</option>
                    <option value="105-110 kg">105-110 kg</option>
                    <option value="110-115 kg">110-115 kg</option>
                    <option value="115-120 kg">115-120 kg</option>
                    <option value="120-125 kg">120-125 kg</option>
                    <option value="125-130 kg">125-130 kg</option>
                    <option value="130-135 kg">130-135 kg</option>
                    <option value="135-140 kg">135-140 kg</option>
                    <option value="140-145 kg">140-145 kg</option>
                    <option value="145-150 kg">145-150 kg</option>
                    <option value="150-155 kg">150-155 kg</option>
                    <option value="155-160 kg">155-160 kg</option>
                    <option value="160-165 kg">160-165 kg</option>
                    <option value="165-170 kg">165-170 kg</option>
                    <option value="170-175 kg">170-175 kg</option>
                    <option value="175-180 kg">175-180 kg</option>
                </select>
            </div>
            
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Maritial Status:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Single"
                                checked={selectedOption === 'Single'}
                                onChange={handleOptionChange}
                            />
                            Single
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Separated"
                                checked={selectedOption === 'Separated'}
                                onChange={handleOptionChange}
                            />
                            Separated
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Widowed"
                                checked={selectedOption === 'Widowed'}
                                onChange={handleOptionChange}
                            />
                            Widowed
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Devorsed"
                                checked={selectedOption === 'Devorsed'}
                                onChange={handleOptionChange}
                            />
                            Average
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not to say"
                                checked={selectedOption === 'Prefer not to say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not to say
                        </label>
                    </div>
                    
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Do have child?</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="No"
                                checked={selectedOption === 'No'}
                                onChange={handleOptionChange}
                            />
                            No
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="yes- don't live at home"
                                checked={selectedOption === 'yes- dont live at home'}
                                onChange={handleOptionChange}
                            />
                            yes- don't live at home
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Yes-live at home"
                                checked={selectedOption === 'Yes-live at home'}
                                onChange={handleOptionChange}
                            />
                            Yes-live at home
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Yes sometimes live at home"
                                checked={selectedOption === 'Yes-sometimes live at home'}
                                onChange={handleOptionChange}
                            />
                            Yes sometimes live at home
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Yes-adopted"
                                checked={selectedOption === 'Yes-adopted'}
                                onChange={handleOptionChange}
                            />
                            Yes-adopted
                        </label>
                    </div>
                    
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Pets</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Bird"
                                checked={selectedOption === 'Bird'}
                                onChange={handleOptionChange}
                            />
                            Bird
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Cat"
                                checked={selectedOption === 'Cat'}
                                onChange={handleOptionChange}
                            />
                            Cat
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Dog"
                                checked={selectedOption === 'Dog'}
                                onChange={handleOptionChange}
                            />
                            Dog
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Exotic pet"
                                checked={selectedOption === 'Exotic pet'}
                                onChange={handleOptionChange}
                            />
                            Exotic pet
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Fish"
                                checked={selectedOption === 'Fish'}
                                onChange={handleOptionChange}
                            />
                            Fish
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hamster"
                                checked={selectedOption === 'Hamster'}
                                onChange={handleOptionChange}
                            />
                            Hamster
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Horse"
                                checked={selectedOption === 'Horse'}
                                onChange={handleOptionChange}
                            />
                            Horse
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Rabbit"
                                checked={selectedOption === 'Rabbit'}
                                onChange={handleOptionChange}
                            />
                            Rabbit
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Reptile"
                                checked={selectedOption === 'Reptile'}
                                onChange={handleOptionChange}
                            />
                            Reptile
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="No pet"
                                checked={selectedOption === 'No pet'}
                                onChange={handleOptionChange}
                            />
                            No pet
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Occupation:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Unemployed"
                                checked={selectedOption === 'Unemployed'}
                                onChange={handleOptionChange}
                            />
                            Unemployed
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Self-employed"
                                checked={selectedOption === 'Self-employed'}
                                onChange={handleOptionChange}
                            />
                            Self-employed
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Entertainment/Media"
                                checked={selectedOption === 'Entertainment/Media'}
                                onChange={handleOptionChange}
                            />
                            Entertainment/Media
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hair-dresser/Personal grooming"
                                checked={selectedOption === 'Hair-dresser/Personal grooming'}
                                onChange={handleOptionChange}
                            />
                            Hair-dresser/Personal grooming
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Transportation"
                                checked={selectedOption === 'Transportation'}
                                onChange={handleOptionChange}
                            />
                            Transportation
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Administrative/Secretarial/Clerical"
                                checked={selectedOption === 'Administrative/Secretarial/Clerical'}
                                onChange={handleOptionChange}
                            />
                            Administrative/Secretarial/Clerical
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Artistic/Creative/Performance"
                                checked={selectedOption === 'Artistic/Creative/Performance'}
                                onChange={handleOptionChange}
                            />
                            Artistic/Creative/Performance
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Construction/trade"
                                checked={selectedOption === 'Construction/trade'}
                                onChange={handleOptionChange}
                            />
                            Construction/trade
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Domestic helper"
                                checked={selectedOption === 'Domestic helper'}
                                onChange={handleOptionChange}
                            />
                            Domestic helper
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Academics/Education"
                                checked={selectedOption === 'Academics/Education'}
                                onChange={handleOptionChange}
                            />
                            Academics/Education
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Farming/Agriculture"
                                checked={selectedOption === 'Farming/Agriculture'}
                                onChange={handleOptionChange}
                            />
                            Farming/Agriculture
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Finance/Banking/Real Estate"
                                checked={selectedOption === 'Finance/Banking/Real Estate'}
                                onChange={handleOptionChange}
                            />
                            Finance/Banking/Real Estate
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Security/Law enforcement"
                                checked={selectedOption === 'Security/Law enforcement'}
                                onChange={handleOptionChange}
                            />
                            Security/Law enforcement
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="IT/Communication"
                                checked={selectedOption === 'IT/Communication'}
                                onChange={handleOptionChange}
                            />
                            IT/Communication
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Labourer/Manufucturing"
                                checked={selectedOption === 'Labourer/Manufucturing'}
                                onChange={handleOptionChange}
                            />
                            Labourer/Manufucturing
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Legal"
                                checked={selectedOption === 'Legal'}
                                onChange={handleOptionChange}
                            />
                            Legal
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Medical"
                                checked={selectedOption === 'Medical'}
                                onChange={handleOptionChange}
                            />
                            Medical
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Miltary"
                                checked={selectedOption === 'Miltary'}
                                onChange={handleOptionChange}
                            />
                            Miltary
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Retired"
                                checked={selectedOption === 'Retired'}
                                onChange={handleOptionChange}
                            />
                            Retired
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Sales/Marketing"
                                checked={selectedOption === 'Sales/Marketing'}
                                onChange={handleOptionChange}
                            />
                            Sales/Marketing
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Sports/Recreation"
                                checked={selectedOption === 'Sports/Recreation'}
                                onChange={handleOptionChange}
                            />
                            Sports/Recreation
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Student"
                                checked={selectedOption === 'Student'}
                                onChange={handleOptionChange}
                            />
                            Student
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Technical/Science/Engineering"
                                checked={selectedOption === 'Technical/Science/Engineering'}
                                onChange={handleOptionChange}
                            />
                            Technical/Science/Engineering
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Travel/Hospitality"
                                checked={selectedOption === 'Travel/Hospitality'}
                                onChange={handleOptionChange}
                            />
                            Travel/Hospitality
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Executive/Management/HR"
                                checked={selectedOption === 'Executive/Management/HR'}
                                onChange={handleOptionChange}
                            />
                            Executive/Management/HR
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <h6 className="text-muted custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Annual Income:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Less than $100"
                                checked={selectedOption === 'Less than $100'}
                                onChange={handleOptionChange}
                            />
                            Less than $100
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="$100 - $200"
                                checked={selectedOption === '$100 - $200'}
                                onChange={handleOptionChange}
                            />
                            $100 - $200
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="$200 - $300"
                                checked={selectedOption === '$200 - $300'}
                                onChange={handleOptionChange}
                            />
                            $200 - $300
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="$300 - $400"
                                checked={selectedOption === '$300 - $400'}
                                onChange={handleOptionChange}
                            />
                            $300 - $400
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="$400 - $500"
                                checked={selectedOption === '$400 - $500'}
                                onChange={handleOptionChange}
                            />
                            $400 - $500
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Over $500"
                                checked={selectedOption === 'Over $500'}
                                onChange={handleOptionChange}
                            />
                            Over $500
                        </label>
                    </div>
                
            </div>

            <h6 className="text-muted custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Relationship Type:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="Checkbox"
                                name="option"
                                value="Penpal"
                                checked={selectedOption === 'Penpal'}
                                onChange={handleOptionChange}
                            />
                            Penpal
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="Checkbox"
                                name="option"
                                value="Friendship"
                                checked={selectedOption === 'Friendship'}
                                onChange={handleOptionChange}
                            />
                            Friendship
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="Checkbox"
                                name="option"
                                value="Romance/dating"
                                checked={selectedOption === 'Romance/dating'}
                                onChange={handleOptionChange}
                            />
                            Romance/dating
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="Checkbox"
                                name="option"
                                value="Long term Relationship"
                                checked={selectedOption === 'Long term Relationship'}
                                onChange={handleOptionChange}
                            />
                            Long term Relationship
                        </label>
                    </div>
                </div>



        </div>
        


            <div className="form-check-inline mt-5">
                <h5 className="text-muted custom-line-spacing mb-0 mt-1">Background / Cultural</h5>
                <hr className="my-0" />
                <h6 className="text-muted custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Education:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Primary(Elementary)"
                                checked={selectedOption === 'Primary(Elementary)'}
                                onChange={handleOptionChange}
                            />
                            Primary(Elementary)
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Junior School"
                                checked={selectedOption === 'Junior School'}
                                onChange={handleOptionChange}
                            />
                            Junior School
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="High School"
                                checked={selectedOption === 'High School'}
                                onChange={handleOptionChange}
                            />
                            High School
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Vacation collage"
                                checked={selectedOption === 'Vacation collage'}
                                onChange={handleOptionChange}
                            />
                            Vacation collage
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Bachelors Degree"
                                checked={selectedOption === 'Bachelors Degree'}
                                onChange={handleOptionChange}
                            />
                            Bachelors Degree
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Masters degree"
                                checked={selectedOption === 'Masters degree'}
                                onChange={handleOptionChange}
                            />
                            Masters degree
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Doctrate/Phd"
                                checked={selectedOption === 'Doctrate/Phd'}
                                onChange={handleOptionChange}
                            />
                            Doctrate/Phd
                        </label>
                    </div>
                    
                    
                </div>
                
            </div>
            
                
                
                    
                    
                   

            <div className="row">
            <div className="col">
                <label htmlFor="height" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Nationality:</label><hr className="my-0" />
                <select id="height" className="form-select mt-1" value={selectedHeight} onChange={handleHeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    <option value="">Select</option>
                    <option value="4'6">4'6"</option>
                    <option value="4'7">4'7"</option>
                    <option value="4'8">4'8"</option>
                    <option value="4'9">4'9"</option>
                    <option value="4'10">4'10"</option>
                    <option value="4'11">4'11"</option>
                    <option value="5'0">5'0"</option>
                    <option value="5'1">5'1"</option>
                    <option value="5'2">5'2"</option>
                    <option value="5'3">5'3"</option>
                    <option value="5'4">5'4"</option>
                    <option value="5'5">5'5"</option>
                    <option value="5'6">5'6"</option>
                    <option value="5'7">5'7"</option>
                    <option value="5'8">5'8"</option>
                </select>
            </div>
            
            </div>

            <div className="row">
            <div className="col">
                <label htmlFor="Weight" className="form-label mt-1 mb-0" style={{fontSize: "12px" }}>Languages:</label><hr className="my-0" />
                <select id="Weight" className="form-select mt-1" value={selectedWeight} onChange={handleWeightChange} style={{ maxWidth: "200px", fontSize: "10px" }}>
                    

                    <option value="">Select</option>
                    <option value="50-55 kg">50-55 kg</option>
                    <option value="55-60 kg">55-60 kg</option>
                    <option value="60-65 kg">60-65 kg</option>
                    <option value="65-70 kg">65-70 kg</option>
                    <option value="70-75 kg">70-75 kg</option>
                    <option value="75-80 kg">75-80 kg</option>
                    <option value="80-85 kg">80-85 kg</option>
                    <option value="85-90 kg">85-90 kg</option>
                    <option value="90-95 kg">90-95 kg</option>
                    <option value="95-100 kg">95-100 kg</option>
                    <option value="100-105 kg">100-105 kg</option>
                    <option value="105-110 kg">105-110 kg</option>
                    <option value="110-115 kg">110-115 kg</option>
                    <option value="115-120 kg">115-120 kg</option>
                    <option value="120-125 kg">120-125 kg</option>
                    <option value="125-130 kg">125-130 kg</option>
                    <option value="130-135 kg">130-135 kg</option>
                    <option value="135-140 kg">135-140 kg</option>
                    <option value="140-145 kg">140-145 kg</option>
                    <option value="145-150 kg">145-150 kg</option>
                    <option value="150-155 kg">150-155 kg</option>
                    <option value="155-160 kg">155-160 kg</option>
                    <option value="160-165 kg">160-165 kg</option>
                    <option value="165-170 kg">165-170 kg</option>
                    <option value="170-175 kg">170-175 kg</option>
                    <option value="175-180 kg">175-180 kg</option>
                </select>
            </div>
            
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Religion:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Bahai"
                                checked={selectedOption === 'Bahai'}
                                onChange={handleOptionChange}
                            />
                            Bahai
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Budhist"
                                checked={selectedOption === 'Budhist'}
                                onChange={handleOptionChange}
                            />
                            Budhist
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Christian"
                                checked={selectedOption === 'Christian'}
                                onChange={handleOptionChange}
                            />
                            Christian
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Hindu"
                                checked={selectedOption === 'Hindu'}
                                onChange={handleOptionChange}
                            />
                            Hindu
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Islam"
                                checked={selectedOption === 'Islam'}
                                onChange={handleOptionChange}
                            />
                            Islam
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Jainism"
                                checked={selectedOption === 'Jainism'}
                                onChange={handleOptionChange}
                            />
                            Jainism
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Jewish"
                                checked={selectedOption === 'Jewish'}
                                onChange={handleOptionChange}
                            />
                            Jewish
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Parsi"
                                checked={selectedOption === 'Parsi'}
                                onChange={handleOptionChange}
                            />
                            Parsi
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Shintoism"
                                checked={selectedOption === 'Shintoism'}
                                onChange={handleOptionChange}
                            />
                            Shintoism
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Sikhism"
                                checked={selectedOption === 'Sikhism'}
                                onChange={handleOptionChange}
                            />
                            Sikhism
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Taoism"
                                checked={selectedOption === 'Taoism'}
                                onChange={handleOptionChange}
                            />
                            Taoism
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Other"
                                checked={selectedOption === 'Other'}
                                onChange={handleOptionChange}
                            />
                            Other
                        </label>
                    </div>
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Religious Value:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Not Religious"
                                checked={selectedOption === 'Not Religious'}
                                onChange={handleOptionChange}
                            />
                            Not Religious
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Religious"
                                checked={selectedOption === 'Religious'}
                                onChange={handleOptionChange}
                            />
                            Religious
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Very Religious"
                                checked={selectedOption === 'Very Religious'}
                                onChange={handleOptionChange}
                            />
                            Very Religious
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not to say"
                                checked={selectedOption === 'Prefer not to say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not to say
                        </label>
                    </div>
                    

                    

                    
                    
                    

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not say"
                                checked={selectedOption === 'Prefer not say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not say
                        </label>
                    </div>
                </div>
                
            </div>


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Polygamy:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Accept Polygamy"
                                checked={selectedOption === 'Accept Polygamy'}
                                onChange={handleOptionChange}
                            />
                            Accept Polygamy
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Don't accept polygamy"
                                checked={selectedOption === 'Dont accept polygamy'}
                                onChange={handleOptionChange}
                            />
                            Don't accept polygamy
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Maybe Accept"
                                checked={selectedOption === 'Maybe Accept'}
                                onChange={handleOptionChange}
                            />
                            Maybe Accept
                        </label>
                    </div>
                    
                    
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Prefer not to Say"
                                checked={selectedOption === 'Prefer not to Say'}
                                onChange={handleOptionChange}
                            />
                            Prefer not to Say
                        </label>
                    </div>
                </div>
                
            </div>


            
                


            <div className="form-check-inline">
                
                <h6 className="text-muted fs-7 custom-line-spacing mb-0 mt-1" style={{ fontSize: "12px" }}>Star sign:</h6>
                <hr className="my-0" />

                <div className="row row-cols-5">
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Aquarius"
                                checked={selectedOption === 'Aquarius'}
                                onChange={handleOptionChange}
                            />
                            Aquarius
                        </label>
                    </div>
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Aries"
                                checked={selectedOption === 'Aries'}
                                onChange={handleOptionChange}
                            />
                            Aries
                        </label>
                    </div>
                    
                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="cancer"
                                checked={selectedOption === 'cancer'}
                                onChange={handleOptionChange}
                            />
                            cancer
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Capricon"
                                checked={selectedOption === 'Capricon'}
                                onChange={handleOptionChange}
                            />
                            Capricon
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Gemini"
                                checked={selectedOption === 'Gemini'}
                                onChange={handleOptionChange}
                            />
                            Gemini
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Leo"
                                checked={selectedOption === 'Leo'}
                                onChange={handleOptionChange}
                            />
                            Leo
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Libra"
                                checked={selectedOption === 'Libra'}
                                onChange={handleOptionChange}
                            />
                            Libra
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Pisces"
                                checked={selectedOption === 'Pisces'}
                                onChange={handleOptionChange}
                            />
                            Pisces
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="sagittarius"
                                checked={selectedOption === 'sagittarius'}
                                onChange={handleOptionChange}
                            />
                            sagittarius
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Scorpio"
                                checked={selectedOption === 'Scorpio'}
                                onChange={handleOptionChange}
                            />
                            Scorpio
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Taurus"
                                checked={selectedOption === 'Taurus'}
                                onChange={handleOptionChange}
                            />
                            Taurus
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Virgo"
                                checked={selectedOption === 'Virgo'}
                                onChange={handleOptionChange}
                            />
                            Virgo
                        </label>
                    </div>

                    <div className="col">
                        <label className="form-check-label">
                            <input
                                type="radio"
                                name="option"
                                value="Don't know"
                                checked={selectedOption === 'Dont know'}
                                onChange={handleOptionChange}
                            />
                            Don't know
                        </label>
                    </div>
                    
                        
                </div>
                
            </div>

            
            <h5 className="text-muted custom-line-spacing mb-0 mt-5">In your Own Words</h5>
                <hr className="my-0" />

            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="comment1" className="form-label">Your profile Heading:</label>
                <textarea
                    id="comment1"
                    className="form-control"
                    value={comment1}
                    onChange={handleComment1Change}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comment2" className="form-label">A little about you:</label>
                <textarea
                    id="comment2"
                    className="form-control"
                    value={comment2}
                    onChange={handleComment2Change}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comment3" className="form-label">What am looking for in a partner:</label>
                <textarea
                    id="comment3"
                    className="form-control"
                    value={comment3}
                    onChange={handleComment3Change}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            
        
        </div>


    );
}

export default Profile;




