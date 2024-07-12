import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'nativewind';
import {View, Platform} from 'react-native';
import NoteIos from '../assets/icons/note_ios.svg';
import NoteAndroid from '../assets/icons/note_android.svg';
import LinearGradient from '../components/LinearGradient';
import {showRecipes} from '../store/actions/recipesActions';
import { RECIPES } from '../data/dummy_data';
import PhoneForm from './PhoneForm';

const StyledView = styled(View);

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showRecipes(RECIPES))
  }, []);
  
  return (
    <LinearGradient>
      <StyledView className='flex-1 items-center justify-center'>
        <StyledView className='p-5'>
          {Platform.OS === 'ios' ? <NoteIos height={24} width={24} fill={'white'} /> : null}
          {Platform.OS === 'android'  ? <NoteAndroid height={24} width={24} fill={'white'} /> : null}
        </StyledView>
        <PhoneForm />
      </StyledView>
    </LinearGradient>
  );
};

export default MainScreen;