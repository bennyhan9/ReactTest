import React, {useState} from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import {useSelector} from 'react-redux';
import Recipe from '../models/recipe';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import RecipeComponent from './Recipe'; // Adjust path as per your project structure

const { width: screenWidth } = Dimensions.get('window');

const CarouselRecipes: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const recipes = useSelector(state => state.RecipesReducer.recipes);

  const renderRecipeItem = ({ item }: { item: Recipe }) => {
    return <RecipeComponent recipe={item} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={recipes}
        renderItem={renderRecipeItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 40}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={recipes.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -15 }}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
});

export default CarouselRecipes;
