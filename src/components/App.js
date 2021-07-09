import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { imageData: [] }

  onFormSubmit = async (term) => {
    const imageData = await axios.get('https://api.pexels.com/v1/search', {
      params: { query: term },
      headers: {
        Authorization:
          '563492ad6f9170000100000187275864ed6e4061960305d551c76f5a',
      },
    })
    this.setState({ imageData: imageData.data.photos })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1em' }}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.imageData} />
      </div>
    )
  }
}

export default App
