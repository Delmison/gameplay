import React,{useState} from "react";
import { View, FlatList, Text } from 'react-native';
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";


export function Home(){
    const [ category, setCategory]= useState('')

    const navigation = useNavigation();

    const appointments =[
        {
            id:'1',
            guild:{
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            
            category:'1',
            date:'06/01 as 18:00h',
            description:"É hoje que vemos chegar ao challenger sem perder uma partida md10"
        },
        {
            id:'2',
            guild:{
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            
            category:'1',
            date:'06/01 as 18:00h',
            description:"É hoje que vemos chegar ao challenger sem perder uma partida md10"
        }
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    return(
        <Background>
            <View style={styles.header}>            
                <Profile />
                <ButtonAdd />
            </View>
        
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
                renderItem={({item}) =>(
                <Appointment 
                    data={item} 
                    onPress={handleAppointmentDetails}
                />
            )}
            ItemSeparatorComponent={()=> <ListDivider/>}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            />
            </View>

        </Background>
    );
}