import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styled } from 'nativewind';
import Recipe from '../models/recipe';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)


// Recipe component
const RecipeComponent: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <StyledView className='flex-1 mt-1 p-5 bg-white'>
      <StyledImage source={{uri: recipe?.imageUri}} className='w-full h-48 mb-2.5 resize-cover rounded-lg' />
      <StyledText className='font-semibold text-2xl mb-2'>{recipe?.title}</StyledText>
      <StyledText className='text-base mb-2.5'>Duration: {recipe?.duration} minutes</StyledText>

      <StyledText className='mt-2.5 mb-1 font-semibold text-lg'>Ingredients:</StyledText>
      <FlatList
        data={recipe?.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <StyledText className='text-base ml-2.5'>{item}</StyledText>}
      />

      <StyledText className='mt-2.5 mb-1 font-semibold text-lg'>Steps:</StyledText>
      <FlatList
        data={recipe?.steps}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <StyledText className='text-base ml-2.5'>
            {index + 1}. {item}
          </StyledText>
        )}
      />
    </StyledView>
  );
};

export default RecipeComponent;
