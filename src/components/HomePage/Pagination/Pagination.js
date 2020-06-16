import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../../redux/reposWithCommitsAndContributors/actions';
import './pagination.css';

const Pagination = ({ totalCount, currentPage, perPage, setCurrentPage }) => {
  
  const min = 1;
  let max = Math.ceil(totalCount / perPage);

  const handleClickLess = () => {
      if (currentPage > min) {
          setCurrentPage(currentPage - 1);
      }
  } 
  const handleClickGreater = () => {
      if (currentPage < max) {
          setCurrentPage(currentPage + 1);
      }
  }

  // const addPageButton = page => {
  //   return <button>{page}</button>
  // };

  // currentPage = 3;
  max = 5;

  const handleClick = (e) => {
    const val = parseInt(e.target.value);
    setCurrentPage(val);
  }

  const addPageButtons = (max) => {
    let arrButtons = []
    for (let i = 1; i <= max; i++) {
      arrButtons.push(<button onClick={handleClick} value={i}>{i}</button>);
    }
    return arrButtons;
  }

  const fnPagination = () => {

    let val = currentPage + 5;
    if (max < 6) {
      return (
        <>
          {(currentPage <= max) && <button onClick={handleClick} value ={currentPage} className="currentPage" disabled>{currentPage}</button>}
          {(currentPage + 1 <= max) && <button onClick={handleClick} value ={currentPage + 1}>{currentPage + 1}</button>}
          {(currentPage + 2 <= max) && <button onClick={handleClick} value ={currentPage + 2}>{currentPage + 2}</button>}
          {(currentPage + 3 <= max) && <button onClick={handleClick} value ={currentPage + 3}>{currentPage + 3}</button>}
          {(currentPage + 4 <= max) && <button onClick={handleClick} value ={currentPage + 4}>{currentPage + 4}</button>}
          {(currentPage + 5 <= max) && <button onClick={handleClick} value ={currentPage + 5}>{currentPage + 5}</button>}
        </>
      )
      
      // for (let i = 0; i < max; i++) {

      // }
      // return (
      //   <>
      //   </=>
      // )
    }

    if (currentPage <= 3) {
      return (
        <> 
          {currentPage !== 1 &&((currentPage === 2) ? <><span className="mini1"/><button  onClick={handleClick} value ={min}>{min}</button></> : <><button  onClick={handleClick} value ={min}>{min}</button><button onClick={handleClick} value ={currentPage - 1}>...</button></>)}
          {currentPage === 1 && <span className="mini2"/>}
          <button onClick={handleClick} value ={currentPage} className="currentPage" disabled>{currentPage}</button>
          <button onClick={handleClick} value ={currentPage + 1}>{currentPage + 1}</button>
          <button onClick={handleClick} value ={currentPage + 2}>{currentPage + 2}</button>
          <button onClick={handleClick} value ={currentPage + 3}>{currentPage + 3}</button>
          <button onClick={handleClick} value ={currentPage + 4}>{currentPage + 4}</button>
          {(currentPage !== max) ? <><button onClick={handleClick} value ={currentPage + 5}>...</button><button  onClick={handleClick} value ={max}>{max}</button></> : null}
        </>
      )
    } else if (currentPage >= max - 2) {
      return (
        <>
          {(currentPage !== 1) ? <><button onClick={handleClick} value ={min}>{min}</button><button onClick={handleClick} value ={currentPage - 5}>...</button></> : null} 
          <button onClick={handleClick} value ={currentPage - 4}>{currentPage - 4}</button>
          <button onClick={handleClick} value ={currentPage - 3}>{currentPage - 3}</button>
          <button onClick={handleClick} value ={currentPage - 2}>{currentPage - 2}</button>
          <button onClick={handleClick} value ={currentPage - 1}>{currentPage - 1}</button>
          <button onClick={handleClick} value ={currentPage} className="currentPage" disabled>{currentPage}</button>
          {(currentPage !== max) ? <><button  onClick={handleClick} value ={currentPage + 1}>...</button><button onClick={handleClick} value ={max}>{max}</button></> : null}
        </>
      )
    } else {
      return (
        <>
          {(currentPage !== 1) ? <><button onClick={handleClick} value ={min}>{min}</button><button  onClick={handleClick} value ={currentPage - 3}>...</button></> : null} 
          <button onClick={handleClick} value ={currentPage - 2}>{currentPage - 2}</button>
          <button onClick={handleClick} value ={currentPage - 1}>{currentPage - 1}</button>
          <button onClick={handleClick} value ={currentPage} className="currentPage" disabled>{currentPage}</button>
          <button onClick={handleClick} value ={currentPage + 1}>{currentPage + 1}</button>
          <button onClick={handleClick} value ={currentPage + 2}>{currentPage + 2}</button>
          {(currentPage !== max) ? <><button onClick={handleClick} value ={currentPage + 3}>...</button><button  onClick={handleClick} value ={max}>{max}</button></> : null} 
        </>
      )
    }
  };
  
  return (
    <>
      <button onClick={handleClickLess} className={(currentPage <= min) ? 'hidden' : ''}>{'<'}</button>
      {fnPagination()}
      <button onClick={handleClickGreater}  className={(currentPage >= max) ? 'hidden' : ''}>{'>'}</button>
    </>
  )
};

const mapStateToProps = (state) => ({
  totalCount: state.repos.totalCount,
  currentPage: state.repos.currentPage,
  perPage: state.repos.perPage
});

export default connect(mapStateToProps, {setCurrentPage})(Pagination);