import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Header = styled.View``;

export const Listing = styled.View`
  margin-top: 5px;
`;

export const InputFieldContainer = styled.View`
  padding: 0 20px;
`;

export const ListingCoupon = styled.TouchableOpacity`
  flex: 1;
  background-color: #fefefe;
  flex-direction: row;
  padding: 10px 20px;
  border-radius: 10px;
  elevation: 1;
`;

export const ListingCouponProfile = styled.View`
  flex-direction: row;
`;
export const CouponImg = styled.Image`
  margin-top: 5px;
  margin-right: 10px;
  width: 61px;
  height: 61px;
  border-radius: 61px;

`;

export const ListingCouponProfileInfo = styled.View`
  padding: 0px 10px ;
  justify-content: space-between;

`;

export const ListingCouponProfileInfoTitle = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;

`;
export const ListingCouponProfileInfoValue = styled.Text`
  padding: 5px 0;
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const ListingCouponProfileInfoAplication = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;
