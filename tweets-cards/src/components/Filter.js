
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Filter = ({ handleFilter }) => {
    const options = [ 'all', 'following', 'unfollowing' ];
    const defaultOption = options[0];
    let filter = '';

    const onSelect = (e) => {
        filter = e.value;
        handleFilter(filter);
    };

    return (<>
        <Dropdown
            options={options}
            onChange={(e) => onSelect(e)}
            value={defaultOption}
            className='myClassName'
            placeholder="Select an option"
            placeholderClassName='myPlaceholderClassName'
            controlClassName='myControlClassName'
            menuClassName='myMenuClassName'
        />
    </> 
    )
}

Filter.propTypes = {
    handleFilter: PropTypes.func,
}

export default Filter;



