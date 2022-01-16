const FilterPrice = ({ c, handleCheckbox }) => {
    return (
        <div key={c} className="filter-opcion">
            <input type="checkbox" onChange={(e) => handleCheckbox(e)} value={c * 100} id={`price${c * 100}`} />
            <label htmlFor={`price${c}`}>${c * 100}</label>
        </div>
    );
};

export default FilterPrice;
