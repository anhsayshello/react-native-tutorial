import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "grey",
    fontSize: 14,
  },
  blueText: {
    color: "blue",
  },
  bigText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

const FancyText = ({ isBlue, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export default function RepositoryItem({
  id,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) {
  return (
    <View>
      <FancyText isBig isBlue>
        {id}
      </FancyText>
      <FancyText>{fullName}</FancyText>
      <FancyText>{description}</FancyText>
      <FancyText>{language}</FancyText>
      <FancyText>{forksCount}</FancyText>
      <FancyText>{stargazersCount}</FancyText>
      <FancyText>{ratingAverage}</FancyText>
      <FancyText>{reviewCount}</FancyText>
      <Image source={{ uri: ownerAvatarUrl }} />
    </View>
  );
}
