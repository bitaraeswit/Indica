import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fefefe;
`;

export const Listing = styled.View`
  margin-top: 10px;
`;

export const ListingNotification = styled.View`
  margin-bottom: 10px;
`;

export const ListingNotificationSchedule = styled.View`
  flex-direction: row;
`;

export const ListingNotificationScheduleText = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Medium";
  color: #484848;
`;

export const ListingNotificationDescription = styled.View`
  padding: 0 20px;
  margin-top: 10px;
`;

export const ListingNotificationDescriptionTitle = styled.Text`
  font-size: 15px;
  font-family: "Poppins-Bold";
  color: #484848;
`;

export const ListingNotificationDescriptionText = styled.Text`
  font-size: 14px;
  font-family: "Nunito-Regular";
  color: #696969;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px
`;