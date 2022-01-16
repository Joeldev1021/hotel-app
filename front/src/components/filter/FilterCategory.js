const FilterCategory = ({ c, handleCheckbox }) => {
    return (
        <div key={c} className="filter-opcion">
            <input type="checkbox" onChange={(e) => handleCheckbox(e)} value={c} id={`category${c}`} />
            <label htmlFor={`category${c}`}>{c} estrellas</label>
        </div>
    );
};

export default FilterCategory;
