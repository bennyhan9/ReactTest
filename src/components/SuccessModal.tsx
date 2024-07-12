import React from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { styled } from 'nativewind';
import CloseSvg from '../assets/icons/close.svg';
const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(TouchableOpacity)

interface Props {
  onClose: () => void;
  message?: string;
}


const SuccessModal: React.FC<Props> = ({ onClose, message }) => {
  return (
    <Modal
      animationType="slide"
      visible={true}
      transparent={true}
      onRequestClose={onClose}
    >
      <StyledView style={styles.opaqueBackground} className='flex-1 items-center justify-center'>
        <StyledView className='items-center p-5 h-64 w-4/5 max-w-72 bg-white rounded-lg'>
          <StyledView className='mb-3.5 justify-center'>
            <StyledText className='mt-5 mb-1.5 text-center text-xl font-bold'>{'Thanks'}</StyledText>
            <StyledText className='text-base my-7 text-center text-trueGray-600'>{'Your phone number updated'}</StyledText>
            <StyledText className='mt-2.5 text-center text-sm text-gray-500'>Dummy Message: (axios)</StyledText>
            <StyledText className='mt-2.5 text-center text-sm text-gray-500'>{message}</StyledText>
          </StyledView>
          <StyledButton className='absolute p-2.5' style={styles.closeButton} onPress={onClose}>
            <CloseSvg width={24} height={24} fill="black" />
          </StyledButton>
        </StyledView>
      </StyledView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  opaqueBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    top: 10,
    right: 10,
  },
});

export default SuccessModal;
