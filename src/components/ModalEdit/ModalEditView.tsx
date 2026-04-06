import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, Modal, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

const ModalEdit = ({ visible, item, onClose }: any) => {
    const [name, setName] = useState(item?.name || "");

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>

                    <Text style={styles.header}>EDITAR PUBLICAÇÃO</Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.info}>ID: 01</Text>
                    </View>

                    <Image source={item?.avatar} style={styles.image} />

                    <Text style={styles.label}>Título:</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />

                    <Text style={styles.label}>Descrição:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição da publicação"
                        placeholderTextColor="#2E2545"
                    />

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.buttonText}>FECHAR</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
};

export default ModalEdit;