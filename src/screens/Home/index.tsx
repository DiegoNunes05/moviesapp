import React, { useEffect, useState } from 'react';

import { MagnifyingGlass } from "phosphor-react-native";
import { View, Text, TextInput, FlatList} from "react-native";
import { styles } from './styles';
import { api } from '../../services/api';
import { CardMovies } from '../../components/CardsMovies';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}


export function Home() {
    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([])

    useEffect(() => {
        LoadMoreData()
    }, []);

    const LoadMoreData = async () => {
            const response = await api.get("/movie/popular");
            setDiscoveryMovies(response.data.results);
            console.log(JSON.stringify(response.data, null, 2));
    };
    return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Escolha o Seu Filme do Dia!</Text>
        <View style={styles.containerInput}>
            <TextInput 
                placeholderTextColor="#FFF" 
                placeholder='Buscar' 
                style={styles.input}
            />
            <MagnifyingGlass color='#FFF' size={25} weight='light'/>
        </View>
        <View>
            <FlatList 
                data={discoveryMovies}
                numColumns={3}
                renderItem={(item) => <CardMovies data={item.item} />}
                showsVerticalScrollIndicator={false}  
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            />
        </View>
    </View>
    );
}