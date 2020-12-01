import React, { PureComponent } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';



class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lstDataTemp: [],

        };
    }
    async Select(item) {
        console.log('itemitemitem', item)
        const { lstDataTemp } = this.state
        if (!lstDataTemp.includes(item)) {
            let data = [...lstDataTemp, item]
            this.setState({ lstDataTemp: data, });
        }
        else {
            this.setState({ lstDataTemp: lstDataTemp.filter(a => a !== item), });
        }
    }

    renderChild(item, i) {
        console.log('lstDataTemp111', this.state.count)
        return (
            <TouchableOpacity
                onPress={() => this.Select(item)}   >
                <View style={{ flexDirection: 'row', paddingLeft: (item.level) * 5, paddingTop: 10 }}>
                    <Text> ☭</Text>
                    <Text> {item.name}</Text>
                </View>
                {item?.children != undefined && this.state.lstDataTemp.includes(item) &&
                    <View style={{ flexDirection: 'column' }}>
                        {item.children.map((chil, i) =>
                            this.renderChild(chil, i)
                        )}
                    </View>
                }

            </TouchableOpacity>
        )
    }

    renderItem(item) {

        return (
            <View style={{ margin: 15, borderBottomWidth: 0.5, }}>
                <TouchableOpacity
                    onPress={() => this.Select(item)}
                    style={{ flexDirection: 'row', padding: 10 }}>

                    {this.state.lstDataTemp.includes(item) ?
                        <Text> ☯ </Text>
                        :
                        <Text> ♾ </Text>
                    }

                    <Text> {item.name}</Text>
                    <Text> ({item.member})</Text>
                </TouchableOpacity>
                {this.state.lstDataTemp.includes(item) && item.children != undefined &&
                    <View style={{ marginLeft: 40, }}>
                        {item.children.map((chil, i) =>
                            this.renderChild(chil, i)
                        )}
                    </View>
                }
            </View >
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        );
    }
}

export default Home;
