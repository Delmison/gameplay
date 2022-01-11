import React from 'react';
import {Image} from 'react-native';
import { styles } from './styles';

export function GuildIcon(){
    const uri ='https://img.ibxk.com.br/2021/10/programas/14064101163912216.png'
    return(
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    );
}