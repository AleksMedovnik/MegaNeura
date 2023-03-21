import { useEffect, useState } from 'react';
import axios from 'axios';
import FormFilter from "../components/FormFilter"
import LangList from "./LangList"


const MainLayout = () => {
    // const [state, setState] = useState({
    //     programmingLanguages: []
    // })

    const [state, setState] = useState({
        programmingLanguages: [
            {
                title: "Java",
                rating: 1,
                vacancies: 1200,
                change: -3,
              },
              {
                title: "Python",
                rating: 2,
                vacancies: 951,
                change: 2,
              },
              {
                title: "C++",
                rating: 3,
                vacancies: 587,
                change: 0,
              },
        ]
    })

    const getLangsData = () => {
        // axios.get('')
        //     .then(response => {
        //         setState({
        //             programmingLanguages: response.data
        //         });
        //     })
    }

    useEffect(() => {
        getLangsData()
    }, [])

    return (
        <div>
            <FormFilter getLangsData={getLangsData} />
            <LangList data={state.programmingLanguages} />
        </div>
    )
}

export default MainLayout