import React, { useState } from "react";
import { View, Text, ImageBackground, StatusBar, FlatList } from "react-native";
import { styles } from "./styles";
import { characters } from "@/data/character";
import ListItens from "@/components/ListItens/ListItensView";
import ModalView from "@/components/ModalView/ModalViewView";
import ModalEdit from "@/components/ModalEdit/ModalEditView";
import ModalDelete from "@/components/ModalDelete/ModalDeleteView";

export function ManagementView() {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [viewVisible, setViewVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    return (
        <ImageBackground source={require("@/assets/images/siteImages/KomiImpactBackground.jpg")} style={styles.background} resizeMode="cover"
        >
            <View style={styles.overlay}>
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

                <View style={styles.container}>

                    <View style={styles.topPage}>
                        <Text style={styles.textPlaceholder}>Lista Builds</Text>
                    </View>

                    <View style={styles.header}>
                        <Text style={styles.headerId}>ID</Text>
                        <Text style={styles.headerTitulo}>TÍTULO</Text>
                        <Text style={styles.headerData}>DATA</Text>
                        <View style={{ width: 30 }} />
                    </View>

                    <FlatList
                        data={characters}
                        keyExtractor={(item) => item.name}
                        contentContainerStyle={styles.listContent}
                        renderItem={({ item, index }) => (
                            <ListItens
                                id={String(index + 1).padStart(2, "0")}
                                titulo={item.name}
                                avatar={item.avatar}
                                vision={item.vision}
                                onPress={() => {
                                    setSelectedItem(item);
                                    setViewVisible(true);
                                }}
                            />
                        )}
                    />

                    <View style={styles.topPage}></View>

                </View>

                <ModalView
                    visible={viewVisible}
                    item={selectedItem}
                    onClose={() => setViewVisible(false)}
                    onEdit={() => {
                        setViewVisible(false);
                        setEditVisible(true);
                    }}
                    onDelete={() => {
                        setViewVisible(false);
                        setDeleteVisible(true);
                    }}
                />

                <ModalEdit
                    visible={editVisible}
                    item={selectedItem}
                    onClose={() => setEditVisible(false)}
                />

                <ModalDelete
                    visible={deleteVisible}
                    item={selectedItem}
                    onClose={() => setDeleteVisible(false)}
                />

            </View>
        </ImageBackground>
    );
}