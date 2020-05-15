import React from 'react'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'

import { fetchData } from './api'
import image from './image/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country })
    }

    render() {
        const { data, country } = this.state
        return (
            <div >
                <img alt="covid19" style={{ display: "block", marginTop: "50px", marginLeft: "auto", marginRight: "auto", width: "30%" }} src={image} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}

export default App