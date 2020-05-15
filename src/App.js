import React from 'react'
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'


class App extends React.Component {

    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }
    render() {

        const { data } = this.state

        return (
            <div >
                <Cards className={styles.cards} data={data} />
                <CountryPicker />
                <Charts className={styles.charts} />


            </div>
        )
    }


}

export default App