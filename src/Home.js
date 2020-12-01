import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './item';

const data = [
    {
        name: 'Bảo trì hệ thống',
        member: '2 Member',
        img: '',
        id: '111',
        level: 1,
        children: [
            {
                id: '111_Erick',
                name: 'Erick1',
                level: 2,
                children: [
                    {
                        id: '111_Erick1',
                        name: 'Erick2',
                        level: 3,
                        children: [
                            {
                                id: '111_Erick11',
                                name: 'Erick3',
                                level: 4,
                            },

                            {
                                id: '111_Erick11',
                                name: 'Erick3',
                                level: 4,
                            },
                            {
                                id: '111_Erick11',
                                name: 'Erick3',
                                level: 4,
                            },

                        ]

                    },
                ]

            },
        ],
    }
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
