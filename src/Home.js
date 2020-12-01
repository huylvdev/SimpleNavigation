import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './item';

const data = [
    {
        name: 'Bảo trì hệ thống',
        member: '2 Member',
        img: '',
        id: '111',
        pd: 1,
        children: [
            {
                id: '111_Erick',
                name: 'Erick1',
                pd: 5,
                children: [
                    {
                        id: '111_Erick1',
                        name: 'Erick11',
                        pd: 10,
                        children: [
                            {
                                id: '111_Erick11',
                                name: 'Erick111',
                                pd: 15,
                            },

                            {
                                id: '111_Erick11',
                                name: 'Erick111',
                                pd: 15,
                            },
                            {
                                id: '111_Erick11',
                                name: 'Erick111',
                                pd: 15,
                            },

                        ]

                    },
                ]

            },
        ],
    }
    , {
        name: 'Giải quyết khiếu nại',
        member: '2 Member',
        img: '',
        id: '222',
        children: [
            {
                id: '222_Erick',
                name: 'Erick',
                age: 10,
                children: [
                    {
                        id: '111_Erick13',
                        name: 'Erick3',
                    }
                ]
            },
            {
                id: '222_Rose',
                name: 'Rose',
                age: 12,
            },
        ],
    }
    , {
        name: 'Công việc riêng',
        member: '2 Member',
        img: '',
        id: '333',
        children: [
            {
                id: '333_Erick',
                name: 'Erick',
                age: 10,
            },
            {
                id: '333_Rose',
                name: 'Rose',
                age: 12,
            },
        ],
    },
    {
        name: 'Project1',
        member: 'Member',
        img: 'https://reactnative.dev/img/tiny_logo.png',
        id: '444',
    },
    {
        name: 'Project2',
        member: '3 Member',
        img: '',
        id: '555',
    }, {
        name: 'Project2',
        member: '2 Member',
        img: 'https://www.vuahethong.com/wp-content/uploads/2018/09/cong-nghe-4_0.jpg',
        id: '666',
    }, {
        name: 'Project3',
        member: '3 Member',
        img: '',
        id: '777',
    },
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    OnChangValue(value) {
        console.log('value11', value)
    }

    render() {
        return (
            <View>
                <ListItem
                    data={data}
                    onValuesChange={(value) => this.OnChangValue(value)}
                />
            </View>
        );
    }
}

export default Home;
