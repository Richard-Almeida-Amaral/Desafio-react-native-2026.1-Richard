import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar, Modal, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { styles } from "./styles";
import { Colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const ModalDelete = ({ visible, item, onClose }: any) => {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.container}>

                    <Text style={styles.header}>EXCLUIR PUBLICAÇÃO</Text>

                    <View style={styles.box}>
                        <Text style={styles.text}>
                            Deseja excluir o post?
                        </Text>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.confirm}>
                            <Text style={styles.buttonText}>SIM</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancel} onPress={onClose}>
                            <Text style={styles.buttonText}>NÃO</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default ModalDelete;