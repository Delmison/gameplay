import React,{useState} from "react";
import {View, FlatList, Text} from 'react-native';
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader} from "../../components/ListHeader";
import { styles } from "./styles";

export function Home(){
    const [ category, setCategory]= useState('')

    const appointments =[
        {
            id:'1',
            guild:{
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            categor:'1',
            date:'06/01 as 18:00h',
            description:"É hoje que vemos chegar ao challenger sem perder uma partida md10"
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
        <View>
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader 
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />
            <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                <Text>{item.guild.name}</Text>
            )}
            
            />
            </View>
        </View>
        </View>
    );
}