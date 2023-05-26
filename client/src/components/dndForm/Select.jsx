import React from 'react';

const Select = () => {
    return (
        <div className="row">
            <div className="input-field col s6">
                    <select id={'year'}>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                <label htmlFor="{'year'}" className={'red-text'} style={{fontSize: '15px'}}>Вкажіть рік :</label>
            </div>
            <div className="input-field col s6">
                <select>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label htmlFor="{'year'}" className={'red-text'} style={{fontSize: '15px'}}>Вкажіть відділ :</label>
            </div>
        </div>
    )
};

export default Select;