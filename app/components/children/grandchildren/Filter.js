import React from 'react';

class Filter extends React.Component {
    constructor (props) {
        super(props);
        this.getFilterRes = this.getFilterRes.bind(this);
    }

    getFilterRes () {
        let months = [];
        let filterMonths = document.getElementsByClassName('month');
        for (let i = 0; filterMonths[i]; i++) {
            if (filterMonths[i].checked) months.push(filterMonths[i].value);
        }
        console.log(months);
        this.props.loadPostsWithFilters(months);
    }    

    render () {
        return (
            <div className='col-md-2 pangolin-font'>
                <div className='row filter-div'>
                    <h4 className='text-center'>Filters</h4>
                    <h5 className='text-center'>Date</h5>

                    <div data-toggle='buttons'>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='january' id='january' /> Jan
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='february' id='february' /> Feb
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='march' id='march' /> Mar
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='april' id='april' /> Apr
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='may' /> May
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='june' /> Jun
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='july' /> Jul
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='august' /> Aug
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='september' /> Sep
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='october' /> Oct
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='november' /> Nov
                        </label>
                        <label className='btn btn-default chk-month'>
                            <input type='checkbox' autoComplete='off' className='month' value='december' /> Dec
                        </label>
                    </div>

                    <div className='form-group input-group-sm'>
                        <h5 className='text-center'>City</h5>
                        <input type='text' className='form-control' id='location-filter' />  
                        <button type='button' className='btn btn-default btn-sm center-block' id='submit-filter' onClick={this.getFilterRes}>Submit</button>                               
                    </div>
                </div>
            </div>  
        );
    }
};

export default Filter;