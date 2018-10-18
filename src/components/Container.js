import React, { Component } from 'react';
import { connect }          from 'react-redux'
import {Button} from 'semantic-ui-react'

import List      from './List'
import Modal     from './Modal'
import Spinner   from './Spinner'
import SearchBar from './SearchBar'

import { displayGiphies, orderBy } from '../actions/displayGiphies'
import { displayMore } from '../actions/displayMore'

class Trending extends Component {
  state = {
    showModal   : false,
    selected    : null,
    searchValue : ''
  }

  componentDidMount(){
    this.props.displayGiphies();
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const diffHeight = 793
    const bottomOfPage = document.body.scrollHeight - diffHeight
    const scrollPosition = window.scrollY
    const offSetValue = this.props.giphs.length
   
    if( bottomOfPage === scrollPosition ) {
      this.props.displayMore(this.state.searchValue, offSetValue);
      window.scrollTo(0, bottomOfPage)
    }
   
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  submitSearch = () => {
    const { searchValue } = this.state;
    this.props.displayGiphies(searchValue);
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  handleImageClick = (giphObj) => () => {
    this.setState({ showModal: true, selected: giphObj})
  }

  handleOrder = () => {
    this.props.orderBy()
  }
 
  render() {
    const { giphs, isFetching, ascending } = this.props
    const { showModal, selected } = this.state
  
    return (
      <div>
        <div style={{ margin: '12px'}}>
          <Button
            onClick = { this.handleOrder } 
            secondary 
          >
            { ascending === true ? 'Ascending' : 'Descending'}
          </Button>
        </div>  
        <SearchBar 
          handleChange = { this.handleChange }
          submitSearch = { this.submitSearch }
        />
        <Modal 
          show       = { showModal } 
          contents   = { selected }
          closeModal = { this.closeModal } 
        />
        {
          isFetching ?
          <Spinner/>  :
          <List 
            giphs            = { giphs } 
            handleImageClick = { this.handleImageClick }
          />  
        }
      </div>
    );
  }
}

// Todo Logic for sorting by ascending or descending
const SortBySelector = (state) => {
  const giphs = state.giphs.data
  const ascending = state.giphs.ascending

  return ascending === state.giphs.ascending ? giphs.reverse() : giphs
}

const mapStateToProps = (state) => ({
  giphs        : SortBySelector(state),
  isFetching   : state.giphs.isFetching,
  errorMessage : state.giphs.errorMessage,
  ascending    : state.giphs.ascending
})

export default connect(mapStateToProps, { orderBy, displayGiphies, displayMore })(Trending);