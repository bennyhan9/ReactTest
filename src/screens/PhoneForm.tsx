import React, { useEffect, useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import { styled } from 'nativewind';
import Button from '../components/Button'
import SuccessModal from '../components/SuccessModal';
import { getPostData } from '../services/getData';
const StyledView = styled(View)
const StyledTextInput = styled(TextInput)

const PhoneForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const phoneNumberPattern = /^\d{10}$/;

  const  isValidPhoneNumber = (phoneNumber: string) => {
    return phoneNumberPattern.test(phoneNumber);
  }

  const handleFormSubmit = () => {
    // Assuming a basic validation for phone number
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter a phone');
      return;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      Alert.alert('Error', 'Please enter a phone that matches 10 digits');
      return;
    }

    // Handle submission logic here (e.g., API call)
    console.log('Submitting phone number:', phoneNumber);
    // Reset the phone number input
    setPhoneNumber('');
    // Display modal
    setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const getData = async () => {
    const data = await getPostData();
    setFetchedData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledView className='flex-1 items-center justify-center px-5'>
      <StyledTextInput
        className='px-5 mb-5 border-gray-300 border rounded-lg h-10 w-60 text-sm'
        placeholder="Enter your phone number"
        placeholderTextColor='#1A1A1A'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button
        title="Submit"
        onPress={handleFormSubmit}
        disabled={!phoneNumber.trim()}
      />
      {showModal ? <SuccessModal onClose={handleCloseModal} message={fetchedData?.title} /> : null}
    </StyledView>
  );
};

export default PhoneForm;
