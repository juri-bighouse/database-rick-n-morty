import React from "react";
import PropTypes from 'prop-types';
import "./Paginator.css";

const Pagina = ({currentPage,onChange,totalPages}) => {
    const onClickPrev = () => {
        const nextPage = currentPage -1
        if(nextPage >0){
            onChange(nextPage);
        }
    };
    const onClickNext = () => {
        
            const nextPage = currentPage + 1
            if(nextPage <= totalPages){
                onChange(nextPage);
        }
    };
    return(
        <div className="container paginator">
            <button onClick={onClickPrev}>Prev</button>
            <p>
                Page <span>{currentPage}</span> of {totalPages}
            </p>
            <button onClick={onClickNext}>Next</button>
        </div>    
    );
};
Pagina.propTypes={
    currentPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired
}
export default Pagina;
