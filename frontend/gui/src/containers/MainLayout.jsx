import { useEffect, useState } from 'react';
import axios from 'axios';
import FormFilter from "../components/FormFilter"
import LangList from "./LangList"
import { Typography } from 'antd';

const { Title } = Typography;


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

    const getLangsData = (country=null, type_employment=null) => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            country,
            type_employment
        })
            // .then(response => {
            //     setState({
            //         programmingLanguages: response.data
            //     });
            // })
            .then(response => console.log(response.data))
    }

    useEffect(() => {
        getLangsData()
    }, [])

    return (
        <div>
            <Title level={1} className='text-center' disabled>
                Самый свежий рейтинг языков программирования и фреймворков!
            </Title>
            <Title level={2} className='text-center' disabled>
                Рейтинг составлен на основе количества вакансий на hh.ru
            </Title>
            <Title level={3} type="secondary" className='text-center'>
                Информация обновляется каждый день!
            </Title>
            <FormFilter getLangsData={getLangsData} />
            <LangList data={state.programmingLanguages} />
        </div>
    )
}

export default MainLayout