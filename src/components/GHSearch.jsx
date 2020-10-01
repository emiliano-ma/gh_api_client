import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export class GHSearch extends Component {
  state = {
    searchResult: [],
    inputField: ''
  }

  search = async (e) => {
    let input = this.state.inputField
    let result = await getSearch(input);
    this.setState({ searchResult: result });
  }

  render() {
    return (
      <>
        <Input onChange={(e) =>  this.setState({inputField: e.target.value})} data-cy="username" type="text" name="search" placeholder="Input GH username"/>
        <Button onClick={this.search} data-cy="search" name="search">Search</Button>
      </>
    )
  }
}

export default GHSearch


