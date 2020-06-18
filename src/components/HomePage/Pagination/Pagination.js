import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getRepos } from '../../../redux/reposWithCommitsAndContributors/actions';
import './pagination.css';

const Pagination = ({ totalCount, currentPage, query, perPage, setCurrentPage, getRepos }) => {  
  const min = 1;
  let max = Math.min(Math.ceil(totalCount / perPage), Math.ceil(1000 / perPage)) ;

  // Численные кнопки :
  const buttonNum = (num) => {
    const classCurrentPage = num === currentPage ? 'currentPage ' : '';
    return (
      <button 
        key={num}
        onClick={handleClick} 
        value ={num}
        className={classCurrentPage}
        disabled={num === currentPage}
        hidden = {num < min || num > max}>
          {num}
      </button>
    );
  }
  const arrButtonNum = (numMin, numMax) => {
    const arrButtons = [];
    for (let num = numMin; num <= numMax; num++) {
      arrButtons.push(buttonNum(num));
    }
    return arrButtons;
  }
  const buttonsNum = () => {
    if (currentPage <= min + 2){
      return arrButtonNum(1, 5);
    } else if (currentPage >= max - 2){
      return arrButtonNum(max - 4, max);
    } else {
      return arrButtonNum(currentPage - 2, currentPage + 2);
    }
  }
  // Кнопки минимального и максимального значений :
  const buttonNumMin = () => {
    const classHidden = currentPage <= 3 ? 'hidden ' : '';
    return (
      <button 
        onClick={handleClick} 
        value ={min}
        className={classHidden}>
          {min}
      </button>
    );  
  }
  const buttonNumMax = () => {
    const classHidden = currentPage >= max - 2 ? 'hidden ' : '';
    return (
      <button 
        onClick={handleClick} 
        value ={max}
        className={classHidden}>
          {max}
      </button>
    );  
  }
  // Кнопки "точки"  
  const buttonDotLeft = () => {
    const classHidden = currentPage <= 3 ? 'hidden ' : '';
    return (
      <button 
        onClick={handleClick} 
        value ={currentPage - 3}
        className={classHidden}>
          {'..'}
      </button>
    );  
  }
  const buttonDotRight = () => {
    const classHidden = currentPage >= max - 2 ? 'hidden ' : '';
    return (
      <button 
        onClick={handleClick} 
        value ={currentPage + 3}
        className={classHidden}>
          {'..'}
      </button>
    );  
  }
  // Кнопки меньше и больше  
  const buttonLess = () => {
    const classHidden = (currentPage <= min) ? 'hidden' : '';
    return (
      <button 
      onClick={handleClickLess} 
      className={classHidden}>
        {'<'}
      </button>
    );
  }
  const buttonMore = () => {
    const classHidden = (currentPage >= max) ? 'hidden' : '';
    return (
      <button 
      onClick={handleClickGreater} 
      className={classHidden}>
        {'>'}
      </button>
    );    
  }

  // Обработчики кликов на кнопки меньше или больше :
  const handleClickLess = () => {
      if (currentPage > min) {
          localStorage.setItem('currentPage', currentPage - 1);
          setCurrentPage(currentPage - 1);
          getRepos(query, perPage, currentPage - 1);
      }
  } 
  const handleClickGreater = () => {
      if (currentPage < max) {
          localStorage.setItem('currentPage', currentPage + 1);
          setCurrentPage(currentPage + 1);
          getRepos(query, perPage, currentPage + 1);
      }
  }
  // Обработчик кликов на кнопки с value
  const handleClick = (e) => {
    const val = parseInt(e.target.value);
    localStorage.setItem('currentPage', val);
    setCurrentPage(val);
    getRepos(query, perPage, val);
  }
  
  return (
    <>
      {buttonLess()}
      {buttonNumMin()}
      {buttonDotLeft()}
      {buttonsNum()}
      {buttonDotRight()}
      {buttonNumMax()}
      {buttonMore()}
    </>
  )
};

const mapStateToProps = (state) => ({
  totalCount: state.repos.totalCount,
  currentPage: state.repos.currentPage,
  query: state.repos.query,
  perPage: state.repos.perPage
});

export default connect(mapStateToProps, {setCurrentPage, getRepos})(Pagination);