import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import { getSearch } from "../modules/searchGh";

export class GHSearch extends Component {
  state = {
    searchResult: [],
    inputField: "",
  };

  search = async () => {
    let input = this.state.inputField;
    let result = await getSearch(input);
    this.setState({ searchResult: result });
  };

  render() {
    let searchResultList;

    if (this.state.searchResult.length > 0) {
      searchResultList = this.state.searchResult.map((item) => {
        return (
          <div data-id={item.id} data-cy={"search-result-" + item.id}>
            <p>{item.login}</p>
          </div>
        );
      });
    }

    return (
      <>
        <Input
          onChange={(e) => this.setState({ inputField: e.target.value })}
          data-cy="username"
          type="text"
          name="search"
          placeholder="Input GH username"
        />
        <Button onClick={this.search} data-cy="search" name="search">
          Search
        </Button>
        <div>{searchResultList}</div>
      </>
    );
  }
}

export default GHSearch;
