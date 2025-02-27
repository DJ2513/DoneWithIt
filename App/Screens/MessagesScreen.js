import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/Lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/Lists/ListItemSeparator";
import ListItemDeleteAction from "../components/Lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Itzel",
    description: "Hey beutiful ;). How you doin'?",
    image: require("../assets/itzel.png"),
  },
  {
    id: 2,
    title: "GG",
    description: "Bro you own me $50 buck! When are you paying me?",
    image: require("../assets/gg.png"),
  },
];

function MessagesScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen extraStyles={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("Item pressed!", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MessagesScreen;
