/* eslint-disable no-unused-vars */
import { forwardRef, useEffect, useState } from 'react';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import './styles.css';

const FilterHotel = ({ handleFilterCategory, handleFilterPrice }, ref) => {
    const [categorys, setCategorys] = useState([]);
    const [prices, setPrices] = useState([]);

    const handleCheckbox = (e) => {
    // value parseInt
        const value = parseInt(e.target.value);
        if (value > 5) { /// is price
            if (e.target.checked) {
                setPrices([...prices, value]);
            } else {
                setPrices(prices.filter(price => price !== value));
            }
        } else { /// is category
            if (e.target.checked) {
                setCategorys([...categorys, value]);
            } else {
                setCategorys(categorys.filter((category) => category !== value));
            }
        }
    };

    // filter hotels by category
    useEffect(() => {
        handleFilterCategory(categorys);
    }, [categorys]);

    // filter hotels by price
    useEffect(() => {
        handleFilterPrice(prices);
    }, [prices]);

    return (
        <div ref={ref} className="filter-category">
            <h3>filtrar por: </h3>
            <p>category</p>
            {[1, 2, 3, 4, 5].map((c) => (
                <FilterCategory
                    key={c}
                    c={c}
                    handleCheckbox={handleCheckbox}
                />
            ))}
            <h3>filter por:</h3>
            <p>price</p>
            {[1, 2, 3, 4, 5].map((c) => (
                <FilterPrice key={c} c={c} handleCheckbox={handleCheckbox} />
            ))}
        </div>
    );
};

export default forwardRef(FilterHotel);
