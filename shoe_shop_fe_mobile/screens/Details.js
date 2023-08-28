import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons"
import { latestList, shoesList1, shoesList2 } from '../constants/datas'
//import SimpleImageSlider from 'react-native-image-slider-box'
import { SliderBox } from "react-native-image-slider-box";
import axios from 'axios'
import Constants from 'expo-constants';


const Details = ({ navigation, route }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  }

  const id = route.params.productId;
  const [productDetail, setProductDetail] = useState(null);
  const [sliderImages, setSliderImages] = useState(null);
  const [selectSwatch, setSelectwatch] = useState(null);
  const [rem, setRem] = useState(null);
  const [indexColor, setIndexColor] = useState("0");

  useEffect(() => {
    console.log(id)
    axios
      .get(`${Constants.expoConfig.extra.apiURL}products/${id}`)
      .then((res) => {
        setProductDetail(res.data);
        setSliderImages(res.data.img);
        setSelectwatch(res.data.packing);
      })
      .catch(console.log);

  }, [id]);
  return (
    <>
    {productDetail && (
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}>
      <View style={{
        flex: 1,
        backgroundColor: COLORS.gray
      }}>
        <View style={{
          marginHorizontal: 22,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: SIZES.width - 44,
          top: 22,
          zIndex: 999
        }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
          >
            {
              isFavourite ? (
                <Ionicons
                  name="md-heart-sharp"
                  size={24}
                  color={COLORS.black}
                />
              ) : (
                <Ionicons
                  name="md-heart-outline"
                  size={24}
                  color={COLORS.black}
                />
              )
            }
          </TouchableOpacity>
        </View>

        {/* {sliderImages && sliderImages.length > 0 && (
        <SimpleImageSlider width={500} height={500} images={sliderImages} showNavs={true} />)}
         */}
         {sliderImages && sliderImages.length > 0 && (
         <SliderBox images={sliderImages} sliderBoxHeight={400} 
        //  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
         />)}
          
          <View style={{
        backgroundColor: COLORS.white,
        borderRadius: 36,
        paddingHorizontal: 22,
        paddingVertical: 22,
        position: "absolute",
        width: "100%",
        bottom: 0
      }}>
        <Text style={{ ...FONTS.h3 }}>{productDetail.title}</Text>
        <Text style={{ ...FONTS.body3 }}>{productDetail.brand}</Text>
        <Text style={{ ...FONTS.body3 }}>Tình trạng: {rem}</Text>

        <View style={{ marginVertical: 22 }}>
          <Text style={{ ...FONTS.h4 }}>Select Size: </Text>

          <View style={{
            flexDirection: "row",
            marginVertical: 18
          }}>

            <TouchableOpacity>
              {selectSwatch && selectSwatch.length > 0 && selectSwatch.map((item, index) => {
                return (<>
                  <TextInput key={index} type="radio" id={"color" + index} name="color" checked={index === indexColor} onChange={(e) => setIndexColor(index)} />
                  <Text aria-label={"color" + index}>{item.color}</Text></>
                );
              })}
            </TouchableOpacity>
            <TouchableOpacity>
              {selectSwatch && selectSwatch.length > 0 && selectSwatch[indexColor].size.map((item, index) => {
                return (<>
                  {item.remaining > 0 ? (
                    <>
                      <TextInput key={index} type="radio" id={"size" + item.value} name="size"  onChange={(e) => setRem(item.remaining)} />
                      <Text aria-label={"size" + item.value}>{item.value}</Text>
                    </>
                  ) : (
                    <Text className="disabled-label" htmlFor={"size" + item.value}>
                      {item.value}
                    </Text>
                  )}</>
                );
              })}
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ ...FONTS.h4 }}>Qty</Text>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: 'center',
          marginVertical: 6
        }}>
          <View style={{
            backgroundColor: COLORS.gray,
            height: 48,
            width: 134,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            paddingHorizontal: 12,
            borderRadius: 24
          }}>
            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }}
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: "center"
              }}
            >
              <Feather
                name="minus"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <Text style={{ ...FONTS.body3 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1)
              }}
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: "center"
              }}
            >
              <Feather
                name="plus"
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ ...FONTS.body4 }}>Total Price</Text>
            <Text style={{ ...FONTS.h3 }}>{productDetail.price.toLocaleString()}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
        >
          <Feather
            name="shopping-bag"
            size={24}
            color={COLORS.white}
          />

          <Text style={{
            ...FONTS.h3,
            color: COLORS.white,
            marginLeft: 12
          }}>Add to Bag</Text>
        </TouchableOpacity>
      </View>



        </View>
      </SafeAreaView>
    )}
</>)}
export default Details



const styles = StyleSheet.create({
  checkboxContainer: {
  alignItems: "center",
  justifyContent: 'center',
  height: 44,
  width: 44,
  borderRadius: 22,
  borderWidth: 1,
  borderColor: COLORS.gray,
  backgroundColor: COLORS.gray,
  marginRight: 12
  },
  selectedCheckbox: {
  backgroundColor: COLORS.gray
  },
  checkboxText: {
  color: COLORS.white,
  fontSize: 12
  },
  button: {
  marginTop: 12,
  height: 60,
  width: SIZES.width - 44,
  borderRadius: 20,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: COLORS.primary
  }
  })