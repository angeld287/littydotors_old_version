import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

import debounce from 'lodash/debounce' // 1

const SearchIceCreams = gql`
  query($searchQuery: String) {
    ListDoctors(filter: {
      name: {
        contains: $searchQuery
      }
    }) {
      items {
        name
        id
      }
    }
  }
` // 2

const ListIceCreams = gql`
  query {
    listDoctors {
      items {
        name
        id
      }
    }
  }
` // 3

class DoctorSearch extends Component {
  state = {
    searchQuery: '' // 4
  }
  onChange = (e) => { // 5
    const value = e.target.value
    this.handleFilter(value)
  }
  handleFilter = debounce((val) => { // 6
    this.props.onSearch(val)
  }, 250)
  render() {
    const { loading } = this.props.data
    const { items } = this.props.data.listIceCreams
    return (
      <div className="App">
        <input
          style={styles.input}
          onChange={this.onChange.bind(this)}
          placeholder='Search for ice cream'
        />
        { // 7
          !!loading && (
            <p>Searching...</p>
          )
        }
        { // 8
          !loading && !items.length && (
            <p>Sorry, no results.</p>
          )
        }
        { // 9
          !loading && items.map((item, index) => (
            <div key={index} style={styles.container}>
              <p style={styles.title}>{item.name}</p>
              <p style={styles.description}>{item.id}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default compose(
  graphql(ListIceCreams, {
    options: data => ({
      fetchPolicy: 'cache-and-network'
    }),
    props: props => ({
      onSearch: searchQuery => {
        return props.data.fetchMore({
          query: searchQuery === '' ? ListIceCreams : SearchIceCreams, // 10
          variables: {
            searchQuery
          },
          updateQuery: (previousResult, { fetchMoreResult }) => ({ // 11
            ...previousResult,
            listIceCreams: {
              ...previousResult.listIceCreams,
              items: fetchMoreResult.listIceCreams.items
            }
          })
        })
      },
      data: props.data
    })
  })
)(DoctorSearch);

const styles = {
  container: {
    padding: 10,
    borderBottom: '1px solid #ddd'
  },
  title: {
    fontSize: 18
  },
  description: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, .5)'
  },
  input: {
    height: 40,
    width: 300,
    padding: 7,
    fontSize: 15,
    outline: 'none'
  }
}