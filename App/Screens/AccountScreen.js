import { FlatList, StyleSheet, View, Text } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/Lists/ListItem';
import ListItemSeparator from '../components/Lists/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    },
    targetScreen: routes.MESSAGES
  }

]

function AccountScreen({ navigation }) {
  return (
    <Screen extraStyles={styles.screen}>
      <ListItem
        title='Mosh Hamedani'
        description='programmingwithmosh.com'
        image={require('../assets/mosh.jpg')}
        marginBottom={20}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={<ListItemSeparator />}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          }
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor={colors.logOut} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light
  },
  top: {
    marginBottom: 100
  }
})

export default AccountScreen;
