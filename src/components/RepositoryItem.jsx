import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    margin: 4,
  },
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 25,
  },
});

const FancyText = ({ isBlue, isBig, children, ...props }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

const formatNumber = (number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(number);
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
        <View
          style={{
            gap: 8,
            alignItems: "flex-start",
          }}
        >
          <FancyText isBig>{fullName}</FancyText>
          <FancyText>{description}</FancyText>
          <FancyText
            style={{
              padding: 10,
              backgroundColor: "blue",
              color: "white",
              borderRadius: 8,
            }}
          >
            {language}
          </FancyText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 16,
        }}
      >
        <View style={{ gap: 6, alignItems: "center" }}>
          <FancyText style={{ fontWeight: 700 }}>
            {formatNumber(stargazersCount)}
          </FancyText>
          <FancyText>Stars</FancyText>
        </View>
        <View style={{ gap: 6, alignItems: "center" }}>
          <FancyText style={{ fontWeight: 700 }}>
            {formatNumber(forksCount)}
          </FancyText>
          <FancyText>Forks</FancyText>
        </View>
        <View style={{ gap: 6, alignItems: "center" }}>
          <FancyText style={{ fontWeight: 700 }}>
            {formatNumber(ratingAverage)}
          </FancyText>
          <FancyText>Reviews</FancyText>
        </View>
        <View style={{ gap: 6, alignItems: "center" }}>
          <FancyText style={{ fontWeight: 700 }}>
            {formatNumber(reviewCount)}
          </FancyText>
          <FancyText>Rating</FancyText>
        </View>
      </View>
    </View>
  );
}
