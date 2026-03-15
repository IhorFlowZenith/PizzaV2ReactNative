import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.avatarWrapper, {marginTop: 20}]}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
          }}
        />
        <TouchableOpacity style={styles.editBadge}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png' }}
            style={styles.pencilIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Alex Walker</Text>
        <Text style={styles.phoneText}>+1 555 123 4567</Text>
      </View>

      <View style={{gap: 20, marginTop: 40}}>
        <MenuBlock title={"Personal Details"} iconUri={"https://cdn-icons-png.flaticon.com/512/1077/1077063.png"} />
        <MenuBlock title={"My Addresses"} iconUri={"https://cdn-icons-png.flaticon.com/128/6320/6320900.png"} />
        <MenuBlock title={"Settings"} iconUri={"https://cdn-icons-png.flaticon.com/128/3524/3524636.png"} />
      </View>

      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuBlock = ({ title, iconUri }: { title: string, iconUri: string }) => (
    <TouchableOpacity style={styles.menuContainer}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: iconUri }}
            style={styles.pencilIcon}
          />
        </View>
        <Text style={styles.menuText}>{title}</Text>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png' }}
          style={styles.pencilIcon}
        />
      </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: '#FF6B03',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  pencilIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  editBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FF6B03',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    gap: 10,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  phoneText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#94A3AF',
  },
  menuContainer: {
    width: '100%',
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#232323',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer : {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
  },
  menuText: {
    paddingStart: 20,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    backgroundColor: '#171717',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logoutText: {
    color: '#EF4444',
    fontSize: 28,
    fontWeight: 'bold',
  }
});

export default ProfileScreen;