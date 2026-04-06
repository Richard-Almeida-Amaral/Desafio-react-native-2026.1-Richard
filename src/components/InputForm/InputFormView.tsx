import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./styles";
import { Colors } from "@/theme/colors";

type InputFormProps = {
    value: string;
    onChangeText: (text: string) => void;
    formPlaceholder: string;
};

export function InputFormView(props: InputFormProps) {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.formText}
                placeholder={props.formPlaceholder}
                placeholderTextColor={Colors.purple_3}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}