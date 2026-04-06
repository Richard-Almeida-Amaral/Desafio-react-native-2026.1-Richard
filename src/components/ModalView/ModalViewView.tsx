import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {
    visible: boolean;
    item: any;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
};

const ModalView = ({ visible, item, onClose, onEdit, onDelete }: Props) => {
    if (!item) return null;

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>

                    <Text style={styles.header}>VISUALIZAR PUBLICAÇÃO</Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.info}>ID: 01</Text>
                    </View>

                    <Image source={item.avatar} style={styles.image} />

                    <Text style={styles.label}>Título:</Text>
                    <Text style={styles.input}>{item.name}</Text>

                    <Text style={styles.label}>Descrição:</Text>
                    <Text style={styles.input}>Descrição da publicação</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.editButton} onPress={onEdit}>
                            <Text style={styles.buttonText}>EDITAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                            <Text style={styles.buttonText}>EXCLUIR</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.buttonText}>FECHAR</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
};

export default ModalView;