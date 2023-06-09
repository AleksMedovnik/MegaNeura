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
                image: {
                    url: 'https://avatars.mds.yandex.net/i?id=b5cbbba7cc1e2c93cced85ffcb6bd18a75eb9779-8497835-images-thumbs&n=13'
                }
              },
              {
                title: "Python",
                rating: 2,
                vacancies: 951,
                change: 2,
                image: {
                    url: 'https://avatars.mds.yandex.net/i?id=befd80c6a45b15061017cbb265f474d07ec08ad8-8538767-images-thumbs&n=13'
                }
              },
              {
                title: "C++",
                rating: 3,
                vacancies: 587,
                change: 0,
                image: {
                    url: 'https://avatars.mds.yandex.net/i?id=2b96d868c97ef160b760a3a5d2ca26cbf542f96a-4231455-images-thumbs&n=13'
                }
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
            <Title level={1} className='text-center' type="secondary">
                Самый свежий рейтинг языков программирования и фреймворков!
            </Title>
            <Title level={2} className='text-center' type="secondary">
                Рейтинг составлен на основе количества вакансий на hh.ru
            </Title>
            <Title level={3} type="secondary" className='text-center mb-50'>
                Информация обновляется каждый день!
            </Title>
            <FormFilter getLangsData={getLangsData} />
            <LangList data={state.programmingLanguages} />
        </div>
    )
}

export default MainLayout