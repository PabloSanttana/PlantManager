import React, { useState } from "react";

import Modal from "react-native-modal";
import { SvgFromUri } from "react-native-svg";

import {
  ButtonAction,
  ContainerButtons,
  ContainerImage,
  ContainerMadal,
  Name,
  Text,
  ButtonActionText,
} from "./styles";

interface ModalProps {
  data: {
    id: string;
    name: string;
    photo: string;
  };
  handleFunc: (value: string, id?: string) => void;
  isVisible: boolean;
}

const ModalPlantsDelete = ({ data, handleFunc, isVisible }: ModalProps) => {
  return (
    <Modal
      animationIn="pulse"
      animationOut="pulse"
      isVisible={isVisible}
      useNativeDriver={true}
      onBackdropPress={() => handleFunc("cancel")}
      hideModalContentWhileAnimating={false}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <ContainerMadal>
        <ContainerImage>
          <SvgFromUri
            uri={data.photo}
            width={80}
            height={80}
            onLoad={() => console.log("opa")}
          />
        </ContainerImage>
        <Text>Deseja mesmo deletar sua</Text>
        <Name>{data.name}?</Name>
        <ContainerButtons>
          <ButtonAction
            activeOpacity={0.7}
            onPress={() => handleFunc("cancel")}
          >
            <ButtonActionText active={false}>Cancelar</ButtonActionText>
          </ButtonAction>
          <ButtonAction
            activeOpacity={0.7}
            onPress={() => handleFunc("ok", data.id)}
          >
            <ButtonActionText active={true}>Deletar</ButtonActionText>
          </ButtonAction>
        </ContainerButtons>
      </ContainerMadal>
    </Modal>
  );
};

export default ModalPlantsDelete;
