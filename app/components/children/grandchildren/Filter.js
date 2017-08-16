import React from 'react';

class Filter extends React.Component {
    constructor () {
        super();    
    }

    render () {
        return (
            <div className='col-md-2 pangolin-font'>
                <div className='row filter-div'>
                    <h4 className='text-center'>Filters</h4>
                    <h5 className='text-center'>Date</h5>

                    <div data-toggle='buttons'>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Jan
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Feb
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Mar
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Apr
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> May
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Jun
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Jul
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Aug
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Sep
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Oct
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Nov
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='' /> Dec
                        </label>
                    </div>

                    <div className='form-group input-group-sm'>
                        <h5 className='text-center'>City</h5>
                        <input type='text' className='form-control' id='location-filter' />  
                        <button type='button' className='btn btn-default btn-sm center-block' id='submit-filter'>Submit</button>                               
                    </div>
                </div>
            </div>  
        );
    }
};

export default Filter;